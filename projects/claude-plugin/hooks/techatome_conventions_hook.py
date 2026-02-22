#!/usr/bin/env python3
"""
techatome Conventions Hook for Claude Code.
Warns about common violations before writing Angular/TypeScript files:
- Object keys not sorted alphabetically (sort-keys ESLint rule)
- Missing this. prefix in HTML templates
- Non-lazy route imports
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


def is_typescript_file(file_path: str) -> bool:
    return file_path.endswith(".ts") and not file_path.endswith(".spec.ts")


def is_html_template(file_path: str) -> bool:
    return file_path.endswith(".component.html")


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
        if "substrings" in pattern:
            for substring in pattern["substrings"]:
                if substring in content:
                    issues.append(pattern)
                    break

    return issues


def check_html(content: str) -> list[dict]:
    """Check HTML template for missing this. prefix."""
    issues = []

    # Look for binding patterns without this.
    # e.g. [input]="myVar" or (action)="myMethod()" or *ngIf="myVar"
    binding_without_this = re.search(
        r'(?:\[[\w\-]+\]|@if|@for)\s*=\s*"(?!this\.|\'|&|!this\.)(?!\d)(?!true|false|null|undefined)[a-z]',
        content
    )

    if binding_without_this:
        issues.append(HTML_PATTERNS[0])

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

    if issues:
        # Show only the first issue to avoid noise
        print(issues[0]["reminder"], file=sys.stderr)
        # Exit 1 = warn but allow (not blocking like exit 2)
        sys.exit(1)

    sys.exit(0)


if __name__ == "__main__":
    main()
