import { HomePageComponent } from "../../types/router.types";
import { StyledHome } from "./style";
import Header from "../../components/Header";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

const Home: HomePageComponent = () => {
  return (
    <StyledHome>
      <Header />
      <h1>Home</h1>
      {/*<Projects />
      <Footer /> */}
    </StyledHome>
  );
};

export default Home;
// <About />
