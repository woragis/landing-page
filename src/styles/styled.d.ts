import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;

      header: {
        background: string;
        primary: string;
        secondary: string;
      };

      main: {
        background: string;
        primary: string;
        secondary: string;
      };

      footer: {
        background: string;
        primary: string;
        secondary: string;
      };
    };

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
