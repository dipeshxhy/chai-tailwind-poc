// ============================================================
//  chai-tailwind — styles.js
//  A utility-first JS style framework using chai-* classes
// ============================================================

// ─── RESET & BASE ────────────────────────────────────────────
export const chaiReset = `
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  img, video { max-width: 100%; display: block; }
  a { text-decoration: none; color: inherit; }
  ul, ol { list-style: none; }
  button { cursor: pointer; font-family: inherit; }
  input, textarea, select { font-family: inherit; }
`;

// ─── DESIGN TOKENS ───────────────────────────────────────────
export const chaiTokens = {
  colorPrimary: "#fe9536",
  colorPrimaryLight: "#ffa95a",
  colorPrimaryDark: "#e07c1e",
  colorSecondary: "#4f46e5",
  colorSecondaryLight: "#6366f1",
  colorSuccess: "#22c55e",
  colorWarning: "#f59e0b",
  colorDanger: "#ef4444",
  colorInfo: "#3b82f6",
  colorDark: "#1a1a2e",
  colorDarker: "#111",
  colorLight: "#f9f9f9",
  colorWhite: "#ffffff",
  colorBlack: "#000000",
  colorGray100: "#f3f4f6",
  colorGray200: "#e5e7eb",
  colorGray300: "#d1d5db",
  colorGray400: "#9ca3af",
  colorGray500: "#6b7280",
  colorGray600: "#4b5563",
  colorGray700: "#374151",
  colorGray800: "#1f2937",
  colorGray900: "#111827",
  fontSizeVSmall: "10.24px",
  fontSizeSmall: "12.8px",
  fontSizeBase: "16px",
  fontSizeP: "16px",
  fontSizeH6: "20px",
  fontSizeH5: "25px",
  fontSizeH4: "31.25px",
  fontSizeH3: "39.06px",
  fontSizeH2: "48.83px",
  fontSizeH1: "61.04px",
  fontSizeParaLg: "22px",
  fontSizeParaMd: "18px",
  fontSizeParaSm: "14px",
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightSemibold: 600,
  fontWeightBold: 700,
  fontWeightExtrabold: 800,
  fontWeightBlack: 900,
  lineHeightTight: 1.2,
  lineHeightNormal: 1.5,
  lineHeightRelaxed: 1.75,
  spacingXs: "4px",
  spacingSm: "8px",
  spacingMd: "16px",
  spacingLg: "24px",
  spacingXl: "32px",
  spacing2xl: "48px",
  spacing3xl: "64px",
  spacing4xl: "96px",
  radiusSm: "4px",
  radiusMd: "8px",
  radiusLg: "12px",
  radiusXl: "16px",
  radiusFull: "9999px",
  shadowSm: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  shadowMd: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)",
  shadowLg: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
  shadowXl: "0 20px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.04)",
  transitionFast: "all ease 0.15s",
  transitionNormal: "all ease 0.3s",
  transitionSlow: "all ease 0.5s",
  containerMax: "1200px",
};

// ─── TYPOGRAPHY ──────────────────────────────────────────────
export const chaiH1 = {
  fontSize: chaiTokens.fontSizeH1,
  fontWeight: chaiTokens.fontWeightBlack,
  lineHeight: 1.3,
};
export const chaiH2 = {
  fontSize: chaiTokens.fontSizeH2,
  fontWeight: chaiTokens.fontWeightExtrabold,
  lineHeight: 1.4,
};
export const chaiH3 = {
  fontSize: chaiTokens.fontSizeH3,
  fontWeight: chaiTokens.fontWeightBold,
  lineHeight: 1.3,
};
export const chaiH4 = {
  fontSize: chaiTokens.fontSizeH4,
  fontWeight: chaiTokens.fontWeightBold,
  lineHeight: 1.3,
};
export const chaiH5 = {
  fontSize: chaiTokens.fontSizeH5,
  fontWeight: chaiTokens.fontWeightSemibold,
  lineHeight: 1.3,
};
export const chaiH6 = {
  fontSize: chaiTokens.fontSizeH6,
  fontWeight: chaiTokens.fontWeightSemibold,
  lineHeight: 1.3,
};
export const chaiParaLarge = { fontSize: chaiTokens.fontSizeParaLg, lineHeight: chaiTokens.lineHeightRelaxed };
export const chaiParaMedium = { fontSize: chaiTokens.fontSizeParaMd, lineHeight: chaiTokens.lineHeightNormal };
export const chaiParaSmall = { fontSize: chaiTokens.fontSizeParaSm, lineHeight: chaiTokens.lineHeightNormal };
export const chaiTextSmall = { fontSize: chaiTokens.fontSizeSmall };
export const chaiTextVSmall = { fontSize: chaiTokens.fontSizeVSmall };
export const chaiTextBase = { fontSize: chaiTokens.fontSizeBase };

// Font weights
export const chaiFwLight = { fontWeight: chaiTokens.fontWeightLight };
export const chaiFwNormal = { fontWeight: chaiTokens.fontWeightNormal };
export const chaiFwMedium = { fontWeight: chaiTokens.fontWeightMedium };
export const chaiFwSemibold = { fontWeight: chaiTokens.fontWeightSemibold };
export const chaiFwBold = { fontWeight: chaiTokens.fontWeightBold };
export const chaiFwExtrabold = { fontWeight: chaiTokens.fontWeightExtrabold };
export const chaiFwBlack = { fontWeight: chaiTokens.fontWeightBlack };

// Text alignment
export const chaiTextLeft = { textAlign: "left" };
export const chaiTextCenter = { textAlign: "center" };
export const chaiTextRight = { textAlign: "right" };
export const chaiTextJustify = { textAlign: "justify" };

// Text transform
export const chaiUppercase = { textTransform: "uppercase" };
export const chaiLowercase = { textTransform: "lowercase" };
export const chaiCapitalize = { textTransform: "capitalize" };

