// ============================================================
//  chai-tailwind — main.js
//  Initializer — call chaiInit() to apply styles
// ============================================================

import {
  // Tokens & Reset
  chaiReset,
  chaiTokens,

  // Typography
  chaiH1, chaiH2, chaiH3, chaiH4, chaiH5, chaiH6,
  chaiParaLarge, chaiParaMedium, chaiParaSmall,
  chaiTextSmall, chaiTextVSmall, chaiTextBase,

  // Font weight
  chaiFwLight, chaiFwNormal, chaiFwMedium,
  chaiFwSemibold, chaiFwBold, chaiFwExtrabold, chaiFwBlack,

  // Text alignment
  chaiTextLeft, chaiTextCenter, chaiTextRight, chaiTextJustify,

  // Text transform
  chaiUppercase, chaiLowercase, chaiCapitalize,

  // Text decoration
  chaiUnderline, chaiLineThrough, chaiNoUnderline,

  // Line height
  chaiLeadingTight, chaiLeadingNormal, chaiLeadingRelaxed,

  // Letter spacing
  chaiTrackingTight, chaiTrackingNormal, chaiTrackingWide, chaiTrackingWidest,

  // Truncate
  chaiTruncate,

  // Colors
  chaiPrimary, chaiSecondary, chaiSuccess, chaiWarning, chaiDanger, chaiInfo,
  chaiTextWhite, chaiTextBlack, chaiTextMuted, chaiTextGray,

  // BG Colors
  chaiBgPrimary, chaiBgSecondary, chaiBgSuccess, chaiBgWarning,
  chaiBgDanger, chaiBgInfo, chaiBgWhite, chaiBgBlack,
  chaiBgLight, chaiBgDark, chaiBgGray, chaiBgTransparent,

  // Theme
  chaiDarkmode, chaiLightmode,

  // Display
  chaiBlock, chaiInline, chaiInlineBlock,
  chaiFlex, chaiInlineFlex, chaiGrid, chaiInlineGrid, chaiHidden,

  // Flexbox
  chaiFlexRow, chaiFlexCol, chaiFlexRowReverse, chaiFlexColReverse,
  chaiFlexWrap, chaiFlexNoWrap, chaiFlexWrapReverse,
  chaiFlexGrow, chaiFlexShrink, chaiFlexNone, chaiFlexAuto,

  // Justify
  chaiJustifyStart, chaiJustifyEnd, chaiJustifyCenter,
  chaiJustifyBetween, chaiJustifyAround, chaiJustifyEvenly,

  // Align
  chaiAlignStart, chaiAlignEnd, chaiAlignCenter,
  chaiAlignBaseline, chaiAlignStretch,

  // Self
  chaiSelfAuto, chaiSelfStart, chaiSelfEnd, chaiSelfCenter, chaiSelfStretch,

  // Gap
  chaiGapXs, chaiGapSm, chaiGapMd, chaiGapLg, chaiGapXl, chaiGap2xl,

  // Grid
  chaiGrid2, chaiGrid3, chaiGrid4, chaiGrid6, chaiGrid12,
  chaiGridAutoFit, chaiGridAutoFill,
  chaiColSpan2, chaiColSpan3, chaiColSpan4, chaiColSpanFull,

  // Padding
  chaiPXs, chaiPSm, chaiPMd, chaiPLg, chaiPXl, chaiP2xl,
  chaiPxXs, chaiPxSm, chaiPxMd, chaiPxLg, chaiPxXl,
  chaiPyXs, chaiPySm, chaiPyMd, chaiPyLg, chaiPyXl,

  // Margin
  chaiMXs, chaiMSm, chaiMMd, chaiMLg, chaiMXl, chaiM2xl,
  chaiMxAuto, chaiMtAuto, chaiMbAuto,
  chaiMxXs, chaiMxSm, chaiMxMd, chaiMxLg,
  chaiMyXs, chaiMySm, chaiMyMd, chaiMyLg,

  // Sizing
  chaiWFull, chaiWAuto, chaiWHalf, chaiWThird, chaiWQuarter,
  chaiWScreen, chaiWMin, chaiWMax, chaiWFit,
  chaiHFull, chaiHAuto, chaiHScreen, chaiHMin, chaiHMax, chaiHFit,
  chaiMinHScreen, chaiMinWFull, chaiMaxWFull,
  chaiMaxWSm, chaiMaxWMd, chaiMaxWLg, chaiMaxWXl, chaiMaxWContainer,

  // Position
  chaiStatic, chaiRelative, chaiAbsolute, chaiFixed, chaiSticky,
  chaiInset0, chaiTop0, chaiRight0, chaiBottom0, chaiLeft0,
  chaiZ0, chaiZ10, chaiZ20, chaiZ50, chaiZAuto,

  // Overflow
  chaiOverflowAuto, chaiOverflowHidden, chaiOverflowVisible, chaiOverflowScroll,
  chaiOverflowXAuto, chaiOverflowYAuto,

  // Borders
  chaiBorder, chaiBorderPrimary, chaiBorderSecondary, chaiBorderDanger,
  chaiBorder2, chaiBorderT, chaiBorderB, chaiBorderL, chaiBorderR, chaiBorderNone,

  // Border radius
  chaiRoundedSm, chaiRounded, chaiRoundedLg, chaiRoundedXl,
  chaiRoundedFull, chaiRoundedNone, chaiRoundedTop, chaiRoundedBottom,

  // Shadows
  chaiShadowSm, chaiShadow, chaiShadowLg, chaiShadowXl,
  chaiShadowNone, chaiShadowInner, chaiShadowPrimary, chaiShadowSecondary,

  // Opacity
  chaiOpacity0, chaiOpacity25, chaiOpacity50, chaiOpacity75, chaiOpacity100,

  // Cursor
  chaiCursorPointer, chaiCursorDefault, chaiCursorNotAllowed,
  chaiCursorWait, chaiCursorText, chaiCursorGrab,

  // Pointer & Select
  chaiPointerNone, chaiPointerAuto, chaiSelectNone, chaiSelectAll, chaiSelectText,

  // Object fit
  chaiObjectCover, chaiObjectContain, chaiObjectFill, chaiObjectNone,
  chaiObjectCenter, chaiObjectTop, chaiObjectBottom,

  // Transitions
  chaiTransitionFast, chaiTransition, chaiTransitionSlow, chaiTransitionNone,

  // Transforms
  chaiScaleUp, chaiScaleDown, chaiRotate45, chaiRotate90, chaiRotate180,

  // Gradients
  chaiGradientPrimary, chaiGradientSecondary, chaiGradientDark,
  chaiGradientSuccess, chaiGradientDanger, chaiGradientSunset, chaiGradientOcean,

  // Layout
  chaiCenter, chaiCenterFlex, chaiContainer, chaiSection, chaiDivider,

  // Aspect ratio
  chaiAspectSquare, chaiAspectVideo, chaiAspectWide, chaiAspectPortrait,

  // Components
  chaiLogo, chaiLogoSm, chaiLogoLg,
  chaiNav, chaiNavbar, chaiMenu, chaiMenuVertical, chaiNavLink, chaiNavLinkHover,

  // Buttons
  chaiBtn, chaiBtnHover, chaiBtnSm, chaiBtnLg,
  chaiBtnSecondary, chaiBtnSecondaryHover,
  chaiBtnSuccess, chaiBtnDanger, chaiBtnWarning, chaiBtnInfo,
  chaiBtnOutline, chaiBtnOutlineHover, chaiBtnGhost, chaiBtnGhostHover,
  chaiBtnRounded, chaiBtnIcon, chaiBtnLoading, chaiBtnDisabled,

  // Cards
  chaiCard, chaiCardHover, chaiCardLight, chaiCardHeader, chaiCardFooter, chaiCardImage,

  // Badges
  chaiBadge, chaiBadgeSecondary, chaiBadgeSuccess, chaiBadgeDanger,
  chaiBadgeWarning, chaiBadgeInfo, chaiBadgeOutline,

  // Alerts
  chaiAlert, chaiAlertSuccess, chaiAlertDanger, chaiAlertWarning,
  chaiAlertInfo, chaiAlertPrimary,

  // Forms
  chaiInput, chaiInputFocus, chaiInputError, chaiInputSuccess,
  chaiInputLight, chaiInputSm, chaiInputLg,
  chaiLabel, chaiSelect, chaiTextarea, chaiFormGroup,
  chaiCheckbox, chaiRadio,

  // Images
  chaiImg, chaiImgFull, chaiImgCover, chaiImgContain,
  chaiAvatar, chaiAvatarSm, chaiAvatarMd, chaiAvatarLg, chaiAvatarXl,

  // Box
  chaiBox, chaiBoxSm, chaiBoxLg, chaiBoxGlass,

  // Hero
  chaiHero, chaiHeroContent,

  // Modal
  chaiOverlay, chaiModal, chaiModalHeader, chaiModalFooter,

  // Table
  chaiTable, chaiTh, chaiTd, chaiTr, chaiTrHover, chaiTableWrapper,

  // Tabs
  chaiTabs, chaiTab, chaiTabActive, chaiTabHover,

  // Breadcrumb
  chaiBreadcrumb,

  // Pagination
  chaiPagination, chaiPageItem, chaiPageItemActive, chaiPageItemHover,

  // Progress
  chaiProgressTrack, chaiProgressBar, chaiProgressBarSuccess, chaiProgressBarDanger,

  // Dividers
  chaiDividerH, chaiDividerV,

  // Chip
  chaiChip, chaiChipPrimary,

  // Sidebar
  chaiSidebar, chaiSidebarItem, chaiSidebarItemActive,

  // Footer
  chaiFooter,

  // CSS strings
  chaiSpinnerCSS, chaiSkeletonCSS, chaiTooltipCSS, chaiScrollbarCSS,
  chaiHoverCSS, chaiFocusCSS, chaiResponsiveCSS, chaiAnimationCSS,
} from "./styles.js";

