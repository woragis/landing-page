import styled from "styled-components";

export const StyledHome = styled.div`
  font-family: sans-serif;
  height: 800px;
  width: 100%;
  border: red 1px solid;
  text-transform: capitalize;
  position: relative;
  background-color: ${props => props.theme.body.background};
  color: ${props => props.theme.body.text};
`;
