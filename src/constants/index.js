import { Dimensions, StatusBar } from "react-native";
const { width, height } = Dimensions.get("screen");

export const COLORS = {
  // base colors
  primary: "#2098DA",
  primaryLight0: "rgba(32, 152, 218, 0.5)",
  primaryLight: "rgba(32, 152, 218, 0.4)",
  primaryLight2: "rgba(32, 152, 218, 0.2)",
  primaryLight3: "#25abf5",
  primaryDark: "rgba(8, 112, 161, 1)",
  secondary: "#E1E1E1",

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",

  lightGray: "#F5F5F6",
  lightGray2: "rgba(100,100,100,0.4)",
  lightGray3: "rgba(100,100,100,0.2)",
  lightGray4: "#F8F8F9",
  transparent: "transparent",
  darkgray: "rgba(0, 0, 0, 0.54)",

  red: "#ec4646",
  redLight: "rgb(255, 222, 230)",

  blue: "#167c98",
  green: "#00974E",

  yellow: "#f88f01",
  yellowStar1: "rgb(252, 194, 0)",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  buttonRadius: 8,
  buttonPadding: 24,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 18,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 11,

  // app dimensions
  screenWidth: width,
  screenHeight: height,

  statusBarH: StatusBar.currentHeight,
  actionBarH: 60,
  MainHeader: 68,
};

export const FONTS = {
  popLig: {
    fontFamily: "Poppins-Light",
  },
  popReg: {
    fontFamily: "Poppins-Regular",
  },
  popMed: {
    fontFamily: "Poppins-Medium",
  },
  popSemi: {
    fontFamily: "Poppins-SemiBold",
  },
  popSemiI: {
    fontFamily: "Poppins-SemiBoldItalic",
  },

  popBold: {
    fontFamily: "Poppins-Bold",
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