// Text decoration
export const chaiUnderline = { textDecoration: "underline" };
export const chaiLineThrough = { textDecoration: "line-through" };
export const chaiNoUnderline = { textDecoration: "none" };

// Line height
export const chaiLeadingTight = { lineHeight: chaiTokens.lineHeightTight };
export const chaiLeadingNormal = { lineHeight: chaiTokens.lineHeightNormal };
export const chaiLeadingRelaxed = { lineHeight: chaiTokens.lineHeightRelaxed };

// Letter spacing
export const chaiTrackingTight = { letterSpacing: "-0.05em" };
export const chaiTrackingNormal = { letterSpacing: "0" };
export const chaiTrackingWide = { letterSpacing: "0.05em" };
export const chaiTrackingWidest = { letterSpacing: "0.15em" };

// Truncation
export const chaiTruncate = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

// ─── COLORS ──────────────────────────────────────────────────
export const chaiPrimary = { color: chaiTokens.colorPrimary };
export const chaiSecondary = { color: chaiTokens.colorSecondary };
export const chaiSuccess = { color: chaiTokens.colorSuccess };
export const chaiWarning = { color: chaiTokens.colorWarning };
export const chaiDanger = { color: chaiTokens.colorDanger };
export const chaiInfo = { color: chaiTokens.colorInfo };
export const chaiTextWhite = { color: chaiTokens.colorWhite };
export const chaiTextBlack = { color: chaiTokens.colorBlack };
export const chaiTextMuted = { color: chaiTokens.colorGray400 };
export const chaiTextGray = { color: chaiTokens.colorGray500 };

// Background colors
export const chaiBgPrimary = { backgroundColor: chaiTokens.colorPrimary };
export const chaiBgSecondary = { backgroundColor: chaiTokens.colorSecondary };
export const chaiBgSuccess = { backgroundColor: chaiTokens.colorSuccess };
export const chaiBgWarning = { backgroundColor: chaiTokens.colorWarning };
export const chaiBgDanger = { backgroundColor: chaiTokens.colorDanger };
export const chaiBgInfo = { backgroundColor: chaiTokens.colorInfo };
export const chaiBgWhite = { backgroundColor: chaiTokens.colorWhite };
export const chaiBgBlack = { backgroundColor: chaiTokens.colorBlack };
export const chaiBgLight = { backgroundColor: chaiTokens.colorLight };
export const chaiBgDark = { backgroundColor: chaiTokens.colorDark };
export const chaiBgGray = { backgroundColor: chaiTokens.colorGray100 };
export const chaiBgTransparent = { backgroundColor: "transparent" };

// ─── THEMES ──────────────────────────────────────────────────
export const chaiDarkmode = {
  backgroundColor: chaiTokens.colorDarker,
  color: chaiTokens.colorWhite,
};
export const chaiLightmode = {
  backgroundColor: chaiTokens.colorWhite,
  color: chaiTokens.colorBlack,
};

// ─── DISPLAY ─────────────────────────────────────────────────
export const chaiBlock = { display: "block" };
export const chaiInline = { display: "inline" };
export const chaiInlineBlock = { display: "inline-block" };
export const chaiFlex = { display: "flex" };
export const chaiInlineFlex = { display: "inline-flex" };
export const chaiGrid = { display: "grid" };
export const chaiInlineGrid = { display: "inline-grid" };
export const chaiHidden = { display: "none" };

// ─── FLEXBOX ─────────────────────────────────────────────────
export const chaiFlexRow = { flexDirection: "row" };
export const chaiFlexCol = { flexDirection: "column" };
export const chaiFlexRowReverse = { flexDirection: "row-reverse" };
export const chaiFlexColReverse = { flexDirection: "column-reverse" };
export const chaiFlexWrap = { flexWrap: "wrap" };
export const chaiFlexNoWrap = { flexWrap: "nowrap" };
export const chaiFlexWrapReverse = { flexWrap: "wrap-reverse" };
export const chaiFlexGrow = { flexGrow: 1 };
export const chaiFlexShrink = { flexShrink: 1 };
export const chaiFlexNone = { flex: "none" };
export const chaiFlexAuto = { flex: "1 1 auto" };

// Justify content
export const chaiJustifyStart = { justifyContent: "flex-start" };
export const chaiJustifyEnd = { justifyContent: "flex-end" };
export const chaiJustifyCenter = { justifyContent: "center" };
export const chaiJustifyBetween = { justifyContent: "space-between" };
export const chaiJustifyAround = { justifyContent: "space-around" };
export const chaiJustifyEvenly = { justifyContent: "space-evenly" };

// Align items
export const chaiAlignStart = { alignItems: "flex-start" };
export const chaiAlignEnd = { alignItems: "flex-end" };
export const chaiAlignCenter = { alignItems: "center" };
export const chaiAlignBaseline = { alignItems: "baseline" };
export const chaiAlignStretch = { alignItems: "stretch" };

// Align self
export const chaiSelfAuto = { alignSelf: "auto" };
export const chaiSelfStart = { alignSelf: "flex-start" };
export const chaiSelfEnd = { alignSelf: "flex-end" };
export const chaiSelfCenter = { alignSelf: "center" };
export const chaiSelfStretch = { alignSelf: "stretch" };

// Gap
export const chaiGapXs = { gap: chaiTokens.spacingXs };
export const chaiGapSm = { gap: chaiTokens.spacingSm };
export const chaiGapMd = { gap: chaiTokens.spacingMd };
export const chaiGapLg = { gap: chaiTokens.spacingLg };
export const chaiGapXl = { gap: chaiTokens.spacingXl };
export const chaiGap2xl = { gap: chaiTokens.spacing2xl };

