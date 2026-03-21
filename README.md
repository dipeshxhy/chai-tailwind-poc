# Chai Tailwind POC

A lightweight, JavaScript-driven utility styling system inspired by Tailwind-like class usage.

Styles are defined as JavaScript objects in `styles.js`, then applied to matching class selectors in `main.js`.

## How It Works

1. `styles.js` exports reusable style objects.
2. `main.js` imports those objects.
3. `main.js` selects elements by class name and applies inline styles with `Object.assign`.
4. Button hover styles are handled through event listeners.

## Setup

Load `main.js` in your HTML (as an ES module), then use the documented class names in your markup.

```html
<script type="module" src="./main.js"></script>
```

## Global Behavior

- A base reset is injected:
  - `margin: 0`
  - `padding: 0`
  - `box-sizing: border-box`
- `body` always receives dark mode styles:
  - `background-color: #333`
  - `color: #fff`

## Utility Classes

| Class               | Styles Applied                      |
| ------------------- | ----------------------------------- |
| `chai-center`       | `width: 100%`, `text-align: center` |
| `chai-primary`      | `color: #fe9536`                    |
| `chai-flex`         | `display: flex`                     |
| `chai-align-center` | `align-items: center`               |

## Branding

| Class       | Styles Applied |
| ----------- | -------------- |
| `chai-logo` | `width: 100px` |

## Typography

### Heading Classes

| Class      | Font Size | Weight | Line Height |
| ---------- | --------- | ------ | ----------- |
| `chai-h-1` | `61.04px` | `900`  | `1.3`       |
| `chai-h-2` | `48.83px` | `800`  | `1.4`       |
| `chai-h-3` | `39.06px` | `700`  | `1.3`       |
| `chai-h-4` | `31.25px` | `700`  | `1.3`       |
| `chai-h-5` | `25px`    | `600`  | `1.3`       |
| `chai-h-6` | `20px`    | `600`  | `1.3`       |

### Paragraph Classes

| Class       | Font Size |
| ----------- | --------- |
| `chai-p-lg` | `22px`    |
| `chai-p-md` | `18px`    |
| `chai-p-sm` | `14px`    |

## Layout and Components

### Navigation

| Class       | Styles Applied                                                                                                                |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `chai-nav`  | `max-width: 1200px`, `margin: auto`, `padding: 8px`, `display: flex`, `align-items: center`, `justify-content: space-between` |
| `chai-menu` | `display: flex`, `gap: 8px`, `align-items: center`, `list-style: none`                                                        |

### Button

| Class      | Default Styles                                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `chai-btn` | `padding: 10px 20px`, `background-color: #fe9536`, `color: #000`, `outline: none`, `border: none`, `font-size: 24px`, `border-radius: 8px`, `cursor: pointer`, `transition: all ease 0.3s` |

Interactive behavior:

- On mouse over: background changes to `#ffa95a`
- On mouse leave: background returns to `#fe9536`

### Box

| Class      | Styles Applied                                                  |
| ---------- | --------------------------------------------------------------- |
| `chai-box` | `padding: 20px`, `border: 1px solid #fe9536`, `font-size: 24px` |

### Image

| Class      | Styles Applied                      |
| ---------- | ----------------------------------- |
| `chai-img` | `width: 200px`, `object-fit: cover` |

### Input

| Class        | Styles Applied                                                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `chai-input` | `padding: 10px`, `background-color: #ffa95a`, `border: none`, `outline: none`, `width: 300px`, `border-radius: 8px`, `font-size: 20px` |

## Example

```html
<!-- Hero -->
<section class="chai-center" style="padding: 40px">
  <img class="chai-logo" src="./logo.png" alt="Chai Logo" />
  <h1 class="chai-h-1 chai-primary">Welcome to Chai UI</h1>
  <p class="chai-p-lg">
    Build your own utility styling system with JavaScript.
  </p>
  <button class="chai-btn">Get Started</button>
</section>

<!-- Features -->
<section
  class="chai-flex chai-center"
  style="gap: 20px; padding: 40px; justify-content: center;"
>
  <div class="chai-box">
    <h3 class="chai-h-3">Fast</h3>
    <p class="chai-p-sm">No CSS file required</p>
  </div>
  <div class="chai-box">
    <h3 class="chai-h-3">Reusable</h3>
    <p class="chai-p-sm">Utility classes you can compose</p>
  </div>
</section>
```

## Project Structure

- `styles.js`: all reusable style objects
- `main.js`: selector helpers, global reset, and class-to-style mapping logic

## Notes

- This POC applies styles as inline styles, so class names act as JavaScript-driven utilities.
- The dark background and light text are currently applied globally to the `body`.
