import styled from "styled-components";

export const StyledAbout = styled.section`
  position: relative;
  display: flex;
  height: 400px;
  width: 100%;
  padding: 20px 40px;
  justify-content: space-around;
  align-items: center;

  #photo {
    height: 300px;
    width: 300px;
    border-radius: 50%;
    background: url(${(props) => props.theme.photos.me}) no-repeat center;
    background-size: cover;
    margin-left: auto;
    margin-right: 50px;
  }
  #me {
    margin-right: auto;
    padding: 30px;
    & > * {
      padding: 20px;
    }
  }
`;

export const FrontendStack = styled.article`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
  h2 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -60%);
    display: block;
    border-top: 3px dotted ${(props) => props.theme.text.main};
    border-bottom: 3px dotted ${(props) => props.theme.text.main};
    width: 200px;
    text-align: center;
    font-size: 1.5em;
  }
  .stack {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 2px;
    flex-flow: column;
    font-size: 1.1em;
    p {
      margin: 1px;
    }
  }
`;

export const BackendStack = styled.article`
  display: flex;
  margin-top: 20px;
  position: relative;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 1.5em;
    border-top: 3px dotted ${(props) => props.theme.text.main};
    border-bottom: 3px dotted ${(props) => props.theme.text.main};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -60%);
  }
  .stack {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    flex-flow: column;
    font-size: 1.1em;
    p {
      margin: 1px;
    }
  }
`;
