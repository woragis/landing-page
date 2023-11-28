import { HomePageComponent } from "../../types/router.types";
import { HomeBody } from "./style";
import Header from "../../components/Header";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

const Home: HomePageComponent = () => {
  return (
    <HomeBody>
      {/* <Header /> */}
      <h1>Home</h1>
      <About />
      {/*<Projects />
      <Footer /> */}
    </HomeBody>
  );
};

export default Home;
