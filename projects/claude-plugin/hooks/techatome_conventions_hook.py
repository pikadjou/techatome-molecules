#!/usr/bin/env python3
"""
techatome Conventions Hook for Claude Code.
Warns about common violations before writing Angular/TypeScript files:
- Object keys not sorted alphabetically (sort-keys ESLint rule)
- Missing this. prefix in HTML templates
- Non-null assertion (!) in HTML templates
- Hand-written date formats or explicit locale in the date pipe
- host: { '[class.x]': ... } bindings for component variants (use [ngClass] + SCSS)
- Non-lazy route imports
- SCSS: hand-written var(--ta-...), --ta-* reassignment, raw colors, raw px,
  font-family / letter-spacing overrides, display: flex without the flex.* mixins
"""

import json
import re
import sys


TYPESCRIPT_PATTERNS = [
    {
        "name": "sort_keys_object",
        "description": "Object literal keys must be sorted alphabetically (sort-keys ESLint rule)",
        "check": "typescript",
        "reminder": """⚠️ techatome Convention: sort-keys
All object literal keys must be sorted alphabetically (ESLint rule enforced as error).

Example of keys that need sorting:
  { title: '', status: '', assigneeId: '' }   // ❌ not sorted
  { assigneeId: '', status: '', title: '' }   // ✅ sorted

This applies to: @Component({...}), object arguments, InputBase constructors, route definitions, etc.
The linter will block the build if keys are not sorted.""",
    },
    {
        "name": "no_hardcoded_url",
        "description": "No hardcoded URL strings in route paths",
        "substrings": ["path: '", 'path: "'],
        "reminder": """⚠️ techatome Convention: No hardcoded route strings
Routes must use taRoutes.getUrl() with an enum, never hardcoded strings.

Instead of:
  { path: 'my-feature/list', ... }   // ❌

Use:
  taRoutes.addRoute({ key: EMyRoute.list, url: 'list', ... })
  { path: taRoutes.getUrl([EMyRoute.myFeature, EMyRoute.list]), ... }  // ✅""",
    },
    {
        "name": "direct_http_client",
        "description": "Direct HttpClient usage instead of taBaseService",
        "substrings": ["inject(HttpClient)", "private http: HttpClient", "private _http: HttpClient"],
        "reminder": """⚠️ techatome Convention: Use taBaseService, not HttpClient directly
Services must extend taBaseService from @ta/server and use this._graphService.

Instead of:
  constructor(private http: HttpClient) {}   // ❌

Use:
  export class MyService extends taBaseService {   // ✅
    constructor() { super(); super.registerRoutes({ graphEndpoint }); }
  }""",
    },
    {
        "name": "missing_standalone",
        "description": "Component decorator missing standalone: true",
        "substrings": ["@Component({"],
        "reminder": """⚠️ techatome Convention: standalone: true required
All components must have standalone: true in their @Component decorator.

@Component({
  standalone: true,   // ✅ always required
  selector: 'app-my-component',
  ...
})""",
    },
    {
        "name": "host_class_binding",
        "description": "Variant classes bound in the @Component host metadata",
        "substrings": ["'[class.", '"[class.', "'[attr.data-"],
        "reminder": """⚠️ techatome Convention: variants via [ngClass] in the template, rules in the SCSS
Do not toggle variant classes with host: { '[class.x]': ... } in the decorator.
The template root carries [ngClass]="this.getClass()" and the SCSS does the rest
(pattern of ta-label, ta-button, ta-data-grid).

Instead of:
  host: { '[class.row]': "this.orientation() === 'row'" }   // ❌

Use:
  public getClass(): string { return `data-grid-${this.orientation()}`; }   // ✅
  <div class="data-grid" [ngClass]="this.getClass()">""",
    },
    {
        "name": "subscribe_without_register",
        "description": "Direct .subscribe() without _registerSubscription",
        "substrings": [").subscribe(", "$.subscribe("],
        "reminder": """⚠️ techatome Convention: Use _registerSubscription() for all subscriptions
All subscriptions must be registered to ensure proper cleanup on component destroy.

Instead of:
  this.myObs$.subscribe(...)   // ❌ memory leak risk

Use:
  this._registerSubscription(this.myObs$.subscribe(...))   // ✅""",
    },
]

