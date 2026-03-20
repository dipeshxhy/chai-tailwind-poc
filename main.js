import {
  chaiDarkmode,
  chaiH1,
  chaiH2,
  chaiH3,
  chaiH4,
  chaiH5,
  chaiH6,
  chaiParaLarge,
  chaiParaMedium,
  chaiParaSmall,
  chaiNav,
  chaiMenu,
  chaiBtn,
  buttonHover,
  chaiBox,
  chaiImg,
  chaiInput,
  chaiCenter,
  chaiPrimary,
  chaiLogo,
  chaiFlex,
  chaiAlignCenter,
} from "./styles.js";

// helpers
const select = (selector) => document.querySelectorAll(selector);

const applyStyles = (style, elements) => {
  elements.forEach((el) => Object.assign(el.style, style));
};

// base styles
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
document.head.appendChild(styleTag);

// apply styles
applyStyles(chaiDarkmode, select("body"));

// utility
applyStyles(chaiCenter, select(".chai-center"));
applyStyles(chaiPrimary, select(".chai-primary"));
applyStyles(chaiFlex, select(".chai-flex"));
applyStyles(chaiAlignCenter, select(".chai-align-center "));

// logo
applyStyles(chaiLogo, select(".chai-logo"));

// headings
applyStyles(chaiH1, select(".chai-h-1"));
applyStyles(chaiH2, select(".chai-h-2"));
applyStyles(chaiH3, select(".chai-h-3"));
applyStyles(chaiH4, select(".chai-h-4"));
applyStyles(chaiH5, select(".chai-h-5"));
applyStyles(chaiH6, select(".chai-h-6"));

// paragraph
applyStyles(chaiParaLarge, select(".chai-p-lg"));
applyStyles(chaiParaMedium, select(".chai-p-md"));
applyStyles(chaiParaSmall, select(".chai-p-sm"));

// navbar
applyStyles(chaiNav, select(".chai-nav"));
applyStyles(chaiMenu, select(".chai-menu"));

// buttons
select(".chai-btn").forEach((btn) => {
  Object.assign(btn.style, chaiBtn);

  btn.addEventListener("mouseover", () => {
    Object.assign(btn.style, buttonHover);
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "#fe9536";
  });
});

// box
applyStyles(chaiBox, select(".chai-box"));

// image
applyStyles(chaiImg, select(".chai-img"));

// input
applyStyles(chaiInput, select(".chai-input"));
