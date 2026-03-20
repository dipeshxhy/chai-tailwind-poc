import {
  baseStyles,
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
// grab className
const chaiParagraph = document.querySelector(".chai-p-1");
// dark background
const chaiDarkBg = document.querySelector(".chai-dark");

//dark style
const darkStyles = {
  backgroundColor: "#333",
  color: "#fff",
};

const paragraphStyles = {
  color: "orange",
  fontsize: "22px",
};
if (chaiParagraph) {
  for (let [key, value] of Object.entries(paragraphStyles)) {
    chaiParagraph.style[key] = value;
  }
}
if (chaiDarkBg) {
  for (let [key, value] of Object.entries(darkStyles)) {
    chaiDarkBg.style[key] = value;
  }
}

(function () {
  for (let [k, v] of Object.entries(baseStyles)) {
    document.querySelector("html").style[k] = v;
  }
})();

// Typography
// heading
const heading1 = document.querySelector(".chai-h-1");
const heading2 = document.querySelector(".chai-h-2");
const heading3 = document.querySelector(".chai-h-3");
const heading4 = document.querySelector(".chai-h-4");
const heading5 = document.querySelector(".chai-h-5");
const heading6 = document.querySelector(".chai-h-6");
if (heading1) {
  for (let [k, v] of Object.entries(chaiH1)) {
    heading1.style[k] = v;
  }
}

if (heading2) {
  for (let [k, v] of Object.entries(chaiH2)) {
    heading2.style[k] = v;
  }
}
if (heading3) {
  for (let [k, v] of Object.entries(chaiH3)) {
    heading3.style[k] = v;
  }
}
if (heading4) {
  for (let [k, v] of Object.entries(chaiH4)) {
    heading4.style[k] = v;
  }
}
if (heading5) {
  for (let [k, v] of Object.entries(chaiH5)) {
    heading5.style[k] = v;
  }
}
if (heading6) {
  for (let [k, v] of Object.entries(chaiH6)) {
    heading6.style[k] = v;
  }
}

// paragraph
const chaiParaLg = document.querySelector(".chai-p-lg");
const chaiParamd = document.querySelector(".chai-p-md");
const chaiParasm = document.querySelector(".chai-p-sm");
if (chaiParaLarge || chaiParaMedium || chaiParaSmall) {
  for (const [k, v] of Object.entries(chaiParaLarge)) {
    chaiParaLg.style[k] = v;
  }
  for (const [k, v] of Object.entries(chaiParaMedium)) {
    chaiParamd.style[k] = v;
  }
  for (const [k, v] of Object.entries(chaiParaSmall)) {
    chaiParasm.style[k] = v;
  }
}
