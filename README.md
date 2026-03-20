# Chai Tailwind POC

This is the project based on tailwind framework.There is few classes which I have written and that help to style the html directly. The class name started with chai-\* like

## examples

for heading h1-h6 There are classes like:

- `chai-h-1` : for h1
- `chai-h-2`: for h2
- `chai-center`: for text center

## Use

```html
<!-- Hero Section -->
<section class="chai-center" style="padding: 40px">
  <h1 class="chai-h-1 chai-primary">Welcome to Chai UI</h1>
  <p class="chai-p-lg">
    Build your own styling system using JavaScript like a pro 🚀
  </p>

  <button class="chai-btn">Get Started</button>
</section>

<!-- Cards / Boxes -->
<section class="chai-center" style="gap: 20px; padding: 40px">
  <div class="chai-box">
    <h3 class="chai-h-3">Fast</h3>
    <p class="chai-p-sm">No CSS file needed</p>
  </div>

  <div class="chai-box">
    <h3 class="chai-h-3">Reusable</h3>
    <p class="chai-p-sm">Write once, use anywhere</p>
  </div>

  <div class="chai-box">
    <h3 class="chai-h-3">Modern</h3>
    <p class="chai-p-sm">JS-driven styling</p>
  </div>
</section>
```

## Approach

I have just create two script files like styles.js and main.js files . The styles objects is created in styles.js and export from there and easily imported in main.js and used to style the selected element .
