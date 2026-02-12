# @ta/styles - Complete SCSS Reference

## Import Pattern
```scss
@use "ta/utils/mixins/common";    // Design tokens via get-var()
@use "ta/utils/mixins/flex";       // Flexbox mixins
@use "ta/utils/mixins/fonts";      // Typography mixins
@use "ta/utils/mixins/spaces";     // Spacing functions
@use "ta/utils/mixins/text";       // Text utilities
@use "ta/utils/mixins/colors";     // Color functions
@use "ta/utils/mixins/shadows";    // Shadow mixins
@use "ta/utils/mixins/grid";       // Grid mixins
@use "ta/utils/mixins/animations"; // Animation mixins
@use "ta/utils/mixins/screen";     // Viewport utilities
@use "ta/utils/mixins/mobile";     // Device context
@use "ta/utils/mixins/mediaQueriesRanges" as mq; // Media queries
```

## common.get-var() - Design Tokens

### Colors
```scss
common.get-var(brand, 900)          // #121e38 (darkest blue)
common.get-var(brand, 700)          // mid-dark blue
common.get-var(brand, 500)          // primary blue
common.get-var(brand, 300)          // light blue
common.get-var(brand, 50)           // #e5e8ec (lightest)
common.get-var(secondary, 900)      // #f26800 (dark orange)
common.get-var(secondary, 50)       // #fdf7e0 (light yellow)
common.get-var(neutral, black)      // #1f2245
common.get-var(neutral, 700)        // dark gray
common.get-var(neutral, 300)        // light gray
common.get-var(neutral, white)      // #ffffff
common.get-var(semantic, red)       // #e74c3c
common.get-var(semantic, green)     // #38a172
common.get-var(semantic, orange)    // #f39c12
common.get-var(semantic, yellow)    // #ffd166
```

### Semantic Token Colors
```scss
// Text colors
common.get-var(text, primary)       // Main text
common.get-var(text, secondary)     // Secondary text
common.get-var(text, tertiary)      // Muted text
common.get-var(text, brand)         // Brand colored text
common.get-var(text, invert)        // Light text on dark bg
common.get-var(text, body)          // Body text
common.get-var(text, success)       // Success text
common.get-var(text, warning)       // Warning text
common.get-var(text, alert)         // Error/alert text
common.get-var(text, link)          // Link text

// Surface/Background
common.get-var(surface, default)    // Default background
common.get-var(surface, primary)    // Primary surface (white)
common.get-var(surface, secondary)  // Secondary surface
common.get-var(surface, tertiary)   // Tertiary surface
common.get-var(surface, brand)      // Brand background
common.get-var(surface, hover)      // Hover state bg
common.get-var(surface, invert)     // Inverted bg
common.get-var(surface, success)    // Success bg
common.get-var(surface, warning)    // Warning bg
common.get-var(surface, alert)      // Error bg

// Borders
common.get-var(border, primary)
common.get-var(border, secondary)
common.get-var(border, brand)
common.get-var(border, hover, primary)
common.get-var(border, hover, secondary)

// Icons
common.get-var(icon, primary)
common.get-var(icon, secondary)
common.get-var(icon, brand)
common.get-var(icon, disabled)
common.get-var(icon, success)
common.get-var(icon, alert)
```

### Spacing (8px grid)
```scss
common.get-var(space, xs)           // 4px
common.get-var(space, sm)           // 8px
common.get-var(space, md)           // 16px
common.get-var(space, lg)           // 24px
common.get-var(space, xl)           // 32px
common.get-var(space, xxl)          // 48px
common.get-var(space, xxxl)         // 104px
```

### Border Radius
```scss
common.get-var(radius, minimal)     // 4px
common.get-var(radius, rounded)     // 8px
common.get-var(radius, label)       // 16px
common.get-var(radius, full)        // 40px
```

### Shadows
```scss
common.get-var(shadow, black, sm)   // subtle shadow
common.get-var(shadow, black, md)   // medium shadow
common.get-var(shadow, black, lg)   // large shadow
common.get-var(shadow, brand, sm)   // branded subtle shadow
common.get-var(shadow, brand, md)   // branded medium shadow
```

