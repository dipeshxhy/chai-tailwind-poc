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
} from "./styles.js";

function selectElement(selector) {
  return document.querySelector(selector);
}
function applyStyles(style, element) {
  Object.assign(element.style, style);
}

// base style inject
const styleTag = document.createElement("style");

styleTag.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

document.head.appendChild(styleTag);

// DarkMode
const body = selectElement("body");
applyStyles(chaiDarkmode, body);

// Heading
const h1 = selectElement(".chai-h-1");
if (h1) {
  applyStyles(chaiH1, h1);
}
const h2 = selectElement(".chai-h-2");
if (h2) {
  applyStyles(chaiH2, h2);
}
const h3 = selectElement(".chai-h-3");
if (h3) {
  applyStyles(chaiH1, h3);
}
const h4 = selectElement(".chai-h-4");
if (h4) {
  applyStyles(chaiH4, h4);
}
const h5 = selectElement(".chai-h-5");
if (h5) {
  applyStyles(chaiH4, h5);
}
const h6 = selectElement(".chai-h-6");
if (h6) {
  applyStyles(chaiH4, h6);
}

// paragraph
const pLg = selectElement(".chai-p-lg");
if (pLg) {
  applyStyles(chaiParaLarge, pLg);
}
const pMd = selectElement(".chai-p-md");
if (pMd) {
  applyStyles(chaiParaMedium, pMd);
}
const pSm = selectElement(".chai-p-sm");
if (pSm) {
  applyStyles(chaiParaSmall, pSm);
}

// Navbar
const nav = selectElement(".chai-nav");
if (nav) {
  applyStyles(chaiNav, nav);
}
const navMenu = selectElement(".chai-menu");
if (navMenu) {
  applyStyles(chaiMenu, navMenu);
}

// button
const btn = selectElement(".chai-btn");
if (btn) {
  applyStyles(chaiBtn, btn);
  btn.addEventListener("mouseover", () => {
    applyStyles(buttonHover, btn);
  });
  btn.addEventListener("mouseleave", () => {
    applyStyles({ backgroundColor: "#fe9536" }, btn);
  });
}

// chai box
const box = selectElement(".chai-box");
if (box) {
  applyStyles(chaiBox, box);
}

// chai image
const img = selectElement(".chai-img");
if (img) {
  applyStyles(chaiImg, img);
}

const input = selectElement(".chai-input");
if (input) {
  applyStyles(chaiInput, input);
}