// ─── GRID ────────────────────────────────────────────────────
export const chaiGrid2 = { display: "grid", gridTemplateColumns: "repeat(2, 1fr)" };
export const chaiGrid3 = { display: "grid", gridTemplateColumns: "repeat(3, 1fr)" };
export const chaiGrid4 = { display: "grid", gridTemplateColumns: "repeat(4, 1fr)" };
export const chaiGrid6 = { display: "grid", gridTemplateColumns: "repeat(6, 1fr)" };
export const chaiGrid12 = { display: "grid", gridTemplateColumns: "repeat(12, 1fr)" };
export const chaiGridAutoFit = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" };
export const chaiGridAutoFill = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" };
export const chaiColSpan2 = { gridColumn: "span 2" };
export const chaiColSpan3 = { gridColumn: "span 3" };
export const chaiColSpan4 = { gridColumn: "span 4" };
export const chaiColSpanFull = { gridColumn: "1 / -1" };

// ─── SPACING — PADDING ───────────────────────────────────────
export const chaiPXs = { padding: chaiTokens.spacingXs };
export const chaiPSm = { padding: chaiTokens.spacingSm };
export const chaiPMd = { padding: chaiTokens.spacingMd };
export const chaiPLg = { padding: chaiTokens.spacingLg };
export const chaiPXl = { padding: chaiTokens.spacingXl };
export const chaiP2xl = { padding: chaiTokens.spacing2xl };

export const chaiPxXs = { paddingLeft: chaiTokens.spacingXs, paddingRight: chaiTokens.spacingXs };
export const chaiPxSm = { paddingLeft: chaiTokens.spacingSm, paddingRight: chaiTokens.spacingSm };
export const chaiPxMd = { paddingLeft: chaiTokens.spacingMd, paddingRight: chaiTokens.spacingMd };
export const chaiPxLg = { paddingLeft: chaiTokens.spacingLg, paddingRight: chaiTokens.spacingLg };
export const chaiPxXl = { paddingLeft: chaiTokens.spacingXl, paddingRight: chaiTokens.spacingXl };

export const chaiPyXs = { paddingTop: chaiTokens.spacingXs, paddingBottom: chaiTokens.spacingXs };
export const chaiPySm = { paddingTop: chaiTokens.spacingSm, paddingBottom: chaiTokens.spacingSm };
export const chaiPyMd = { paddingTop: chaiTokens.spacingMd, paddingBottom: chaiTokens.spacingMd };
export const chaiPyLg = { paddingTop: chaiTokens.spacingLg, paddingBottom: chaiTokens.spacingLg };
export const chaiPyXl = { paddingTop: chaiTokens.spacingXl, paddingBottom: chaiTokens.spacingXl };

// ─── SPACING — MARGIN ────────────────────────────────────────
export const chaiMXs = { margin: chaiTokens.spacingXs };
export const chaiMSm = { margin: chaiTokens.spacingSm };
export const chaiMMd = { margin: chaiTokens.spacingMd };
export const chaiMLg = { margin: chaiTokens.spacingLg };
export const chaiMXl = { margin: chaiTokens.spacingXl };
export const chaiM2xl = { margin: chaiTokens.spacing2xl };
export const chaiMxAuto = { marginLeft: "auto", marginRight: "auto" };
export const chaiMtAuto = { marginTop: "auto" };
export const chaiMbAuto = { marginBottom: "auto" };

export const chaiMxXs = { marginLeft: chaiTokens.spacingXs, marginRight: chaiTokens.spacingXs };
export const chaiMxSm = { marginLeft: chaiTokens.spacingSm, marginRight: chaiTokens.spacingSm };
export const chaiMxMd = { marginLeft: chaiTokens.spacingMd, marginRight: chaiTokens.spacingMd };
export const chaiMxLg = { marginLeft: chaiTokens.spacingLg, marginRight: chaiTokens.spacingLg };

export const chaiMyXs = { marginTop: chaiTokens.spacingXs, marginBottom: chaiTokens.spacingXs };
export const chaiMySm = { marginTop: chaiTokens.spacingSm, marginBottom: chaiTokens.spacingSm };
export const chaiMyMd = { marginTop: chaiTokens.spacingMd, marginBottom: chaiTokens.spacingMd };
export const chaiMyLg = { marginTop: chaiTokens.spacingLg, marginBottom: chaiTokens.spacingLg };

// ─── SIZING ──────────────────────────────────────────────────
export const chaiWFull = { width: "100%" };
export const chaiWAuto = { width: "auto" };
export const chaiWHalf = { width: "50%" };
export const chaiWThird = { width: "33.333%" };
export const chaiWQuarter = { width: "25%" };
export const chaiWScreen = { width: "100vw" };
export const chaiWMin = { width: "min-content" };
export const chaiWMax = { width: "max-content" };
export const chaiWFit = { width: "fit-content" };

export const chaiHFull = { height: "100%" };
export const chaiHAuto = { height: "auto" };
export const chaiHScreen = { height: "100vh" };
export const chaiHMin = { height: "min-content" };
export const chaiHMax = { height: "max-content" };
export const chaiHFit = { height: "fit-content" };

export const chaiMinHScreen = { minHeight: "100vh" };
export const chaiMinWFull = { minWidth: "100%" };
export const chaiMaxWFull = { maxWidth: "100%" };
export const chaiMaxWSm = { maxWidth: "640px" };
export const chaiMaxWMd = { maxWidth: "768px" };
export const chaiMaxWLg = { maxWidth: "1024px" };
export const chaiMaxWXl = { maxWidth: "1280px" };
export const chaiMaxWContainer = { maxWidth: chaiTokens.containerMax };

// ─── POSITION ────────────────────────────────────────────────
export const chaiStatic = { position: "static" };
export const chaiRelative = { position: "relative" };
export const chaiAbsolute = { position: "absolute" };
export const chaiFixed = { position: "fixed" };
export const chaiSticky = { position: "sticky" };
export const chaiInset0 = { top: 0, right: 0, bottom: 0, left: 0 };
export const chaiTop0 = { top: 0 };
export const chaiRight0 = { right: 0 };
export const chaiBottom0 = { bottom: 0 };
export const chaiLeft0 = { left: 0 };