// ─── HELPERS ─────────────────────────────────────────────────
const select = (selector) => document.querySelectorAll(selector);

const applyStyles = (style, elements) => {
  elements.forEach((el) => Object.assign(el.style, style));
};

const applyHover = (selector, normal, hover) => {
  select(selector).forEach((el) => {
    Object.assign(el.style, normal);
    el.addEventListener("mouseover", () => Object.assign(el.style, hover));
    el.addEventListener("mouseleave", () => Object.assign(el.style, normal));
  });
};

const injectCSS = (css) => {
  const tag = document.createElement("style");
  tag.innerHTML = css;
  document.head.appendChild(tag);
};

// ─── MAIN INIT ───────────────────────────────────────────────
/**
 * chaiInit(options)
 * @param {object} options
 * @param {boolean} options.darkMode      — apply dark mode to body (default: true)
 * @param {boolean} options.lightMode     — apply light mode to body
 * @param {boolean} options.animations    — inject animation CSS (default: true)
 * @param {boolean} options.responsive    — inject responsive CSS (default: true)
 * @param {boolean} options.tooltips      — inject tooltip CSS (default: true)
 * @param {boolean} options.scrollbar     — inject scrollbar CSS (default: true)
 * @param {boolean} options.hover         — inject hover effect CSS (default: true)
 * @param {boolean} options.spinner       — inject spinner CSS (default: true)
 * @param {boolean} options.skeleton      — inject skeleton CSS (default: true)
 * @param {boolean} options.focus         — inject focus ring CSS (default: true)
 */
