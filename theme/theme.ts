import colorScheme from "./palette";
import { DEFAULT_THEME } from "../constants";

const getTheme = (mode: keyof typeof colorScheme = DEFAULT_THEME) => {
  return colorScheme[mode] || colorScheme[DEFAULT_THEME];
};

export default getTheme;
