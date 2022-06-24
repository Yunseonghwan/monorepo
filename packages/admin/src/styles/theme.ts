import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { primary: string; black: string; red: string };
    fonts: {};
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "white",
    black: "#000",
    red: "red",
  },
  fonts: {},
};

export { theme };
