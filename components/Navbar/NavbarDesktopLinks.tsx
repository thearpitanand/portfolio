// CSS
import navbarStyles from "../../styles/components/Navbar.module.css";

// Components
import NavBarLinks from "./NavBarLinks";

const NavbarDesktopLinks = () => {
  return (
    <div className={navbarStyles.DesktopNavbarLinks}>
      <NavBarLinks />
    </div>
  );
};

export default NavbarDesktopLinks;
