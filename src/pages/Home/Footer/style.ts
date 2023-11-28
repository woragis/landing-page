import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.footer.background};
  color: ${props => props.theme.footer.text};
  height: 80px;
  font-size: 0.8em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  #footer-go-top {
    background-color: ${props => props.theme.text.accent};
    color: ${props => props.theme.header.text};
    position: fixed;
    bottom: 30px;
    right: 30px;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    outline: none;
  }
`;