### Typography
```scss
common.get-var(font, family)        // 'Inter', 'Diodrum Cyrillic', sans-serif
common.get-var(font, h1, default, size)   // 30px
common.get-var(font, h2, default, size)   // 24px
common.get-var(font, body, md, default, size) // body size
```

### Component Tokens
```scss
common.get-var(components, button, radius)
common.get-var(components, button, primary, color)
common.get-var(components, button, primary, background)
common.get-var(components, button, primary, hover, background)
common.get-var(components, card, border-radius)
common.get-var(components, card, background)
```

## SCSS Mixins

### Flexbox (flex.*)
```scss
@include flex.flex();              // display: flex; flex-wrap: wrap
@include flex.flex-row();          // flex + row direction
@include flex.flex-column();       // flex + column direction
@include flex.space-between();     // flex + justify-content: space-between
@include flex.space-around();      // flex + justify-content: space-around
@include flex.align-center();      // flex + align-items: center
@include flex.align-end();         // flex + align-items: flex-end + justify-content: flex-end
@include flex.justify-center();    // flex + justify-content: center
@include flex.justify-end();       // flex + justify-content: flex-end
@include flex.full-width();        // flex: 1; width: 100%
@include flex.flex-full();         // flex: 1 1 100%
@include flex.flex-fill();         // flex: 1 1 auto
@include flex.simple-flex();       // display: flex (no wrap)
@include flex.flex-start();        // flex + wrap + flex-start
```

### Typography (fonts.*)
```scss
@include fonts.fontSizeHeader(h1);         // H1 styles
@include fonts.fontSizeHeader(h2);         // H2 styles
@include fonts.fontSizeHeader(h3);         // H3 styles
@include fonts.fontSizeHeader(h4);         // H4 styles
@include fonts.fontSizeHeader(h2, true);   // H2 bold

@include fonts.fontSizeBody(md);           // Body medium
@include fonts.fontSizeBody(sm);           // Body small
@include fonts.fontSizeBody(xs);           // Body extra small
@include fonts.fontSizeBody(md, true);     // Body medium bold

@include fonts.fontSizeKey(xl);            // Display XL
@include fonts.fontSizeKey(lg);            // Display large
@include fonts.fontSizeKey(md);            // Display medium
@include fonts.fontSizeKey(sm);            // Display small
```

### Text (text.*)
```scss
@include text.text-overflow();             // ellipsis overflow
@include text.text-line-limit(2);          // clamp to 2 lines
@include text.text-line-limit(3);          // clamp to 3 lines
```

### Grid (grid.*)
```scss
@include grid.grid-base();                 // 12-column grid
@include grid.full();                      // span 12
@include grid.one-half();                  // span 6
@include grid.one-third();                 // span 4
@include grid.one-fourth();                // span 3
@include grid.two-thirds();                // span 8
@include grid.five-sixths();               // span 10
@include grid.one-sixth();                 // span 2
```

### Spacing (spaces.*)
```scss
padding: spaces.spaceBase(2);              // 16px (8px * 2)
margin: spaces.spaceBase(3);               // 24px (8px * 3)
```

### Animations (animations.*)
```scss
@include animations.fadeIn();
@include animations.slideInRight();
@include animations.slideInLeft();
@include animations.slideInUp();
@include animations.slideInDown();
@include animations.scaleIn();
@include animations.spin();               // infinite rotation
@include animations.pulse();              // infinite pulse
@include animations.bounce();             // infinite bounce
@include animations.hoverScale(1.05);     // scale on hover
@include animations.hoverFade(0.8);       // fade on hover
@include animations.transition(all, 0.3s, ease);
@include animations.staggeredAnimation(fadeIn, 0.3s, ease, 0.1s, 10);
```

### Media Queries (mq.*)
```scss
@include mq.from(768px) { ... }           // min-width: 768px
@include mq.to(992px) { ... }             // max-width: 991px
@include mq.between(576px, 992px) { ... } // range
@include mq.in-context('.dark-mode') { ... } // :host-context
```

