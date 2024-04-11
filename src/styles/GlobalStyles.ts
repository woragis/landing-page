import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style-type: none;
    color: ${props => props.theme.body.text};
    color: black;
    background-color: black;
    color: white;
    text-decoration: none;
  }
`;
