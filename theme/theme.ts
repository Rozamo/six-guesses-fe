import colorScheme from "./palette";

const getTheme = (mode: keyof typeof colorScheme = "light") => {
  return colorScheme[mode] || colorScheme["light"];
};

export default getTheme;
