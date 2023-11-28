import { HomePageComponent } from "../../../types/router.types";
import { StyledAbout } from "./style";

const About: HomePageComponent = () => {
  return (
    <StyledAbout id='about-me top'>
      <div id='photo'>
        <div id='image'>
          <img src='https://avatars.githubusercontent.com/u/79119700?v=4' alt='Photo of Jezreel' />
        </div>
        <h3>Jezreel de Andrade</h3>
      </div>
      <div className='me'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, architecto recusandae! Voluptatem, labore suscipit sequi repudiandae beatae corporis
        facilis aperiam accusantium unde distinctio, blanditiis eveniet sapiente aliquid totam? Odit dicta sit esse! Corporis vel facere quas quod cupiditate
        aspernatur sed facilis doloribus maxime tempora. Cupiditate dolorum voluptates incidunt natus laboriosam?
      </div>
    </StyledAbout>
  );
};

export default About;
