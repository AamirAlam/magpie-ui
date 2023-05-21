// 1. Import `createTheme`
import { createTheme } from "@nextui-org/react";

// 2. Call `createTheme` and pass your custom values
export const lightTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "#137CE7",
      primaryLightHover: "#137CE7",
      primaryLightActive: "#137CE7",
      primaryLightContrast: "#137CE7",
      primary: "#137CE7",
      primaryBorder: "#137CE7",
      primaryBorderHover: "#137CE7",
      primarySolidHover: "#137CE7",
      primarySolidContrast: "$white",
      primaryShadow: "#137CE7",
      myColor: "#ff4ecd",
      primaryText: "#0B366B",
      secondaryText: "#5F7FC1",
      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
      background: "#ffffff",
      backgroundLight: "#AEC5F4",

      // you can also create your own color

      // ...  more colors
    },
    space: {},
    fonts: {},
    text: {
      primary: "#0B366B",
      light: "#658AAF",
    },
  },
});

export const darkTheme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "#137CE7",
      primaryLightHover: "#137CE7",
      primaryLightActive: "#137CE7",
      primaryLightContrast: "#137CE7",
      primary: "#137CE7",
      primaryBorder: "#137CE7",
      primaryBorderHover: "#137CE7",
      primarySolidHover: "#137CE7",
      primarySolidContrast: "$white",
      primaryShadow: "#137CE7",
      myColor: "#ff4ecd",
      primaryText: "#f7f7f7f",
      secondaryText: "#5F7FC1",
      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
      background: "#0E0E0E",
      backgroundLight: "#535252",

      // you can also create your own color

      // ...  more colors
    },
    space: {},
    fonts: {},
    text: {
      primary: "#0B366B",
      light: "#658AAF",
    },
  },
});