// Z-index
export const chaiZ0 = { zIndex: 0 };
export const chaiZ10 = { zIndex: 10 };
export const chaiZ20 = { zIndex: 20 };
export const chaiZ50 = { zIndex: 50 };
export const chaiZAuto = { zIndex: "auto" };

// ─── OVERFLOW ────────────────────────────────────────────────
export const chaiOverflowAuto = { overflow: "auto" };
export const chaiOverflowHidden = { overflow: "hidden" };
export const chaiOverflowVisible = { overflow: "visible" };
export const chaiOverflowScroll = { overflow: "scroll" };
export const chaiOverflowXAuto = { overflowX: "auto" };
export const chaiOverflowYAuto = { overflowY: "auto" };

// ─── BORDERS ─────────────────────────────────────────────────
export const chaiBorder = { border: "1px solid " + chaiTokens.colorGray300 };
export const chaiBorderPrimary = { border: "1px solid " + chaiTokens.colorPrimary };
export const chaiBorderSecondary = { border: "1px solid " + chaiTokens.colorSecondary };
export const chaiBorderDanger = { border: "1px solid " + chaiTokens.colorDanger };
export const chaiBorder2 = { border: "2px solid " + chaiTokens.colorGray300 };
export const chaiBorderT = { borderTop: "1px solid " + chaiTokens.colorGray300 };
export const chaiBorderB = { borderBottom: "1px solid " + chaiTokens.colorGray300 };
export const chaiBorderL = { borderLeft: "1px solid " + chaiTokens.colorGray300 };
export const chaiBorderR = { borderRight: "1px solid " + chaiTokens.colorGray300 };
export const chaiBorderNone = { border: "none" };

// Border radius
export const chaiRoundedSm = { borderRadius: chaiTokens.radiusSm };
export const chaiRounded = { borderRadius: chaiTokens.radiusMd };
export const chaiRoundedLg = { borderRadius: chaiTokens.radiusLg };
export const chaiRoundedXl = { borderRadius: chaiTokens.radiusXl };
export const chaiRoundedFull = { borderRadius: chaiTokens.radiusFull };
export const chaiRoundedNone = { borderRadius: 0 };

// Border top-left/right only
export const chaiRoundedTop = {
  borderTopLeftRadius: chaiTokens.radiusMd,
  borderTopRightRadius: chaiTokens.radiusMd,
};
export const chaiRoundedBottom = {
  borderBottomLeftRadius: chaiTokens.radiusMd,
  borderBottomRightRadius: chaiTokens.radiusMd,
};

// ─── SHADOWS ─────────────────────────────────────────────────
export const chaiShadowSm = { boxShadow: chaiTokens.shadowSm };
export const chaiShadow = { boxShadow: chaiTokens.shadowMd };
export const chaiShadowLg = { boxShadow: chaiTokens.shadowLg };
export const chaiShadowXl = { boxShadow: chaiTokens.shadowXl };
export const chaiShadowNone = { boxShadow: "none" };
export const chaiShadowInner = { boxShadow: "inset 0 2px 4px rgba(0,0,0,0.06)" };
export const chaiShadowPrimary = { boxShadow: "0 4px 14px rgba(254,149,54,0.4)" };
export const chaiShadowSecondary = { boxShadow: "0 4px 14px rgba(79,70,229,0.4)" };

// ─── OPACITY ─────────────────────────────────────────────────
export const chaiOpacity0 = { opacity: 0 };
export const chaiOpacity25 = { opacity: 0.25 };
export const chaiOpacity50 = { opacity: 0.5 };
export const chaiOpacity75 = { opacity: 0.75 };
export const chaiOpacity100 = { opacity: 1 };

// ─── CURSOR ──────────────────────────────────────────────────
export const chaiCursorPointer = { cursor: "pointer" };
export const chaiCursorDefault = { cursor: "default" };
export const chaiCursorNotAllowed = { cursor: "not-allowed" };
export const chaiCursorWait = { cursor: "wait" };
export const chaiCursorText = { cursor: "text" };
export const chaiCursorGrab = { cursor: "grab" };

// ─── POINTER EVENTS ──────────────────────────────────────────
export const chaiPointerNone = { pointerEvents: "none" };
export const chaiPointerAuto = { pointerEvents: "auto" };

// ─── SELECT ──────────────────────────────────────────────────
export const chaiSelectNone = { userSelect: "none" };
export const chaiSelectAll = { userSelect: "all" };
export const chaiSelectText = { userSelect: "text" };

// ─── OBJECT FIT ──────────────────────────────────────────────
export const chaiObjectCover = { objectFit: "cover" };
export const chaiObjectContain = { objectFit: "contain" };
export const chaiObjectFill = { objectFit: "fill" };
export const chaiObjectNone = { objectFit: "none" };
export const chaiObjectCenter = { objectPosition: "center" };
export const chaiObjectTop = { objectPosition: "top" };
export const chaiObjectBottom = { objectPosition: "bottom" };

// ─── TRANSITIONS ─────────────────────────────────────────────
export const chaiTransitionFast = { transition: chaiTokens.transitionFast };
export const chaiTransition = { transition: chaiTokens.transitionNormal };
export const chaiTransitionSlow = { transition: chaiTokens.transitionSlow };
export const chaiTransitionNone = { transition: "none" };

// ─── TRANSFORMS ──────────────────────────────────────────────
export const chaiScaleUp = { transform: "scale(1.05)" };
export const chaiScaleDown = { transform: "scale(0.95)" };
export const chaiRotate45 = { transform: "rotate(45deg)" };
export const chaiRotate90 = { transform: "rotate(90deg)" };
export const chaiRotate180 = { transform: "rotate(180deg)" };

