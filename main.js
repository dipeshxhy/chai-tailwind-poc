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
applyStyles(chaiH1, selectElement(".chai-h-1"));
applyStyles(chaiH2, selectElement(".chai-h-2"));
applyStyles(chaiH3, selectElement(".chai-h-3"));
applyStyles(chaiH4, selectElement(".chai-h-4"));
applyStyles(chaiH5, selectElement(".chai-h-5"));
applyStyles(chaiH6, selectElement(".chai-h-6"));

// paragraph
applyStyles(chaiParaLarge, selectElement(".chai-p-lg"));
applyStyles(chaiParaMedium, selectElement(".chai-p-md"));
applyStyles(chaiParaSmall, selectElement(".chai-p-sm"));
