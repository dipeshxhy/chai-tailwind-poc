# ☕ chai-tailwind

> A utility-first JavaScript styling framework using `chai-*` classes. No build step, no config. Just drop it in and brew.

---

## 🚀 Quick Start

```html
<script type="module">
  import { chaiInit } from "https://cdn.jsdelivr.net/npm/@masterdipeshjs/chai-tailwind/main.js";
  chaiInit({ darkMode: true });
</script>
```

Or with npm:

```bash
npm install @masterdipeshjs/chai-tailwind
```

```js
import { chaiInit } from "@masterdipeshjs/chai-tailwind";
chaiInit({ darkMode: true });
```

---

## ⚙️ Init Options

```js
chaiInit({
  darkMode: true,       // Apply dark background to body (default: true)
  lightMode: false,     // Apply light background to body
  animations: true,     // Inject animation keyframes (default: true)
  responsive: true,     // Inject responsive breakpoint classes (default: true)
  tooltips: true,       // Inject [data-chai-tooltip] support (default: true)
  scrollbar: true,      // Inject .chai-scrollbar styles (default: true)
  hover: true,          // Inject .chai-hover-* effects (default: true)
  spinner: true,        // Inject .chai-spinner styles (default: true)
  skeleton: true,       // Inject .chai-skeleton shimmer (default: true)
  focus: true,          // Inject .chai-focus-ring styles (default: true)
});
```

---

## 📦 Class Reference

### Typography
| Class | Description |
|-------|-------------|
| `.chai-h-1` → `.chai-h-6` | Heading sizes (61px → 20px) |
| `.chai-p-lg` / `-md` / `-sm` | Paragraph sizes (22px / 18px / 14px) |
| `.chai-text-sm` | 12.8px text |
| `.chai-text-vsm` | 10.24px text |
| `.chai-fw-light` → `.chai-fw-black` | Font weight utilities |
| `.chai-text-left/center/right/justify` | Text alignment |
| `.chai-uppercase` / `.chai-lowercase` / `.chai-capitalize` | Text transform |
| `.chai-underline` / `.chai-line-through` | Text decoration |
| `.chai-leading-tight/normal/relaxed` | Line heights |
| `.chai-tracking-tight/wide/widest` | Letter spacing |
| `.chai-truncate` | Truncate overflow text |