// ─── GRADIENT BACKGROUNDS ────────────────────────────────────
export const chaiGradientPrimary = {
  background: "linear-gradient(135deg, #fe9536 0%, #e07c1e 100%)",
};
export const chaiGradientSecondary = {
  background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
};
export const chaiGradientDark = {
  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
};
export const chaiGradientSuccess = {
  background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
};
export const chaiGradientDanger = {
  background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
};
export const chaiGradientSunset = {
  background: "linear-gradient(135deg, #fe9536 0%, #ef4444 50%, #7c3aed 100%)",
};
export const chaiGradientOcean = {
  background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
};

// ─── LAYOUT UTILITIES ────────────────────────────────────────
export const chaiCenter = { width: "100%", textAlign: "center" };
export const chaiCenterFlex = { display: "flex", justifyContent: "center", alignItems: "center" };
export const chaiContainer = {
  maxWidth: chaiTokens.containerMax,
  margin: "auto",
  padding: "0 16px",
  width: "100%",
};
export const chaiSection = {
  padding: "80px 0",
};
export const chaiDivider = {
  height: "1px",
  backgroundColor: chaiTokens.colorGray200,
  margin: "24px 0",
};

// ─── ASPECT RATIO ────────────────────────────────────────────
export const chaiAspectSquare = { aspectRatio: "1 / 1" };
export const chaiAspectVideo = { aspectRatio: "16 / 9" };
export const chaiAspectWide = { aspectRatio: "21 / 9" };
export const chaiAspectPortrait = { aspectRatio: "3 / 4" };

// ─── COMPONENTS ──────────────────────────────────────────────

// Logo
export const chaiLogo = { width: "100px", height: "auto" };
export const chaiLogoSm = { width: "60px", height: "auto" };
export const chaiLogoLg = { width: "160px", height: "auto" };

// Navbar
export const chaiNav = {
  maxWidth: chaiTokens.containerMax,
  margin: "auto",
  padding: "8px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
export const chaiNavbar = {
  width: "100%",
  position: "sticky",
  top: 0,
  zIndex: 100,
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(17,17,17,0.85)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};
export const chaiMenu = {
  display: "flex",
  gap: "8px",
  alignItems: "center",
  listStyle: "none",
};
export const chaiMenuVertical = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  listStyle: "none",
};
export const chaiNavLink = {
  fontSize: "15px",
  padding: "6px 12px",
  borderRadius: chaiTokens.radiusMd,
  transition: chaiTokens.transitionFast,
  color: chaiTokens.colorGray300,
};
export const chaiNavLinkHover = {
  color: chaiTokens.colorPrimary,
  backgroundColor: "rgba(254,149,54,0.08)",
};

// Buttons
export const chaiBtn = {
  padding: "10px 20px",
  backgroundColor: chaiTokens.colorPrimary,
  color: "#000",
  outline: "none",
  border: "none",
  fontSize: "16px",
  borderRadius: chaiTokens.radiusMd,
  cursor: "pointer",
  transition: chaiTokens.transitionNormal,
  fontWeight: chaiTokens.fontWeightSemibold,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
};
export const chaiBtnHover = { backgroundColor: chaiTokens.colorPrimaryLight, transform: "translateY(-1px)", boxShadow: chaiTokens.shadowMd };
export const chaiBtnSm = { ...chaiBtn, padding: "6px 12px", fontSize: "13px" };
export const chaiBtnLg = { ...chaiBtn, padding: "14px 28px", fontSize: "18px" };
export const chaiBtnSecondary = { ...chaiBtn, backgroundColor: chaiTokens.colorSecondary, color: "#fff" };
export const chaiBtnSecondaryHover = { backgroundColor: chaiTokens.colorSecondaryLight };
export const chaiBtnSuccess = { ...chaiBtn, backgroundColor: chaiTokens.colorSuccess, color: "#fff" };
export const chaiBtnDanger = { ...chaiBtn, backgroundColor: chaiTokens.colorDanger, color: "#fff" };
export const chaiBtnWarning = { ...chaiBtn, backgroundColor: chaiTokens.colorWarning, color: "#000" };
export const chaiBtnInfo = { ...chaiBtn, backgroundColor: chaiTokens.colorInfo, color: "#fff" };
export const chaiBtnOutline = {
  ...chaiBtn,
  backgroundColor: "transparent",
  color: chaiTokens.colorPrimary,
  border: "2px solid " + chaiTokens.colorPrimary,
};
export const chaiBtnOutlineHover = { backgroundColor: chaiTokens.colorPrimary, color: "#000" };
export const chaiBtnGhost = {
  ...chaiBtn,
  backgroundColor: "transparent",
  color: chaiTokens.colorPrimary,
  border: "none",
};
export const chaiBtnGhostHover = { backgroundColor: "rgba(254,149,54,0.1)" };
export const chaiBtnRounded = { ...chaiBtn, borderRadius: chaiTokens.radiusFull };
export const chaiBtnIcon = {
  padding: "10px",
  backgroundColor: chaiTokens.colorPrimary,
  color: "#000",
  border: "none",
  borderRadius: chaiTokens.radiusMd,
  cursor: "pointer",
  transition: chaiTokens.transitionFast,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};
export const chaiBtnLoading = { opacity: 0.7, cursor: "not-allowed", pointerEvents: "none" };
export const chaiBtnDisabled = { opacity: 0.5, cursor: "not-allowed", pointerEvents: "none" };

