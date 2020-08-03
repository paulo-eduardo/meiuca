const getStyle = (props) => {
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
      return { borderRadius: "8px" };
    case "Pill":
      return { borderRadius: "500px" };
    case "Circular":
      return { borderRadius: "50%" };
    case "None":
    default:
      return { borderRadius: "0px" };
  }
};

const getBorderWidth = (props) => {
  switch (props.borderWidth) {
    case "Thin":
      return { borderWidth: "1px" };
    case "Thick":
      return { borderWidth: "2px" };
    case "Thicker":
      return { borderWidth: "4px" };
    case "None":
    default:
      return { borderWidth: "0px" };
  }
};

const getOpacityLevel = (props) => {
  switch (props.opacityLevel) {
    case "SemiOpaque":
      return { opacity: "0.8" };
    case "Intense":
      return { opacity: "0.64" };
    case "Medium":
      return { opacity: "0.32" };
    case "Light":
      return { opacity: "0.16" };
    case "SemiTransparent":
      return { opacity: "0.08" };
    case "None":
    default:
      return;
  }
};

const getShadowLevel = (props) => {
  switch (props.shadowLevel) {
    case "1":
      return { boxShadow: `0px 4px 16px` };
    case "2":
      return { boxShadow: `0px 8px 24px` };
    case "3":
      return { boxShadow: `0px 16px 32px` };
    case "4":
      return { boxShadow: `0px 16px 48px` };
    default:
      return;
  }
};

const getPrimarySecondaryColor = (intense) => {
  switch (intense) {
    case "Lightest":
      return "#EEEEEE";
    case "Light":
      return "#CDCDCD";
    case "Medium":
    case "Dark":
    case "Darkest":
    default:
      return "#000000";
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
      return "#FFD9BF";
    case "Light":
      return "#FFA160";
    case "Medium":
      return "#FF6D00";
    case "Dark":
      return "#EO5800";
    case "Darkest":
      return "#C24300";
    default:
      break;
  }
};

const getSuccessColor = (intense) => {
  switch (intense) {
    case "Lightest":
      return "#BFFFD2";
    case "Light":
      return "#60F391";
    case "Medium":
      return "#00C853";
    case "Dark":
      return "#00B048";
    case "Darkest":
      return "#00983D";
    default:
      break;
  }
};

const getNeutralColor = (intense) => {
  switch (intense) {
    case "Lightest":
      return "#FFFFFF";
    case "Light":
      return "#F0F2F7";
    case "Medium":
      return "#D4D7DD";
    case "Dark":
      return "#60646C";
    case "Darkest":
      return "black";
    default:
      break;
  }
};

const getFontFamily = (props) => {
  switch (props.fontFamily) {
    case "Highlight":
      return { fontFamily: "Archivo" };
    case "Base":
    default:
      return { fontFamily: "Capitolina" };
  }
};

const getFontWeight = (props) => {
  switch (props.fontWeight) {
    case "Bold":
      return { fontWeight: 700 };
    case "Medium":
      return { fontWeight: 500 };
    case "Regular":
    default:
      return { fontWeight: 300 };
  }
};

const getFontSize = (props) => {
  switch (props.fontSize) {
    case "XS":
      return { fontSize: "12px" };
    case "SM":
      return { fontSize: "16px" };
    case "MD":
      return { fontSize: "24px" };
    case "LG":
      return { fontSize: "32px" };
    case "XL":
      return { fontSize: "48px" };
    case "XXL":
      return { fontSize: "64px" };
    case "XXXL":
      return { fontSize: "80px" };
    default:
      return;
  }
};

const getSpacingStack = (props) => {
  switch (props.spacingStack) {
    case "XXXS":
      return { marginTop: "4px" };
    case "XXS":
      return { marginTop: "8px" };
    case "XS":
      return { marginTop: "16px" };
    case "SM":
      return { marginTop: "24px" };
    case "MD":
      return { marginTop: "32px" };
    case "LG":
      return { marginTop: "48px" };
    case "XL":
      return { marginTop: "72px" };
    case "XXL":
      return { marginTop: "120px" };
    case "XXXL":
      return { marginTop: "160px" };
    default:
      return;
  }
};

const getSpacingInline = (props) => {
  switch (props.spacingInline) {
    case "XXXS":
      return { marginLeft: "4px" };
    case "XXS":
      return { marginLeft: "8px" };
    case "XS":
      return { marginLeft: "16px" };
    case "SM":
      return { marginLeft: "24px" };
    case "MD":
      return { marginLeft: "32px" };
    case "LG":
      return { marginLeft: "48px" };
    case "XL":
      return { marginLeft: "72px" };
    default:
      return;
  }
};

const getSpacingInset = (props) => {
  switch (props.SpacingInset) {
    case "XXS":
      return { margin: "4px" };
    case "XS":
      return { margin: "8px" };
    case "SM":
      return { margin: "16px" };
    case "MD":
      return { margin: "24px" };
    case "LG":
      return { margin: "32px" };
    case "XL":
      return { margin: "48px" };
    default:
      return;
  }
};

const getSpacingSquish = (props) => {
  switch (props.spacingSquish) {
    case "XS":
      return { margin: "4px 8px" };
    case "SM":
      return { margin: "8px 16px" };
    case "MD":
      return { margin: "16px 24px" };
    case "LG":
      return { margin: "16px 32px" };
    case "XL":
      return { margin: "32px 48px" };
    default:
      return;
  }
};
