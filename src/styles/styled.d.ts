import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    header: {
      background: string;
      text: string;
    };
    body: {
      background: string;
      text: string;
    };
    footer: {
      background: string;
      text: string;
    };
    text: {
      main: string;
      accent: string;
    };
  }
}
