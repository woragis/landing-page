import { FC } from "react";

export interface Pages {
  title: string;
  path: string;
  element: FC | any;
}

export interface HomePageComponent {
  (): JSX.Element;
}
