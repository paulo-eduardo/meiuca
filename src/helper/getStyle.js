let globalCss;
const getStyle = (props, css) => {
  globalCss = css;
  return {
    ...getBorderRadius(props),
    ...getBorderWidth(props),
    ...getOpacityLevel(props),
    ...getShadowLevel(props),
    ...getFontFamily(props),
    ...getFontWeight(props),
    ...getFontSize(props),
    ...getSpacingStack(props),
    ...getSpacingInline(props),
    ...getSpacingInset(props),
    ...getSpacingSquish(props),
    color: getColor(props.labelColor, props.labelColorIntense),
    backgroundColor: getColor(props.color, props.colorIntense),
    borderColor: getColor(props.borderColor, props.borderColorIntense),
  };
};

export default getStyle;

const getBorderRadius = (props) => {
  switch (props.borderR) {
    case "Small":
      return { borderRadius: globalCss.borderRadiusSmall };
    case "Pill":
      return { borderRadius: globalCss.borderRadiusPill };
    case "Circular":
      return { borderRadius: globalCss.borderRadiusCircular };
    case "None":
    default:
      return { borderRadius: globalCss.borderRadiusNone };
  }
};

const getBorderWidth = (props) => {
  switch (props.borderWidth) {
    case "Thin":
      return { borderWidth: globalCss.borderWidthThin };
    case "Thick":
      return { borderWidth: globalCss.borderWidthThick };
    case "Thicker":
      return { borderWidth: globalCss.borderWidthThicker };
    case "None":
    default:
      return { borderWidth: globalCss.borderWidthNone };
  }
};

const getOpacityLevel = (props) => {
  switch (props.opacityLevel) {
    case "SemiOpaque":
      return { opacity: globalCss.opacitySemiOpaque };
    case "Intense":
      return { opacity: globalCss.opacityIntense };
    case "Medium":
      return { opacity: globalCss.opacityMedium };
    case "Light":
      return { opacity: globalCss.opacityLight };
    case "SemiTransparent":
      return { opacity: globalCss.opacitySemiTransparent };
    case "None":
    default:
      return;
  }
};

const getShadowLevel = (props) => {
  switch (props.shadowLevel) {
    case "1":
      return {
        boxShadow: `${globalCss.shadowOffsetXNone} ${globalCss.shadowOffsetYLevel1} ${globalCss.shadowBlurRadiusLevel1}`,
      };
    case "2":
      return {
        boxShadow: `${globalCss.shadowOffsetXNone}  ${globalCss.shadowOffsetYLevel2} ${globalCss.shadowBlurRadiusLevel2}`,
      };
    case "3":
      return {
        boxShadow: `${globalCss.shadowOffsetXNone}  ${globalCss.shadowOffsetYLevel3} ${globalCss.shadowBlurRadiusLevel3}`,
      };
    case "4":
      return {
        boxShadow: `${globalCss.shadowOffsetXNone}  ${globalCss.shadowOffsetYLevel4} ${globalCss.shadowBlurRadiusLevel4}`,
      };
    default:
      return;
  }
};

const getPrimarySecondaryColor = (intense) => {
  switch (intense) {
    case "Lightest":
      return globalCss.colorBrandPrimaryLightest;
    case "Light":
      return globalCss.colorBrandPrimaryLight;
    case "Medium":
    case "Dark":
    case "Darkest":
    default:
      return globalCss.colorBrandPrimaryDarkest;
  }
};

const getColor = (color, intense) => {
  switch (color) {
    case "Primary":
    case "Secondary":
      return getPrimarySecondaryColor(intense);
    case "Attention":
      return getAttentionColor(intense);
    case "Success":
      return getSuccessColor(intense);
    case "Neutral":
      return getNeutralColor(intense);
    default:
      return;
  }
};

const getAttentionColor = (intense) => {
  switch (intense) {
    case "Lightest":
      return globalCss.colorAttentionLightest;
    case "Light":
      return globalCss.colorAttentionLight;
    case "Medium":
      return globalCss.colorAttentionMedium;
    case "Dark":
      return globalCss.colorAttentionDark;
    case "Darkest":
      return globalCss.colorAttentionDarkest;
    default:
      break;
  }
};

