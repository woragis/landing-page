import React from "react";
export interface Pages {
  title: string;
  path: string;
  element: React.FC | any;
}

export interface HomePageComponent {
  (): JSX.Element;
}
