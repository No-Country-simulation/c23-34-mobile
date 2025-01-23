/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const ColorsBase = {
  blue100: "#CCE0F3",
  cyan200: "#99DBD6",
  cyan400: "#33B7AD",
  cyan500: "#00A599",
  neutral400: "#bfbfbf",
  neutral500: "#999999",
  neutral600: "#777777"
}

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    hrefLink: ColorsBase.cyan500,
    error: "red"
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    hrefLink: ColorsBase.cyan500,
    error: "red"
  },
};
