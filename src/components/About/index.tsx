import { HomePageComponent } from "../../types/router.types";
import { BackendStack, FrontendStack, StyledAbout } from "./style";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaPhp,
  FaJs,
  FaNodeJs,
} from "react-icons/fa6";
import { SiExpress, SiGraphql, SiRedux } from "react-icons/si";

const About: HomePageComponent = () => {
  return (
    <StyledAbout className="about-me" id="about-me top">
      <div id="photo"></div>
      <div id="me">
        <div id="name">
          <h2>Jezreel de Andrade</h2>
        </div>
        <div id="description-me">
          Autodidata, programador
          <p>
            colocar efeito paralax fazer stack aparecer do lado direito em
            fade-in
          </p>
        </div>
        <FrontendStack className="frontend">
          <h2>Frontend Stack</h2>
          <div className="stack">
            <FaHtml5 />
            <p>HTML5</p>
          </div>
          <div className="stack">
            <FaCss3 />
            <p>CSS3</p>
          </div>
          <div className="stack">
            <FaJs />
            <p>JAVASCRIPT</p>
          </div>
          <div className="stack">
            <FaReact />
            <p>REACT</p>
          </div>
          <div className="stack">
            <SiRedux />
            <p>REDUX</p>
          </div>
          <div className="stack">
            <SiGraphql />
            <p>GRAPHQL</p>
          </div>
        </FrontendStack>
        <BackendStack className="backend">
          <h2>Backend Stack</h2>
          <div className="stack">
            <FaNodeJs />
            <p>NodeJs</p>
          </div>
          <div className="stack">
            <SiExpress />
            <p>Express</p>
          </div>
          <div className="stack">
            <FaPhp />
            <p>PHP</p>
          </div>
          <div className="stack">
            <SiGraphql />
            <p>GraphQl</p>
          </div>
        </BackendStack>
      </div>
    </StyledAbout>
  );
};

export default About;
