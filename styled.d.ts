import "styled-components";
import { ColorScheme } from "./theme/types";

declare module "styled-components" {
  export interface DefaultTheme extends ColorScheme {}
}