HTML_PATTERNS = [
    {
        "name": "non_null_assertion_in_template",
        "description": "Non-null assertion operator in a template binding",
        "reminder": """⚠️ techatome Convention: no non-null assertion (!) in templates
Let the @if block capture the value instead of asserting it.

Instead of:
  @if (this.menuUser()) {
    <ta-menu [menu]="this.menuUser()!"></ta-menu>     // ❌
  }

Use:
  @if (this.menuUser(); as menuUser) {
    <ta-menu [menu]="menuUser"></ta-menu>             // ✅
  }""",
    },
    {
        "name": "date_format_by_hand",
        "description": "Custom date pattern or explicit locale passed to the date pipe",
        "reminder": """⚠️ techatome Convention: use the date formats already provided
The date pipe only takes Angular's predefined formats — they follow LOCALE_ID and the theme.
No hand-written pattern, no locale argument.

Instead of:
  {{ visit.startAt | date: 'EEEE d MMMM' : undefined : this.locale }}   // ❌

Use:
  {{ visit.startAt | date: 'fullDate' }}                                 // ✅
  {{ visit.startAt | date: 'shortTime' }}                                // ✅
  <ta-hour-date-line [startDate]="…" [endDate]="…">                      // ✅ date + plage horaire
  <ta-time-ago [date]="…">                                               // ✅ « il y a 2 jours »
Allowed: short|medium|long|full, shortDate|mediumDate|longDate|fullDate, shortTime|mediumTime|longTime|fullTime.""",
    },
    {
        "name": "missing_this_in_template",
        "description": "Template bindings should use this. prefix",
        "reminder": """⚠️ techatome Convention: Use this. in templates
All component property and method references in HTML templates must be prefixed with this.

Examples:
  [input]="myForm"              // ❌
  [input]="this.myForm"         // ✅

  (action)="save()"             // ❌
  (action)="this.save()"        // ✅

  [isLoading]="requestState.isLoading()"       // ❌
  [isLoading]="this.requestState.isLoading()"  // ✅

Exception: @for/@let block variables do NOT use this.:
  @let list = this.items$ | async;     // this. on source ✅
  @for (item of list; track item.id)   // no this. on loop variable ✅""",
    },
]


SCSS_PATTERNS = [
    {
        "name": "hand_written_css_var",
        "regex": r"var\(\s*--ta-",
        "reminder": """⚠️ techatome Convention: tokens are read with common.get-var(), never var(--ta-…)
No hand-written var(--ta-xxx), with or without a fallback value.

Instead of:
  padding: var(--ta-card-padding, #{common.get-var(space, md)});   // ❌

Use:
  padding: common.get-var(components, card, padding);              // ✅
A missing token is added to _vars.scss (map components.<component>), never replaced by a raw value.""",
    },
    {
        "name": "token_reassignment",
        "regex": r"^\s*--ta-[a-z0-9-]+\s*:",
        "reminder": """⚠️ techatome Convention: no reassignment of a component's tokens from outside
Setting --ta-xxx: … on a child component (ta-label { --ta-label-radius: … }) restyles it from the
place that uses it — forbidden, like ::ng-deep. Add a variant to the component instead
(type, shape, variant…) and use it: <ta-label shape="pill" type="neutral">.""",
    },
    {
        "name": "raw_color",
        "regex": r"(?<![\w-])#[0-9a-fA-F]{3,8}\b|\brgba?\(",
        "reminder": """⚠️ techatome Convention: no raw color (hex, rgb(), rgba())
Every color is a token: common.get-var(text|surface|border|icon, …).
Translucent white on a dark surface → common.get-var(surface, veil, xs|sm|md|lg).
A color specific to one component → components.<component> in _vars.scss
(derived tones with color.change(map.get($brand, 900), $alpha: …)).

Instead of:
  background: #0b1426;                              // ❌
  border: 1px solid rgba(255, 255, 255, 0.14);      // ❌

Use:
  background: common.get-var(components, lightbox, background);   // ✅
  border: 1px solid common.get-var(surface, veil, md);            // ✅""",
    },
    {
        "name": "raw_spacing",
        "regex": r"^\s*(padding|margin|gap|row-gap|column-gap)(-[a-z]+)?\s*:[^;]*\b(?!0px)(?!1px)(?!2px)\d+px",
        "reminder": """⚠️ techatome Convention: no raw px on padding / margin / gap
Use common.get-var(space, xs|sm|md|lg|xl|xxl) or add a components.<component> token to _vars.scss.
An "eyeballed" value (11px, 13px, 22px) is not an exception.

Instead of:
  padding: 11px 16px;                                                   // ❌

Use:
  padding: common.get-var(components, tab-bar, pill, padding-vertical)
    common.get-var(components, tab-bar, pill, padding-horizontal);      // ✅""",
    },
    {
        "name": "font_override",
        "regex": r"^\s*(font-family|letter-spacing|font-size|font-weight)\s*:\s*(?!\s|common\.get-var|inherit)",
        "reminder": """⚠️ techatome Convention: we do not change the font
No hand-written font-family, font-size, font-weight or letter-spacing.
Size and weight come from the mixins, the family from the theme.

Instead of:
  font-family: ui-monospace, Menlo, monospace;   // ❌
  font-size: 13px; font-weight: 600;             // ❌

Use:
  @include fonts.fontSizeBody(sm, true);                 // ✅
  font-family: common.get-var(font, display, family);    // ✅ only alternative family""",
    },
    {
        "name": "flex_without_mixin",
        "regex": r"display\s*:\s*flex\s*;[\s\S]{0,80}?(flex-direction|justify-content|align-items)\s*:",
        "reminder": """⚠️ techatome Convention: flexbox via the flex.* mixins
Do not write display: flex; flex-direction: … by hand.

Instead of:
  display: flex;
  flex-direction: column;      // ❌

Use:
  @include flex.flex-column();       // ✅
  @include flex.space-between();     // ✅  (row + justify-content: space-between)
  @include flex.align-center();      // ✅  (display: flex; align-items: center)""",
    },
    {
        "name": "ng_deep",
        "regex": r"::ng-deep",
        "reminder": """⚠️ techatome Convention: no ::ng-deep
A component is never restyled from the place that uses it. Add a variant to the component,
or style third-party DOM from @ta/styles (ta/vendors) prefixed by the component selector.""",
    },
]


