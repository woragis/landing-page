import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;

  height: 80px;
  width: 100%;

  background-color: ${props => props.theme.header.background};
  color: ${props => props.theme.header.text};
  border: 1px red solid;

  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  .brand {
    display: flex;
    font-size: 1.5em;

    .logo {
      margin-right: 15px;
    }
  }
`;

export const StyledHeaderNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul > li {
      margin-left: 15px;
    }
  }
`;
