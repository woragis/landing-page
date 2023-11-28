import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nova+Square&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nova Square', sans-serif;
    list-style-type: none;
    color: ${props => props.theme.body.text};
    text-decoration: none;
  }
`;
