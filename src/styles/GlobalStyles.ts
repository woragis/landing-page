import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    font-family: "Roboto", sans-serif;
    text-decoration: none;
    color: ${props => props.theme.body.text};
  }
`;
