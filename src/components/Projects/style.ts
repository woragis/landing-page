import styled from "styled-components";

export const StyledProjects = styled.section`
  background-color: ${props => props.theme.body.background};
  padding: 40px;
  height: 600px;

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  .title-container {
    border: 1px red solid;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 30px;
  }
  .title {
    color: ${props => props.theme.text.accent};
    background-color: ${props => props.theme.text.main};
    font-size: 1.5em;
    position: relative;
    margin: 0 auto;
  }

  .title::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 500px;
    border-radius: 15px;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: ${props => props.theme.text.accent};
    animation-duration: 1000ms;
    animation: title-line;
  }
  @keyframes title-line {
    0% {
      width: 0;
    }
    100% {
      width: 500px;
    }
  }

  .project {
    border: blue 2px solid;
    min-height: 200px;
    min-width: 200px;
  }
`;