### Device Context (mobile.*)
```scss
@include mobile.mobileDevice() { ... }    // :host-context(.mobile-device)
@include mobile.desktopDevice() { ... }   // :host-context(.desktop-device)
@include mobile.menuMinimized() { ... }   // :host-context(.is-menu-minimized)
```

### Screen (screen.*)
```scss
@include screen.setHeight(false, false);   // height: calc(100vh - 60px)
@include screen.setHeight(true, true);     // min-height: calc(100vh - 115px)
```

### Colors (colors.*)
```scss
color: colors.getTextOnBackground(#333);   // returns light or dark text
@include colors.hover-bgc();              // hover bg color
```

### Shadows (shadows.*)
```scss
@include shadows.shadow-mixin(black, sm);
@include shadows.shadow-mixin(brand, lg);
```

## CSS Utility Classes

### Flexbox
`.flex`, `.flex-row`, `.flex-column`, `.space-between`, `.space-around`,
`.flex-start`, `.justify-center`, `.justify-end`, `.align-center`, `.align-end`,
`.full-width`, `.flex-full`, `.flex-fill`

### Spacing (all sizes: xs, sm, md, lg, xl, xxl, xxxl)
**Gap:** `.g-space-xs` ... `.g-space-xxxl`
**Padding:** `.p-space-md`, `.px-space-lg`, `.py-space-sm`, `.pt-space-xl`, `.pb-space-xs`, `.pl-space-md`, `.pr-space-md`
**Margin:** `.m-space-md`, `.mx-space-lg`, `.my-space-sm`, `.mt-space-xl`, `.mb-space-xs`, `.ml-space-md`, `.mr-space-md`
**Auto:** `.m-a`, `.mx-a`, `.my-a`, `.mt-a`, `.mr-a`, `.mb-a`, `.ml-a`

### Border Radius
`.bdr-radius-minimal` (4px), `.bdr-radius-rounded` (8px), `.bdr-radius-label` (16px), `.bdr-radius-full` (40px)

### Typography
`.lh-0`, `.lh-1`, `.lh-3/2` (line-height)
`.fs-i` (italic), `.fs-o` (oblique)
`.tt-n` (none), `.tt-u` (uppercase), `.tt-l` (lowercase), `.tt-c` (capitalize)
`.ta-c` (center), `.ta-l` (left), `.ta-r` (right)
`.tov-e` (ellipsis), `.tll-2` (2-line limit), `.tll-3` (3-line limit)

### Grid (responsive with breakpoint prefixes: sm-, md-, lg-, xl-)
`.grid > .full`, `.one-half`, `.one-third`, `.one-fourth`, `.one-sixth`, `.two-thirds`, `.five-sixths`
Responsive: `.md-one-half`, `.lg-one-third`, `.sm-full`, etc.
Standalone: `.grid-one-half`, `.grid-one-third`, `.grid-one-fourth`, `.grid-one-sixth`

### Colors
`.brand-900` ... `.brand-50`, `.color-brand-*`, `.bgc-brand-*`
`.color-text-primary`, `.color-text-secondary`, `.color-border-*`

### Shadows
`.bxs-shadow-black-sm/md/lg`, `.bxs-shadow-brand-sm/md/lg`

### Animations
`.animate-fadeIn`, `.animate-slideInRight/Left/Up/Down`, `.animate-scaleIn`, `.animate-bounce`, `.animate-pulse`, `.animate-spin`
`.duration-fast/normal/slow/slower`
`.ease-ease/ease-in/ease-out/ease-in-out/linear/bounce/elastic`
`.animate-infinite`, `.animate-once`, `.animate-paused`, `.animate-running`

### Breakpoints
xs: 0px, sm: 576px, mobile: 577px, md: 768px, tablette: 769px, desktop: 991px, lg: 992px, xl: 1200px, xxl: 1400px, xxxl: 1800px

## TypeScript Types
```typescript
type TaState = "classic" | "disabled" | "inactive"
type TaSizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "big"
type ColorType = "default" | "secondary" | "success" | "warning" | "alert" | "purple" | "new"
```