// ─── CARDS ───────────────────────────────────────────────────
export const chaiCard = {
  padding: "24px",
  borderRadius: chaiTokens.radiusLg,
  backgroundColor: chaiTokens.colorGray800,
  border: "1px solid " + chaiTokens.colorGray700,
  boxShadow: chaiTokens.shadowMd,
};
export const chaiCardHover = { transform: "translateY(-4px)", boxShadow: chaiTokens.shadowXl };
export const chaiCardLight = {
  padding: "24px",
  borderRadius: chaiTokens.radiusLg,
  backgroundColor: chaiTokens.colorWhite,
  border: "1px solid " + chaiTokens.colorGray200,
  boxShadow: chaiTokens.shadowMd,
};
export const chaiCardHeader = {
  paddingBottom: "16px",
  borderBottom: "1px solid " + chaiTokens.colorGray700,
  marginBottom: "16px",
};
export const chaiCardFooter = {
  paddingTop: "16px",
  borderTop: "1px solid " + chaiTokens.colorGray700,
  marginTop: "16px",
};
export const chaiCardImage = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: chaiTokens.radiusMd + " " + chaiTokens.radiusMd + " 0 0",
};

// ─── BADGES ──────────────────────────────────────────────────
export const chaiBadge = {
  display: "inline-flex",
  alignItems: "center",
  padding: "2px 10px",
  borderRadius: chaiTokens.radiusFull,
  fontSize: "12px",
  fontWeight: chaiTokens.fontWeightSemibold,
  backgroundColor: chaiTokens.colorPrimary,
  color: "#000",
};
export const chaiBadgeSecondary = { ...chaiBadge, backgroundColor: chaiTokens.colorSecondary, color: "#fff" };
export const chaiBadgeSuccess = { ...chaiBadge, backgroundColor: chaiTokens.colorSuccess, color: "#fff" };
export const chaiBadgeDanger = { ...chaiBadge, backgroundColor: chaiTokens.colorDanger, color: "#fff" };
export const chaiBadgeWarning = { ...chaiBadge, backgroundColor: chaiTokens.colorWarning, color: "#000" };
export const chaiBadgeInfo = { ...chaiBadge, backgroundColor: chaiTokens.colorInfo, color: "#fff" };
export const chaiBadgeOutline = {
  ...chaiBadge,
  backgroundColor: "transparent",
  border: "1px solid " + chaiTokens.colorPrimary,
  color: chaiTokens.colorPrimary,
};

// ─── ALERTS / BANNERS ────────────────────────────────────────
export const chaiAlert = {
  padding: "16px",
  borderRadius: chaiTokens.radiusMd,
  border: "1px solid",
  borderColor: chaiTokens.colorGray300,
  backgroundColor: chaiTokens.colorGray100,
  color: chaiTokens.colorGray800,
};
export const chaiAlertSuccess = { ...chaiAlert, borderColor: "#16a34a", backgroundColor: "#f0fdf4", color: "#15803d" };
export const chaiAlertDanger = { ...chaiAlert, borderColor: "#dc2626", backgroundColor: "#fef2f2", color: "#b91c1c" };
export const chaiAlertWarning = { ...chaiAlert, borderColor: "#d97706", backgroundColor: "#fffbeb", color: "#92400e" };
export const chaiAlertInfo = { ...chaiAlert, borderColor: "#2563eb", backgroundColor: "#eff6ff", color: "#1d4ed8" };
export const chaiAlertPrimary = { ...chaiAlert, borderColor: chaiTokens.colorPrimary, backgroundColor: "#fff7ed", color: "#92400e" };

// ─── FORMS & INPUTS ──────────────────────────────────────────
export const chaiInput = {
  padding: "10px 14px",
  backgroundColor: chaiTokens.colorGray800,
  border: "1px solid " + chaiTokens.colorGray600,
  outline: "none",
  width: "100%",
  borderRadius: chaiTokens.radiusMd,
  fontSize: "15px",
  color: chaiTokens.colorWhite,
  transition: chaiTokens.transitionFast,
};
export const chaiInputFocus = { borderColor: chaiTokens.colorPrimary, boxShadow: "0 0 0 3px rgba(254,149,54,0.2)" };
export const chaiInputError = { borderColor: chaiTokens.colorDanger, boxShadow: "0 0 0 3px rgba(239,68,68,0.2)" };
export const chaiInputSuccess = { borderColor: chaiTokens.colorSuccess };
export const chaiInputLight = {
  ...chaiInput,
  backgroundColor: chaiTokens.colorWhite,
  border: "1px solid " + chaiTokens.colorGray300,
  color: chaiTokens.colorBlack,
};
export const chaiInputSm = { ...chaiInput, padding: "6px 10px", fontSize: "13px" };
export const chaiInputLg = { ...chaiInput, padding: "14px 18px", fontSize: "18px" };
export const chaiLabel = {
  display: "block",
  fontSize: "14px",
  fontWeight: chaiTokens.fontWeightMedium,
  marginBottom: "6px",
  color: chaiTokens.colorGray300,
};
export const chaiSelect = { ...chaiInput, cursor: "pointer" };
export const chaiTextarea = { ...chaiInput, resize: "vertical", minHeight: "100px" };
export const chaiFormGroup = { display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" };
export const chaiCheckbox = {
  width: "18px",
  height: "18px",
  accentColor: chaiTokens.colorPrimary,
  cursor: "pointer",
};
export const chaiRadio = { ...chaiCheckbox };

// ─── IMAGES & MEDIA ──────────────────────────────────────────
export const chaiImg = { width: "200px", objectFit: "cover" };
export const chaiImgFull = { width: "100%", height: "auto" };
export const chaiImgCover = { width: "100%", height: "100%", objectFit: "cover" };
export const chaiImgContain = { width: "100%", height: "100%", objectFit: "contain" };
export const chaiAvatar = {
  width: "40px",
  height: "40px",
  borderRadius: chaiTokens.radiusFull,
  objectFit: "cover",
  border: "2px solid " + chaiTokens.colorPrimary,
};
export const chaiAvatarSm = { ...chaiAvatar, width: "28px", height: "28px" };
export const chaiAvatarMd = { ...chaiAvatar, width: "56px", height: "56px" };
export const chaiAvatarLg = { ...chaiAvatar, width: "80px", height: "80px" };
export const chaiAvatarXl = { ...chaiAvatar, width: "120px", height: "120px" };

// ─── BOX ─────────────────────────────────────────────────────
export const chaiBox = {
  padding: "20px",
  border: "1px solid " + chaiTokens.colorPrimary,
  fontSize: "16px",
  borderRadius: chaiTokens.radiusMd,
};
export const chaiBoxSm = { padding: "12px", border: "1px solid " + chaiTokens.colorGray300, borderRadius: chaiTokens.radiusSm };
export const chaiBoxLg = { padding: "40px", border: "1px solid " + chaiTokens.colorGray700, borderRadius: chaiTokens.radiusLg };
export const chaiBoxGlass = {
  padding: "24px",
  backgroundColor: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: chaiTokens.radiusLg,
};

// ─── HERO ────────────────────────────────────────────────────
export const chaiHero = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 16px",
};
export const chaiHeroContent = {
  maxWidth: "720px",
  margin: "auto",
  textAlign: "center",
};

