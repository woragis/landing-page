import { HomePageComponent } from "../../../types/router.types";
import { StyledProjects } from "./style";

const Projects: HomePageComponent = () => {
  let imgS =
    "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D";
  return (
    <StyledProjects id='projects'>
      <div id='title-container'>
        <h1 className='title'>Projects</h1>
      </div>
      <section className='projects'>
        <div className='project'>One</div>
        <div className='project'>Two</div>
        <div className='project'>Three</div>
        <div className='project'>Four</div>
        <div className='project'>Five</div>
        <div className='project'>Six</div>
      </section>
    </StyledProjects>
  );
};

export default Projects;
