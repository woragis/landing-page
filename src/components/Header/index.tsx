import { HomePageComponent } from "../../../types/router.types";
import { StyledHeader, StyledHeaderNav } from "./style";

const Header: HomePageComponent = () => {
  const headerLinks = [
    { name: "about me", link: "top" },
    { name: "projects", link: "projects" },
    { name: "contact", link: "contact" },
  ];
  const headerNav = headerLinks.map(({ name, link }) => {
    return (
      <li key={name}>
        <a href={"#" + link}>{name}</a>
      </li>
    );
  });
  let logoSrc = "src/assets/jezreel-logo-light.png";
  logoSrc = "/home/woragis/.dvlpmnt/web/frontend/landing-page/src/assets/jezreel-logo-light.png";

  // logoSrc = path.join(__dirname + "../../../assets/jezreel-logo-light.png");
  return (
    <StyledHeader>
      <div className='brand'>
        <img className='logo' src={logoSrc} alt='jezreel logo' />
        <div className='name'>Jezreel de Andrade</div>
      </div>
      <StyledHeaderNav>
        <ul>{headerNav}</ul>
      </StyledHeaderNav>
    </StyledHeader>
  );
};

export default Header;