// ─── MODAL & OVERLAY ─────────────────────────────────────────
export const chaiOverlay = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  backdropFilter: "blur(4px)",
};
export const chaiModal = {
  backgroundColor: chaiTokens.colorGray800,
  borderRadius: chaiTokens.radiusXl,
  padding: "32px",
  maxWidth: "520px",
  width: "90%",
  boxShadow: chaiTokens.shadowXl,
  border: "1px solid " + chaiTokens.colorGray700,
};
export const chaiModalHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};
export const chaiModalFooter = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
  marginTop: "24px",
};

// ─── TOOLTIPS ────────────────────────────────────────────────
export const chaiTooltip = {
  position: "relative",
  display: "inline-block",
};

// ─── TABLES ──────────────────────────────────────────────────
export const chaiTable = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
};
export const chaiTh = {
  padding: "12px 16px",
  textAlign: "left",
  fontWeight: chaiTokens.fontWeightSemibold,
  backgroundColor: chaiTokens.colorGray800,
  borderBottom: "2px solid " + chaiTokens.colorGray700,
  color: chaiTokens.colorGray300,
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};
export const chaiTd = {
  padding: "12px 16px",
  borderBottom: "1px solid " + chaiTokens.colorGray700,
  color: chaiTokens.colorGray100,
};
export const chaiTr = { transition: chaiTokens.transitionFast };
export const chaiTrHover = { backgroundColor: chaiTokens.colorGray700 };
export const chaiTableWrapper = { overflowX: "auto", borderRadius: chaiTokens.radiusLg, border: "1px solid " + chaiTokens.colorGray700 };

// ─── TABS ────────────────────────────────────────────────────
export const chaiTabs = {
  display: "flex",
  gap: "4px",
  borderBottom: "2px solid " + chaiTokens.colorGray700,
};
export const chaiTab = {
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: chaiTokens.fontWeightMedium,
  color: chaiTokens.colorGray400,
  border: "none",
  backgroundColor: "transparent",
  transition: chaiTokens.transitionFast,
  borderBottom: "2px solid transparent",
  marginBottom: "-2px",
};
export const chaiTabActive = {
  color: chaiTokens.colorPrimary,
  borderBottomColor: chaiTokens.colorPrimary,
};
export const chaiTabHover = { color: chaiTokens.colorGray200 };

// ─── BREADCRUMBS ─────────────────────────────────────────────
export const chaiBreadcrumb = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  color: chaiTokens.colorGray400,
};

// ─── PAGINATION ──────────────────────────────────────────────
export const chaiPagination = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  listStyle: "none",
};
export const chaiPageItem = {
  padding: "8px 12px",
  borderRadius: chaiTokens.radiusMd,
  cursor: "pointer",
  fontSize: "14px",
  transition: chaiTokens.transitionFast,
  border: "1px solid " + chaiTokens.colorGray700,
  color: chaiTokens.colorGray300,
};
export const chaiPageItemActive = {
  backgroundColor: chaiTokens.colorPrimary,
  color: "#000",
  borderColor: chaiTokens.colorPrimary,
};
export const chaiPageItemHover = { backgroundColor: chaiTokens.colorGray700 };

// ─── PROGRESS BAR ────────────────────────────────────────────
export const chaiProgressTrack = {
  width: "100%",
  height: "8px",
  backgroundColor: chaiTokens.colorGray700,
  borderRadius: chaiTokens.radiusFull,
  overflow: "hidden",
};
export const chaiProgressBar = {
  height: "100%",
  backgroundColor: chaiTokens.colorPrimary,
  borderRadius: chaiTokens.radiusFull,
  transition: "width 0.4s ease",
};
export const chaiProgressBarSuccess = { ...chaiProgressBar, backgroundColor: chaiTokens.colorSuccess };
export const chaiProgressBarDanger = { ...chaiProgressBar, backgroundColor: chaiTokens.colorDanger };

// ─── SPINNER / LOADER ────────────────────────────────────────
export const chaiSpinnerCSS = `
  @keyframes chai-spin { to { transform: rotate(360deg); } }
  .chai-spinner {
    width: 24px; height: 24px;
    border: 3px solid rgba(254,149,54,0.2);
    border-top-color: #fe9536;
    border-radius: 50%;
    animation: chai-spin 0.7s linear infinite;
    display: inline-block;
  }
  .chai-spinner-sm { width: 16px; height: 16px; border-width: 2px; }
  .chai-spinner-lg { width: 40px; height: 40px; border-width: 4px; }
`;

// ─── SKELETON / SHIMMER ──────────────────────────────────────
export const chaiSkeletonCSS = `
  @keyframes chai-shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .chai-skeleton {
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: chai-shimmer 1.5s infinite;
    border-radius: 4px;
  }
`;