export function chaiInit(options = {}) {
  const {
    darkMode = true,
    lightMode = false,
    animations = true,
    responsive = true,
    tooltips = true,
    scrollbar = true,
    hover = true,
    spinner = true,
    skeleton = true,
    focus = true,
  } = options;

  // 1. Reset
  injectCSS(chaiReset);

  // 2. Theme
  if (darkMode && !lightMode) applyStyles(chaiDarkmode, select("body"));
  if (lightMode) applyStyles(chaiLightmode, select("body"));

  // 3. Optional CSS injections
  if (animations) injectCSS(chaiAnimationCSS);
  if (responsive) injectCSS(chaiResponsiveCSS);
  if (tooltips) injectCSS(chaiTooltipCSS);
  if (scrollbar) injectCSS(chaiScrollbarCSS);
  if (hover) injectCSS(chaiHoverCSS);
  if (spinner) injectCSS(chaiSpinnerCSS);
  if (skeleton) injectCSS(chaiSkeletonCSS);
  if (focus) injectCSS(chaiFocusCSS);

  // ── TYPOGRAPHY ────────────────────────────────────────────
  applyStyles(chaiH1, select(".chai-h-1"));
  applyStyles(chaiH2, select(".chai-h-2"));
  applyStyles(chaiH3, select(".chai-h-3"));
  applyStyles(chaiH4, select(".chai-h-4"));
  applyStyles(chaiH5, select(".chai-h-5"));
  applyStyles(chaiH6, select(".chai-h-6"));
  applyStyles(chaiParaLarge, select(".chai-p-lg"));
  applyStyles(chaiParaMedium, select(".chai-p-md"));
  applyStyles(chaiParaSmall, select(".chai-p-sm"));
  applyStyles(chaiTextSmall, select(".chai-text-sm"));
  applyStyles(chaiTextVSmall, select(".chai-text-vsm"));
  applyStyles(chaiTextBase, select(".chai-text-base"));

  // Font weights
  applyStyles(chaiFwLight, select(".chai-fw-light"));
  applyStyles(chaiFwNormal, select(".chai-fw-normal"));
  applyStyles(chaiFwMedium, select(".chai-fw-medium"));
  applyStyles(chaiFwSemibold, select(".chai-fw-semibold"));
  applyStyles(chaiFwBold, select(".chai-fw-bold"));
  applyStyles(chaiFwExtrabold, select(".chai-fw-extrabold"));
  applyStyles(chaiFwBlack, select(".chai-fw-black"));

  // Text alignment
  applyStyles(chaiTextLeft, select(".chai-text-left"));
  applyStyles(chaiTextCenter, select(".chai-text-center"));
  applyStyles(chaiTextRight, select(".chai-text-right"));
  applyStyles(chaiTextJustify, select(".chai-text-justify"));
  applyStyles(chaiCenter, select(".chai-center"));

  // Text transform
  applyStyles(chaiUppercase, select(".chai-uppercase"));
  applyStyles(chaiLowercase, select(".chai-lowercase"));
  applyStyles(chaiCapitalize, select(".chai-capitalize"));

  // Text decoration
  applyStyles(chaiUnderline, select(".chai-underline"));
  applyStyles(chaiLineThrough, select(".chai-line-through"));
  applyStyles(chaiNoUnderline, select(".chai-no-underline"));

  // Line height
  applyStyles(chaiLeadingTight, select(".chai-leading-tight"));
  applyStyles(chaiLeadingNormal, select(".chai-leading-normal"));
  applyStyles(chaiLeadingRelaxed, select(".chai-leading-relaxed"));

  // Letter spacing
  applyStyles(chaiTrackingTight, select(".chai-tracking-tight"));
  applyStyles(chaiTrackingNormal, select(".chai-tracking-normal"));
  applyStyles(chaiTrackingWide, select(".chai-tracking-wide"));
  applyStyles(chaiTrackingWidest, select(".chai-tracking-widest"));

  // Truncate
  applyStyles(chaiTruncate, select(".chai-truncate"));

  // ── COLORS ────────────────────────────────────────────────
  applyStyles(chaiPrimary, select(".chai-primary"));
  applyStyles(chaiSecondary, select(".chai-secondary"));
  applyStyles(chaiSuccess, select(".chai-success"));
  applyStyles(chaiWarning, select(".chai-warning"));
  applyStyles(chaiDanger, select(".chai-danger"));
  applyStyles(chaiInfo, select(".chai-info"));
  applyStyles(chaiTextWhite, select(".chai-text-white"));
  applyStyles(chaiTextBlack, select(".chai-text-black"));
  applyStyles(chaiTextMuted, select(".chai-text-muted"));
  applyStyles(chaiTextGray, select(".chai-text-gray"));

  // BG colors
  applyStyles(chaiBgPrimary, select(".chai-bg-primary"));
  applyStyles(chaiBgSecondary, select(".chai-bg-secondary"));
  applyStyles(chaiBgSuccess, select(".chai-bg-success"));
  applyStyles(chaiBgWarning, select(".chai-bg-warning"));
  applyStyles(chaiBgDanger, select(".chai-bg-danger"));
  applyStyles(chaiBgInfo, select(".chai-bg-info"));
  applyStyles(chaiBgWhite, select(".chai-bg-white"));
  applyStyles(chaiBgBlack, select(".chai-bg-black"));
  applyStyles(chaiBgLight, select(".chai-bg-light"));
  applyStyles(chaiBgDark, select(".chai-bg-dark"));
  applyStyles(chaiBgGray, select(".chai-bg-gray"));
  applyStyles(chaiBgTransparent, select(".chai-bg-transparent"));

  // ── DISPLAY ───────────────────────────────────────────────
  applyStyles(chaiBlock, select(".chai-block"));
  applyStyles(chaiInline, select(".chai-inline"));
  applyStyles(chaiInlineBlock, select(".chai-inline-block"));
  applyStyles(chaiFlex, select(".chai-flex"));
  applyStyles(chaiInlineFlex, select(".chai-inline-flex"));
  applyStyles(chaiGrid, select(".chai-grid"));
  applyStyles(chaiHidden, select(".chai-hidden"));

  // ── FLEXBOX ───────────────────────────────────────────────
  applyStyles(chaiFlexRow, select(".chai-flex-row"));
  applyStyles(chaiFlexCol, select(".chai-flex-col"));
  applyStyles(chaiFlexRowReverse, select(".chai-flex-row-reverse"));
  applyStyles(chaiFlexColReverse, select(".chai-flex-col-reverse"));
  applyStyles(chaiFlexWrap, select(".chai-flex-wrap"));
  applyStyles(chaiFlexNoWrap, select(".chai-flex-nowrap"));
  applyStyles(chaiFlexGrow, select(".chai-flex-grow"));
  applyStyles(chaiFlexShrink, select(".chai-flex-shrink"));
  applyStyles(chaiFlexNone, select(".chai-flex-none"));
  applyStyles(chaiFlexAuto, select(".chai-flex-auto"));

  // Justify
  applyStyles(chaiJustifyStart, select(".chai-justify-start"));
  applyStyles(chaiJustifyEnd, select(".chai-justify-end"));
  applyStyles(chaiJustifyCenter, select(".chai-justify-center"));
  applyStyles(chaiJustifyBetween, select(".chai-justify-between"));
  applyStyles(chaiJustifyAround, select(".chai-justify-around"));
  applyStyles(chaiJustifyEvenly, select(".chai-justify-evenly"));

  // Align
  applyStyles(chaiAlignStart, select(".chai-align-start"));
  applyStyles(chaiAlignEnd, select(".chai-align-end"));
  applyStyles(chaiAlignCenter, select(".chai-align-center"));
  applyStyles(chaiAlignBaseline, select(".chai-align-baseline"));
  applyStyles(chaiAlignStretch, select(".chai-align-stretch"));

  // Self
  applyStyles(chaiSelfCenter, select(".chai-self-center"));
  applyStyles(chaiSelfStart, select(".chai-self-start"));
  applyStyles(chaiSelfEnd, select(".chai-self-end"));
  applyStyles(chaiSelfStretch, select(".chai-self-stretch"));

  // Gap
  applyStyles(chaiGapXs, select(".chai-gap-xs"));
  applyStyles(chaiGapSm, select(".chai-gap-sm"));
  applyStyles(chaiGapMd, select(".chai-gap-md"));
  applyStyles(chaiGapLg, select(".chai-gap-lg"));
  applyStyles(chaiGapXl, select(".chai-gap-xl"));
  applyStyles(chaiGap2xl, select(".chai-gap-2xl"));

  // ── GRID ──────────────────────────────────────────────────
  applyStyles(chaiGrid2, select(".chai-grid-2"));
  applyStyles(chaiGrid3, select(".chai-grid-3"));
  applyStyles(chaiGrid4, select(".chai-grid-4"));
  applyStyles(chaiGrid6, select(".chai-grid-6"));
  applyStyles(chaiGrid12, select(".chai-grid-12"));
  applyStyles(chaiGridAutoFit, select(".chai-grid-auto-fit"));
  applyStyles(chaiGridAutoFill, select(".chai-grid-auto-fill"));
  applyStyles(chaiColSpan2, select(".chai-col-span-2"));
  applyStyles(chaiColSpan3, select(".chai-col-span-3"));
  applyStyles(chaiColSpan4, select(".chai-col-span-4"));
  applyStyles(chaiColSpanFull, select(".chai-col-span-full"));

  // ── PADDING ───────────────────────────────────────────────
  applyStyles(chaiPXs, select(".chai-p-xs"));
  applyStyles(chaiPSm, select(".chai-p-sm"));
  applyStyles(chaiPMd, select(".chai-p-md"));
  applyStyles(chaiPLg, select(".chai-p-lg"));
  applyStyles(chaiPXl, select(".chai-p-xl"));
  applyStyles(chaiP2xl, select(".chai-p-2xl"));
  applyStyles(chaiPxSm, select(".chai-px-sm"));
  applyStyles(chaiPxMd, select(".chai-px-md"));
  applyStyles(chaiPxLg, select(".chai-px-lg"));
  applyStyles(chaiPxXl, select(".chai-px-xl"));
  applyStyles(chaiPySm, select(".chai-py-sm"));
  applyStyles(chaiPyMd, select(".chai-py-md"));
  applyStyles(chaiPyLg, select(".chai-py-lg"));
  applyStyles(chaiPyXl, select(".chai-py-xl"));

  // ── MARGIN ────────────────────────────────────────────────
  applyStyles(chaiMSm, select(".chai-m-sm"));
  applyStyles(chaiMMd, select(".chai-m-md"));
  applyStyles(chaiMLg, select(".chai-m-lg"));
  applyStyles(chaiMXl, select(".chai-m-xl"));
  applyStyles(chaiMxAuto, select(".chai-mx-auto"));
  applyStyles(chaiMtAuto, select(".chai-mt-auto"));
  applyStyles(chaiMbAuto, select(".chai-mb-auto"));
  applyStyles(chaiMxSm, select(".chai-mx-sm"));
  applyStyles(chaiMxMd, select(".chai-mx-md"));
  applyStyles(chaiMySm, select(".chai-my-sm"));
  applyStyles(chaiMyMd, select(".chai-my-md"));
  applyStyles(chaiMyLg, select(".chai-my-lg"));

  // ── SIZING ────────────────────────────────────────────────
  applyStyles(chaiWFull, select(".chai-w-full"));
  applyStyles(chaiWAuto, select(".chai-w-auto"));
  applyStyles(chaiWHalf, select(".chai-w-half"));
  applyStyles(chaiWScreen, select(".chai-w-screen"));
  applyStyles(chaiHFull, select(".chai-h-full"));
  applyStyles(chaiHAuto, select(".chai-h-auto"));
  applyStyles(chaiHScreen, select(".chai-h-screen"));
  applyStyles(chaiMinHScreen, select(".chai-min-h-screen"));
  applyStyles(chaiMaxWContainer, select(".chai-max-w-container"));
  applyStyles(chaiMaxWSm, select(".chai-max-w-sm"));
  applyStyles(chaiMaxWMd, select(".chai-max-w-md"));
  applyStyles(chaiMaxWLg, select(".chai-max-w-lg"));
  applyStyles(chaiMaxWXl, select(".chai-max-w-xl"));

  // ── POSITION ──────────────────────────────────────────────
  applyStyles(chaiRelative, select(".chai-relative"));
  applyStyles(chaiAbsolute, select(".chai-absolute"));
  applyStyles(chaiFixed, select(".chai-fixed"));
  applyStyles(chaiSticky, select(".chai-sticky"));
  applyStyles(chaiInset0, select(".chai-inset-0"));
  applyStyles(chaiTop0, select(".chai-top-0"));
  applyStyles(chaiBottom0, select(".chai-bottom-0"));
  applyStyles(chaiZ10, select(".chai-z-10"));
  applyStyles(chaiZ20, select(".chai-z-20"));
  applyStyles(chaiZ50, select(".chai-z-50"));

  // ── OVERFLOW ──────────────────────────────────────────────
  applyStyles(chaiOverflowHidden, select(".chai-overflow-hidden"));
  applyStyles(chaiOverflowAuto, select(".chai-overflow-auto"));
  applyStyles(chaiOverflowScroll, select(".chai-overflow-scroll"));
  applyStyles(chaiOverflowXAuto, select(".chai-overflow-x-auto"));
  applyStyles(chaiOverflowYAuto, select(".chai-overflow-y-auto"));

  // ── BORDERS ───────────────────────────────────────────────
  applyStyles(chaiBorder, select(".chai-border"));
  applyStyles(chaiBorderPrimary, select(".chai-border-primary"));
  applyStyles(chaiBorderSecondary, select(".chai-border-secondary"));
  applyStyles(chaiBorderDanger, select(".chai-border-danger"));
  applyStyles(chaiBorder2, select(".chai-border-2"));
  applyStyles(chaiBorderT, select(".chai-border-t"));
  applyStyles(chaiBorderB, select(".chai-border-b"));
  applyStyles(chaiBorderNone, select(".chai-border-none"));
  applyStyles(chaiRoundedSm, select(".chai-rounded-sm"));
  applyStyles(chaiRounded, select(".chai-rounded"));
  applyStyles(chaiRoundedLg, select(".chai-rounded-lg"));
  applyStyles(chaiRoundedXl, select(".chai-rounded-xl"));
  applyStyles(chaiRoundedFull, select(".chai-rounded-full"));
  applyStyles(chaiRoundedNone, select(".chai-rounded-none"));
  applyStyles(chaiRoundedTop, select(".chai-rounded-top"));
  applyStyles(chaiRoundedBottom, select(".chai-rounded-bottom"));

  // ── SHADOWS ───────────────────────────────────────────────
  applyStyles(chaiShadowSm, select(".chai-shadow-sm"));
  applyStyles(chaiShadow, select(".chai-shadow"));
  applyStyles(chaiShadowLg, select(".chai-shadow-lg"));
  applyStyles(chaiShadowXl, select(".chai-shadow-xl"));
  applyStyles(chaiShadowNone, select(".chai-shadow-none"));
  applyStyles(chaiShadowInner, select(".chai-shadow-inner"));
  applyStyles(chaiShadowPrimary, select(".chai-shadow-primary"));
  applyStyles(chaiShadowSecondary, select(".chai-shadow-secondary"));

  // ── OPACITY ───────────────────────────────────────────────
  applyStyles(chaiOpacity0, select(".chai-opacity-0"));
  applyStyles(chaiOpacity25, select(".chai-opacity-25"));
  applyStyles(chaiOpacity50, select(".chai-opacity-50"));
  applyStyles(chaiOpacity75, select(".chai-opacity-75"));
  applyStyles(chaiOpacity100, select(".chai-opacity-100"));

  // ── CURSOR ────────────────────────────────────────────────
  applyStyles(chaiCursorPointer, select(".chai-cursor-pointer"));
  applyStyles(chaiCursorDefault, select(".chai-cursor-default"));
  applyStyles(chaiCursorNotAllowed, select(".chai-cursor-not-allowed"));
  applyStyles(chaiCursorWait, select(".chai-cursor-wait"));

  // ── POINTER & SELECT ──────────────────────────────────────
  applyStyles(chaiPointerNone, select(".chai-pointer-none"));
  applyStyles(chaiSelectNone, select(".chai-select-none"));
  applyStyles(chaiSelectAll, select(".chai-select-all"));

  // ── OBJECT FIT ────────────────────────────────────────────
  applyStyles(chaiObjectCover, select(".chai-object-cover"));
  applyStyles(chaiObjectContain, select(".chai-object-contain"));

  // ── TRANSITIONS ───────────────────────────────────────────
  applyStyles(chaiTransitionFast, select(".chai-transition-fast"));
  applyStyles(chaiTransition, select(".chai-transition"));
  applyStyles(chaiTransitionSlow, select(".chai-transition-slow"));

  // ── GRADIENTS ─────────────────────────────────────────────
  applyStyles(chaiGradientPrimary, select(".chai-gradient-primary"));
  applyStyles(chaiGradientSecondary, select(".chai-gradient-secondary"));
  applyStyles(chaiGradientDark, select(".chai-gradient-dark"));
  applyStyles(chaiGradientSuccess, select(".chai-gradient-success"));
  applyStyles(chaiGradientDanger, select(".chai-gradient-danger"));
  applyStyles(chaiGradientSunset, select(".chai-gradient-sunset"));
  applyStyles(chaiGradientOcean, select(".chai-gradient-ocean"));

  // ── LAYOUT ────────────────────────────────────────────────
  applyStyles(chaiCenterFlex, select(".chai-center-flex"));
  applyStyles(chaiContainer, select(".chai-container"));
  applyStyles(chaiSection, select(".chai-section"));
  applyStyles(chaiDividerH, select(".chai-divider"));
  applyStyles(chaiDividerV, select(".chai-divider-v"));

  // ── ASPECT RATIO ──────────────────────────────────────────
  applyStyles(chaiAspectSquare, select(".chai-aspect-square"));
  applyStyles(chaiAspectVideo, select(".chai-aspect-video"));
  applyStyles(chaiAspectWide, select(".chai-aspect-wide"));
  applyStyles(chaiAspectPortrait, select(".chai-aspect-portrait"));

  // ── LOGO ──────────────────────────────────────────────────
  applyStyles(chaiLogo, select(".chai-logo"));
  applyStyles(chaiLogoSm, select(".chai-logo-sm"));
  applyStyles(chaiLogoLg, select(".chai-logo-lg"));

  // ── NAVBAR ────────────────────────────────────────────────
  applyStyles(chaiNavbar, select(".chai-navbar"));
  applyStyles(chaiNav, select(".chai-nav"));
  applyStyles(chaiMenu, select(".chai-menu"));
  applyStyles(chaiMenuVertical, select(".chai-menu-vertical"));
  applyHover(".chai-nav-link", chaiNavLink, chaiNavLinkHover);

  // ── BUTTONS ───────────────────────────────────────────────
  applyHover(".chai-btn", chaiBtn, chaiBtnHover);
  applyHover(".chai-btn-sm", chaiBtnSm, chaiBtnHover);
  applyHover(".chai-btn-lg", chaiBtnLg, chaiBtnHover);
  applyHover(".chai-btn-secondary", chaiBtnSecondary, chaiBtnSecondaryHover);
  applyHover(".chai-btn-success", chaiBtnSuccess, { filter: "brightness(1.1)" });
  applyHover(".chai-btn-danger", chaiBtnDanger, { filter: "brightness(1.1)" });
  applyHover(".chai-btn-warning", chaiBtnWarning, { filter: "brightness(1.1)" });
  applyHover(".chai-btn-info", chaiBtnInfo, { filter: "brightness(1.1)" });
  applyHover(".chai-btn-outline", chaiBtnOutline, chaiBtnOutlineHover);
  applyHover(".chai-btn-ghost", chaiBtnGhost, chaiBtnGhostHover);
  applyHover(".chai-btn-rounded", { ...chaiBtn, borderRadius: "9999px" }, chaiBtnHover);
  applyStyles(chaiBtnIcon, select(".chai-btn-icon"));
  applyStyles(chaiBtnLoading, select(".chai-btn-loading"));
  applyStyles(chaiBtnDisabled, select(".chai-btn-disabled, .chai-btn[disabled]"));

  // ── CARDS ─────────────────────────────────────────────────
  applyHover(".chai-card", chaiCard, { ...chaiCard, ...chaiCardHover });
  applyHover(".chai-card-light", chaiCardLight, { ...chaiCardLight, ...chaiCardHover });
  applyStyles(chaiCardHeader, select(".chai-card-header"));
  applyStyles(chaiCardFooter, select(".chai-card-footer"));
  applyStyles(chaiCardImage, select(".chai-card-image"));

  // ── BADGES ────────────────────────────────────────────────
  applyStyles(chaiBadge, select(".chai-badge"));
  applyStyles(chaiBadgeSecondary, select(".chai-badge-secondary"));
  applyStyles(chaiBadgeSuccess, select(".chai-badge-success"));
  applyStyles(chaiBadgeDanger, select(".chai-badge-danger"));
  applyStyles(chaiBadgeWarning, select(".chai-badge-warning"));
  applyStyles(chaiBadgeInfo, select(".chai-badge-info"));
  applyStyles(chaiBadgeOutline, select(".chai-badge-outline"));

  // ── ALERTS ────────────────────────────────────────────────
  applyStyles(chaiAlert, select(".chai-alert"));
  applyStyles(chaiAlertSuccess, select(".chai-alert-success"));
  applyStyles(chaiAlertDanger, select(".chai-alert-danger"));
  applyStyles(chaiAlertWarning, select(".chai-alert-warning"));
  applyStyles(chaiAlertInfo, select(".chai-alert-info"));
  applyStyles(chaiAlertPrimary, select(".chai-alert-primary"));

  // ── FORMS ─────────────────────────────────────────────────
  applyStyles(chaiFormGroup, select(".chai-form-group"));
  applyStyles(chaiLabel, select(".chai-label"));
  applyStyles(chaiCheckbox, select(".chai-checkbox"));
  applyStyles(chaiRadio, select(".chai-radio"));

  // Inputs with focus handling
  const setupInput = (selector, baseStyle) => {
    select(selector).forEach((el) => {
      Object.assign(el.style, baseStyle);
      el.addEventListener("focus", () => Object.assign(el.style, chaiInputFocus));
      el.addEventListener("blur", () => Object.assign(el.style, baseStyle));
    });
  };
  setupInput(".chai-input", chaiInput);
  setupInput(".chai-input-sm", chaiInputSm);
  setupInput(".chai-input-lg", chaiInputLg);
  setupInput(".chai-input-light", chaiInputLight);
  setupInput(".chai-select", chaiSelect);
  setupInput(".chai-textarea", chaiTextarea);

  // Input validation states
  applyStyles(chaiInputError, select(".chai-input-error, .chai-input.error"));
  applyStyles(chaiInputSuccess, select(".chai-input-success, .chai-input.success"));

  // ── IMAGES & MEDIA ────────────────────────────────────────
  applyStyles(chaiImg, select(".chai-img"));
  applyStyles(chaiImgFull, select(".chai-img-full"));
  applyStyles(chaiImgCover, select(".chai-img-cover"));
  applyStyles(chaiImgContain, select(".chai-img-contain"));
  applyStyles(chaiAvatar, select(".chai-avatar"));
  applyStyles(chaiAvatarSm, select(".chai-avatar-sm"));
  applyStyles(chaiAvatarMd, select(".chai-avatar-md"));
  applyStyles(chaiAvatarLg, select(".chai-avatar-lg"));
  applyStyles(chaiAvatarXl, select(".chai-avatar-xl"));

  // ── BOX ───────────────────────────────────────────────────
  applyStyles(chaiBox, select(".chai-box"));
  applyStyles(chaiBoxSm, select(".chai-box-sm"));
  applyStyles(chaiBoxLg, select(".chai-box-lg"));
  applyStyles(chaiBoxGlass, select(".chai-box-glass"));

  // ── HERO ──────────────────────────────────────────────────
  applyStyles(chaiHero, select(".chai-hero"));
  applyStyles(chaiHeroContent, select(".chai-hero-content"));

  // ── MODAL ─────────────────────────────────────────────────
  applyStyles(chaiOverlay, select(".chai-overlay"));
  applyStyles(chaiModal, select(".chai-modal"));
  applyStyles(chaiModalHeader, select(".chai-modal-header"));
  applyStyles(chaiModalFooter, select(".chai-modal-footer"));

  // ── TABLE ─────────────────────────────────────────────────
  applyStyles(chaiTableWrapper, select(".chai-table-wrapper"));
  applyStyles(chaiTable, select(".chai-table"));
  applyStyles(chaiTh, select(".chai-table th, .chai-th"));
  applyStyles(chaiTd, select(".chai-table td, .chai-td"));
  applyHover(".chai-table tr:not(:first-child)", chaiTr, chaiTrHover);

  // ── TABS ──────────────────────────────────────────────────
  applyStyles(chaiTabs, select(".chai-tabs"));
  select(".chai-tab").forEach((tab) => {
    Object.assign(tab.style, chaiTab);
    tab.addEventListener("mouseover", () => Object.assign(tab.style, { ...chaiTab, ...chaiTabHover }));
    tab.addEventListener("mouseleave", () => {
      if (!tab.classList.contains("active")) Object.assign(tab.style, chaiTab);
    });
    if (tab.classList.contains("active")) Object.assign(tab.style, { ...chaiTab, ...chaiTabActive });
  });

  // ── BREADCRUMB ────────────────────────────────────────────
  applyStyles(chaiBreadcrumb, select(".chai-breadcrumb"));

  // ── PAGINATION ────────────────────────────────────────────
  applyStyles(chaiPagination, select(".chai-pagination"));
  select(".chai-page-item").forEach((item) => {
    Object.assign(item.style, chaiPageItem);
    item.addEventListener("mouseover", () => {
      if (!item.classList.contains("active")) Object.assign(item.style, { ...chaiPageItem, ...chaiPageItemHover });
    });
    item.addEventListener("mouseleave", () => {
      if (!item.classList.contains("active")) Object.assign(item.style, chaiPageItem);
    });
    if (item.classList.contains("active")) Object.assign(item.style, { ...chaiPageItem, ...chaiPageItemActive });
  });

  // ── PROGRESS ──────────────────────────────────────────────
  applyStyles(chaiProgressTrack, select(".chai-progress"));
  applyStyles(chaiProgressBar, select(".chai-progress-bar"));
  applyStyles(chaiProgressBarSuccess, select(".chai-progress-bar-success"));
  applyStyles(chaiProgressBarDanger, select(".chai-progress-bar-danger"));

  // ── CHIP ──────────────────────────────────────────────────
  applyStyles(chaiChip, select(".chai-chip"));
  applyStyles(chaiChipPrimary, select(".chai-chip-primary"));

  // ── SIDEBAR ───────────────────────────────────────────────
  applyStyles(chaiSidebar, select(".chai-sidebar"));
  select(".chai-sidebar-item").forEach((item) => {
    Object.assign(item.style, chaiSidebarItem);
    item.addEventListener("mouseover", () => Object.assign(item.style, { ...chaiSidebarItem, ...chaiSidebarItemActive }));
    item.addEventListener("mouseleave", () => {
      if (!item.classList.contains("active")) Object.assign(item.style, chaiSidebarItem);
      else Object.assign(item.style, { ...chaiSidebarItem, ...chaiSidebarItemActive });
    });
    if (item.classList.contains("active")) Object.assign(item.style, { ...chaiSidebarItem, ...chaiSidebarItemActive });
  });

  // ── FOOTER ────────────────────────────────────────────────
  applyStyles(chaiFooter, select(".chai-footer"));
}

// Re-export everything from styles for direct usage
export * from "./styles.js";