def is_typescript_file(file_path: str) -> bool:
    return file_path.endswith(".ts") and not file_path.endswith(".spec.ts")


def is_html_template(file_path: str) -> bool:
    return file_path.endswith(".component.html")


def is_scss_file(file_path: str) -> bool:
    # Token maps themselves (_vars.scss, _theme.scss) legitimately hold raw values.
    return file_path.endswith(".scss") and not file_path.replace("\\", "/").split("/")[-1].startswith("_")


def is_techatome_file(file_path: str) -> bool:
    """Only check files in the techatome/techatome projects."""
    return (
        "/projects/" in file_path
        or "/src/app/" in file_path
        or "\\projects\\" in file_path
        or "\\src\\app\\" in file_path
    )


def check_typescript(content: str) -> list[dict]:
    """Check TypeScript content for convention violations."""
    issues = []

    for pattern in TYPESCRIPT_PATTERNS:
        if pattern["name"] == "missing_standalone" and "standalone: true" in content:
            continue
        if "substrings" in pattern:
            for substring in pattern["substrings"]:
                if substring in content:
                    issues.append(pattern)
                    break

    return issues


def check_scss(content: str) -> list[dict]:
    """Check SCSS content for raw values and hand-written tokens."""
    issues = []

    for pattern in SCSS_PATTERNS:
        if re.search(pattern["regex"], content, re.MULTILINE):
            issues.append(pattern)

    return issues


def check_html(content: str) -> list[dict]:
    """Check HTML template for non-null assertions and missing this. prefix."""
    issues = []

    # e.g. [menu]="this.menuUser()!"  or  {{ this.user()!.name }}
    if re.search(r'\)!(?=\s*["\].|)])', content):
        issues.append(HTML_PATTERNS[0])

    # e.g. | date: 'EEEE d MMMM'  or  | date: 'shortDate' : undefined : this.locale
    predefined = r"(short|medium|long|full)(Date|Time)?"
    if re.search(r"\|\s*date\s*:\s*['\"](?!" + predefined + r"['\"])", content) or re.search(
        r"\|\s*date\s*:[^}|]*:[^}|]*:", content
    ):
        issues.append(HTML_PATTERNS[1])

    # Look for binding patterns without this.
    # e.g. [input]="myVar" or (action)="myMethod()" or *ngIf="myVar"
    # Block variables never take this.: @for (x of …), @if (…; as x), @let x = …, let-x, #x
    block_vars = set(re.findall(r"@for\s*\(\s*(\w+)\s+of", content))
    block_vars |= set(re.findall(r";\s*as\s+(\w+)\s*\)", content))
    block_vars |= set(re.findall(r"@let\s+(\w+)\s*=", content))
    block_vars |= set(re.findall(r"let-(\w+)", content))
    block_vars |= set(re.findall(r"#(\w+)", content))

    for match in re.finditer(
        r'(?:\[[\w\-]+\]|\([\w\-]+\))\s*=\s*"(?!this\.|\'|&|!this\.)(?!\d)(?!true|false|null|undefined)([a-zA-Z_$][\w$]*)',
        content,
    ):
        if match.group(1) not in block_vars:
            issues.append(HTML_PATTERNS[2])
            break

    return issues


def main():
    try:
        raw_input = sys.stdin.read()
        input_data = json.loads(raw_input)
    except (json.JSONDecodeError, Exception):
        sys.exit(0)

    tool_name = input_data.get("tool_name", "")
    tool_input = input_data.get("tool_input", {})

    if tool_name not in ["Edit", "Write", "MultiEdit"]:
        sys.exit(0)

    file_path = tool_input.get("file_path", "")

    if not file_path or not is_techatome_file(file_path):
        sys.exit(0)

    # Extract content
    if tool_name == "Write":
        content = tool_input.get("content", "")
    elif tool_name == "Edit":
        content = tool_input.get("new_string", "")
    elif tool_name == "MultiEdit":
        edits = tool_input.get("edits", [])
        content = " ".join(e.get("new_string", "") for e in edits)
    else:
        content = ""

    if not content:
        sys.exit(0)

    issues = []

    if is_typescript_file(file_path):
        issues = check_typescript(content)

    elif is_html_template(file_path):
        issues = check_html(content)

    elif is_scss_file(file_path):
        issues = check_scss(content)

    if issues:
        # Show only the first issue to avoid noise
        print(issues[0]["reminder"], file=sys.stderr)
        # Exit 1 = warn but allow (not blocking like exit 2)
        sys.exit(1)

    sys.exit(0)


if __name__ == "__main__":
    main()