### Colors
| Class | Description |
|-------|-------------|
| `.chai-primary` | Orange text (#fe9536) |
| `.chai-secondary` | Indigo text |
| `.chai-success` / `.chai-danger` / `.chai-warning` / `.chai-info` | Status colors |
| `.chai-text-muted` / `.chai-text-gray` | Muted text |
| `.chai-bg-primary` → `.chai-bg-transparent` | Background colors |

### Display & Flexbox
| Class | Description |
|-------|-------------|
| `.chai-flex` / `.chai-grid` / `.chai-block` / `.chai-hidden` | Display |
| `.chai-flex-row` / `.chai-flex-col` | Flex direction |
| `.chai-flex-wrap` / `.chai-flex-nowrap` | Flex wrapping |
| `.chai-justify-start/end/center/between/around/evenly` | Justify content |
| `.chai-align-start/end/center/baseline/stretch` | Align items |
| `.chai-gap-xs/sm/md/lg/xl/2xl` | Gap spacing |

### Grid
| Class | Description |
|-------|-------------|
| `.chai-grid-2/3/4/6/12` | Grid columns |
| `.chai-grid-auto-fit` / `.chai-grid-auto-fill` | Responsive auto grids |
| `.chai-col-span-2/3/4/full` | Column spanning |

### Spacing
| Class | Description |
|-------|-------------|
| `.chai-p-xs/sm/md/lg/xl/2xl` | Padding all sides |
| `.chai-px-sm/md/lg/xl` | Horizontal padding |
| `.chai-py-sm/md/lg/xl` | Vertical padding |
| `.chai-m-sm/md/lg/xl` | Margin all sides |
| `.chai-mx-auto` | Horizontal center |
| `.chai-my-sm/md/lg` | Vertical margin |

### Sizing
| Class | Description |
|-------|-------------|
| `.chai-w-full/half/screen/auto` | Width |
| `.chai-h-full/screen/auto` | Height |
| `.chai-min-h-screen` | Min height 100vh |
| `.chai-max-w-sm/md/lg/xl/container` | Max widths |

### Borders & Radius
| Class | Description |
|-------|-------------|
| `.chai-border` | 1px gray border |
| `.chai-border-primary/secondary/danger` | Colored borders |
| `.chai-border-t/b/l/r` | Single side border |
| `.chai-rounded-sm/lg/xl/full/none` | Border radius |

### Shadows
| Class | Description |
|-------|-------------|
| `.chai-shadow-sm/lg/xl` | Box shadows |
| `.chai-shadow-primary/secondary` | Colored glow shadows |
| `.chai-shadow-inner` | Inset shadow |

### Gradients
| Class | Description |
|-------|-------------|
| `.chai-gradient-primary` | Orange gradient |
| `.chai-gradient-secondary` | Indigo-purple gradient |
| `.chai-gradient-sunset` | Orange → Red → Purple |
| `.chai-gradient-ocean` | Blue → Cyan |
| `.chai-gradient-dark` | Dark navy gradient |

### Components

#### Navbar
```html
<header class="chai-navbar">
  <div class="chai-nav">
    <img class="chai-logo" src="logo.png" />
    <ul class="chai-menu">
      <li><a class="chai-nav-link" href="#">Home</a></li>
    </ul>
  </div>
</header>
```

#### Buttons
```html
<button class="chai-btn">Primary</button>
<button class="chai-btn-secondary">Secondary</button>
<button class="chai-btn-outline">Outline</button>
<button class="chai-btn-ghost">Ghost</button>
<button class="chai-btn-sm">Small</button>
<button class="chai-btn-lg">Large</button>
<button class="chai-btn-rounded">Rounded</button>
<button class="chai-btn" disabled>Disabled</button>
```

#### Cards
```html
<div class="chai-card">
  <div class="chai-card-header">Header</div>
  Content
  <div class="chai-card-footer">Footer</div>
</div>
<div class="chai-box-glass">Glass card</div>
```

#### Badges
```html
<span class="chai-badge">Primary</span>
<span class="chai-badge-success">Success</span>
<span class="chai-badge-danger">Error</span>
<span class="chai-badge-outline">Outline</span>
<span class="chai-chip-primary">Chip</span>
```

#### Alerts
```html
<div class="chai-alert-success">✅ Done!</div>
<div class="chai-alert-danger">❌ Error!</div>
<div class="chai-alert-warning">⚠️ Warning!</div>
<div class="chai-alert-info">ℹ️ Info</div>
```

#### Forms
```html
<div class="chai-form-group">
  <label class="chai-label">Email</label>
  <input class="chai-input" type="email" placeholder="you@example.com" />
</div>
<select class="chai-select">...</select>
<textarea class="chai-textarea"></textarea>
<input class="chai-checkbox" type="checkbox" />
```

#### Table
```html
<div class="chai-table-wrapper">
  <table class="chai-table">
    <thead><tr><th>Name</th><th>Status</th></tr></thead>
    <tbody><tr><td>Hitesh</td><td><span class="chai-badge-success">Active</span></td></tr></tbody>
  </table>
</div>
```

#### Progress Bar
```html
<div class="chai-progress">
  <div class="chai-progress-bar" style="width: 75%"></div>
</div>
```

#### Tabs
```html
<div class="chai-tabs">
  <button class="chai-tab active">Tab 1</button>
  <button class="chai-tab">Tab 2</button>
</div>
```

#### Pagination
```html
<ul class="chai-pagination">
  <li class="chai-page-item">«</li>
  <li class="chai-page-item active">1</li>
  <li class="chai-page-item">2</li>
  <li class="chai-page-item">»</li>
</ul>
```

#### Avatars
```html
<img class="chai-avatar-sm" src="..." />
<img class="chai-avatar" src="..." />
<img class="chai-avatar-lg" src="..." />
<img class="chai-avatar-xl" src="..." />
```

### Animations
```html
<div class="chai-animate-fade-up">Fades up on load</div>
<div class="chai-animate-bounce">Bouncing</div>
<div class="chai-animate-pulse">Pulsing</div>
<div class="chai-animate-slide-left">Slides in</div>
<!-- Delay classes -->
<div class="chai-animate-fade-up chai-delay-200">Delayed</div>
```

### Hover Effects
```html
<div class="chai-hover-lift">Lifts on hover</div>
<div class="chai-hover-glow">Glows on hover</div>
<div class="chai-hover-scale">Scales on hover</div>
<div class="chai-hover-dim">Dims on hover</div>
```

### Spinner & Skeleton
```html
<div class="chai-spinner"></div>
<div class="chai-spinner chai-spinner-sm"></div>
<div class="chai-spinner chai-spinner-lg"></div>

<div class="chai-skeleton" style="height:14px;width:80%"></div>
```

### Tooltip
```html
<button data-chai-tooltip="Tooltip text!">Hover me</button>
```

### Scrollbar
```html
<div class="chai-scrollbar" style="overflow-y:auto;max-height:200px;">
  ...
</div>
```

### Responsive Classes
| Class | Breakpoint |
|-------|------------|
| `.chai-sm-hidden` | Hidden below 640px |
| `.chai-sm-full` | Full width below 640px |
| `.chai-sm-grid-1` | 1-col grid below 640px |
| `.chai-md-hidden` | Hidden below 768px |
| `.chai-md-grid-2` | 2-col grid below 768px |
| `.chai-sm-col` | Flex column below 640px |

---

## 🎨 Use Tokens Directly (JS/React)

```js
import { chaiTokens, chaiBtn, chaiCard } from "@masterdipeshjs/chai-tailwind/styles";

// In React
<button style={chaiBtn}>Click me</button>
<div style={chaiCard}>Card content</div>

// Access design tokens
console.log(chaiTokens.colorPrimary); // "#fe9536"
```

---

## 📝 License

MIT © chai-tailwind contributors