// ─── TOOLTIP CSS ─────────────────────────────────────────────
export const chaiTooltipCSS = `
  [data-chai-tooltip] { position: relative; }
  [data-chai-tooltip]::after {
    content: attr(data-chai-tooltip);
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: #1a1a2e;
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    border: 1px solid rgba(255,255,255,0.1);
    z-index: 9999;
  }
  [data-chai-tooltip]:hover::after { opacity: 1; }
`;

// ─── SCROLLBAR ───────────────────────────────────────────────
export const chaiScrollbarCSS = `
  .chai-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
  .chai-scrollbar::-webkit-scrollbar-track { background: #1f2937; border-radius: 999px; }
  .chai-scrollbar::-webkit-scrollbar-thumb { background: #fe9536; border-radius: 999px; }
  .chai-scrollbar::-webkit-scrollbar-thumb:hover { background: #ffa95a; }
`;

// ─── HOVER EFFECTS (CSS) ─────────────────────────────────────
export const chaiHoverCSS = `
  .chai-hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
  .chai-hover-lift:hover { transform: translateY(-4px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
  .chai-hover-glow:hover { box-shadow: 0 0 20px rgba(254,149,54,0.5); }
  .chai-hover-scale:hover { transform: scale(1.05); }
  .chai-hover-dim:hover { opacity: 0.7; }
  .chai-hover-bright:hover { filter: brightness(1.15); }
`;

// ─── FOCUS RING ──────────────────────────────────────────────
export const chaiFocusCSS = `
  .chai-focus-ring:focus {
    outline: 2px solid #fe9536;
    outline-offset: 2px;
  }
`;

// ─── RESPONSIVE GRID CSS ─────────────────────────────────────
export const chaiResponsiveCSS = `
  @media (max-width: 640px) {
    .chai-sm-col { flex-direction: column; }
    .chai-sm-hidden { display: none; }
    .chai-sm-full { width: 100% !important; }
    .chai-sm-grid-1 { grid-template-columns: 1fr !important; }
    .chai-sm-text-center { text-align: center !important; }
  }
  @media (max-width: 768px) {
    .chai-md-col { flex-direction: column; }
    .chai-md-hidden { display: none; }
    .chai-md-full { width: 100% !important; }
    .chai-md-grid-1 { grid-template-columns: 1fr !important; }
    .chai-md-grid-2 { grid-template-columns: repeat(2, 1fr) !important; }
  }
  @media (max-width: 1024px) {
    .chai-lg-hidden { display: none; }
    .chai-lg-grid-2 { grid-template-columns: repeat(2, 1fr) !important; }
  }
`;

// ─── ANIMATION CSS ───────────────────────────────────────────
export const chaiAnimationCSS = `
  @keyframes chai-fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes chai-fade-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes chai-fade-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes chai-slide-left { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes chai-slide-right { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes chai-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  @keyframes chai-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  @keyframes chai-ping { 0% { transform: scale(1); opacity: 1; } 75%, 100% { transform: scale(2); opacity: 0; } }
  @keyframes chai-wiggle { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-5deg); } 75% { transform: rotate(5deg); } }

  .chai-animate-fade-in { animation: chai-fade-in 0.5s ease forwards; }
  .chai-animate-fade-up { animation: chai-fade-up 0.6s ease forwards; }
  .chai-animate-fade-down { animation: chai-fade-down 0.6s ease forwards; }
  .chai-animate-slide-left { animation: chai-slide-left 0.5s ease forwards; }
  .chai-animate-slide-right { animation: chai-slide-right 0.5s ease forwards; }
  .chai-animate-bounce { animation: chai-bounce 1s ease infinite; }
  .chai-animate-pulse { animation: chai-pulse 2s ease-in-out infinite; }
  .chai-animate-ping { animation: chai-ping 1.5s ease-out infinite; }
  .chai-animate-wiggle { animation: chai-wiggle 0.5s ease-in-out; }

  .chai-delay-100 { animation-delay: 0.1s; }
  .chai-delay-200 { animation-delay: 0.2s; }
  .chai-delay-300 { animation-delay: 0.3s; }
  .chai-delay-500 { animation-delay: 0.5s; }
`;

// ─── DIVIDER STYLES ──────────────────────────────────────────
export const chaiDividerH = { height: "1px", width: "100%", backgroundColor: chaiTokens.colorGray700, margin: "24px 0" };
export const chaiDividerV = { width: "1px", alignSelf: "stretch", backgroundColor: chaiTokens.colorGray700, margin: "0 16px" };

// ─── CHIP ────────────────────────────────────────────────────
export const chaiChip = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "4px 12px",
  borderRadius: chaiTokens.radiusFull,
  fontSize: "13px",
  fontWeight: chaiTokens.fontWeightMedium,
  backgroundColor: chaiTokens.colorGray700,
  color: chaiTokens.colorGray200,
  border: "1px solid " + chaiTokens.colorGray600,
};
export const chaiChipPrimary = { ...chaiChip, backgroundColor: "rgba(254,149,54,0.15)", color: chaiTokens.colorPrimary, borderColor: "rgba(254,149,54,0.3)" };

// ─── SIDEBAR ─────────────────────────────────────────────────
export const chaiSidebar = {
  width: "260px",
  minHeight: "100vh",
  backgroundColor: chaiTokens.colorGray800,
  borderRight: "1px solid " + chaiTokens.colorGray700,
  display: "flex",
  flexDirection: "column",
  padding: "16px",
};
export const chaiSidebarItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px 12px",
  borderRadius: chaiTokens.radiusMd,
  cursor: "pointer",
  fontSize: "14px",
  color: chaiTokens.colorGray300,
  transition: chaiTokens.transitionFast,
};
export const chaiSidebarItemActive = { backgroundColor: "rgba(254,149,54,0.1)", color: chaiTokens.colorPrimary };

// ─── FOOTER ──────────────────────────────────────────────────
export const chaiFooter = {
  backgroundColor: chaiTokens.colorGray900,
  borderTop: "1px solid " + chaiTokens.colorGray700,
  padding: "48px 16px 24px",
};
