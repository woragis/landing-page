import { HomePageComponent } from "../../../types/router.types";
import { StyledFooter } from "./style";

import { useState } from "react";

const Footer: HomePageComponent = () => {
  interface buttonGoTop {
    display: string;
  }
  const [goTop, setGoTop] = useState<buttonGoTop>({ display: "none" });

  // make js detect if I am far from the top

  return (
    <StyledFooter>
      Jezreel de Andrade - 2023&copy;
      <button id='footer-go-top' style={goTop}>
        <a href='#top'>up arrow icon</a>
      </button>
    </StyledFooter>
  );
};

export default Footer;
