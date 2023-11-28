import styled from "styled-components";

export const StyledAbout = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .me {
    width: 500px;
    /* position: absolute; */
    display: block;
    margin-left: 0px;

    font-family: "Roboto Condensed", sans-serif;
    font-weight: 100;
    font-size: 2rem;
  }
`;