const getSuccessColor = (intense) => {
  switch (intense) {
    case "Lightest":
      return globalCss.colorSuccessLightest;
    case "Light":
      return globalCss.colorSuccessLight;
    case "Medium":
      return globalCss.colorSuccessMedium;
    case "Dark":
      return globalCss.colorSuccessDark;
    case "Darkest":
      return globalCss.colorSuccessDarkest;
    default:
      break;
  }
};

const getNeutralColor = (intense) => {
  switch (intense) {
    case "Lightest":
      return globalCss.colorNeutralLightest;
    case "Light":
      return globalCss.colorNeutralLight;
    case "Medium":
      return globalCss.colorNeutralMedium;
    case "Dark":
      return globalCss.colorNeutralDark;
    case "Darkest":
      return globalCss.colorNeutralDarkest;
    default:
      break;
  }
};

const getFontFamily = (props) => {
  switch (props.fontFamily) {
    case "Highlight":
      return { fontFamily: globalCss.fontFamilyHighlight };
    case "Base":
    default:
      return { fontFamily: globalCss.fontFamilyBase };
  }
};

const getFontWeight = (props) => {
  switch (props.fontWeight) {
    case "Bold":
      return { fontWeight: globalCss.fontWeightBold };
    case "Medium":
      return { fontWeight: globalCss.fontWeightMedium };
    case "Regular":
    default:
      return { fontWeight: globalCss.fontWeightRegular };
  }
};

const getFontSize = (props) => {
  switch (props.fontSize) {
    case "XS":
      return { fontSize: globalCss.fontSizeXs };
    case "SM":
      return { fontSize: globalCss.fontSizeSm };
    case "MD":
      return { fontSize: globalCss.fontSizeMd };
    case "LG":
      return { fontSize: globalCss.fontSizeLg };
    case "XL":
      return { fontSize: globalCss.fontSizeXl };
    case "XXL":
      return { fontSize: globalCss.fontSizeXxl };
    case "XXXL":
      return { fontSize: globalCss.fontSizeXxxl };
    default:
      return;
  }
};

const getSpacingStack = (props) => {
  switch (props.spacingStack) {
    case "XXXS":
      return { marginTop: globalCss.spacingStackXxxs };
    case "XXS":
      return { marginTop: globalCss.spacingStackXxs };
    case "XS":
      return { marginTop: globalCss.spacingStackXs };
    case "SM":
      return { marginTop: globalCss.spacingStackSm };
    case "MD":
      return { marginTop: globalCss.spacingStackMd };
    case "LG":
      return { marginTop: globalCss.spacingStackLg };
    case "XL":
      return { marginTop: globalCss.spacingStackXl };
    case "XXL":
      return { marginTop: globalCss.spacingStackXxl };
    case "XXXL":
      return { marginTop: globalCss.spacingStackXxxl };
    default:
      return;
  }
};

const getSpacingInline = (props) => {
  switch (props.spacingInline) {
    case "XXXS":
      return { marginLeft: globalCss.spacingInlineXxxs };
    case "XXS":
      return { marginLeft: globalCss.spacingInlineXxs };
    case "XS":
      return { marginLeft: globalCss.spacingInlineXs };
    case "SM":
      return { marginLeft: globalCss.spacingInlineSm };
    case "MD":
      return { marginLeft: globalCss.spacingInlineMd };
    case "LG":
      return { marginLeft: globalCss.spacingInlineLg };
    case "XL":
      return { marginLeft: globalCss.spacingInlineXl };
    default:
      return;
  }
};

const getSpacingInset = (props) => {
  switch (props.SpacingInset) {
    case "XXS":
      return { margin: globalCss.spacingInsetXxs };
    case "XS":
      return { margin: globalCss.spacingInsetXs };
    case "SM":
      return { margin: globalCss.spacingInsetSm };
    case "MD":
      return { margin: globalCss.spacingInsetMd };
    case "LG":
      return { margin: globalCss.spacingInsetLg };
    case "XL":
      return { margin: globalCss.spacingInsetXl };
    default:
      return;
  }
};

const getSpacingSquish = (props) => {
  switch (props.spacingSquish) {
    case "XS":
      return { margin: globalCss.spacingSquishXs };
    case "SM":
      return { margin: globalCss.spacingSquishSm };
    case "MD":
      return { margin: globalCss.spacingSquishMd };
    case "LG":
      return { margin: globalCss.spacingSquishLg };
    case "XL":
      return { margin: globalCss.spacingSquishXl };
    default:
      return;
  }
};
