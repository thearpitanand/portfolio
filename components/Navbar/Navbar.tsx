import navbarStyles from "../../styles/components/Navbar.module.css";
import NavbarDesktopLinks from "./NavbarDesktopLinks";
import NavbarMobileLinks from "./NavbarMobileLinks";

const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <h1 className={navbarStyles.main_logo}>thearpitanand</h1>
      <NavbarMobileLinks />
      <NavbarDesktopLinks />
    </nav>
  );
};

export default Navbar;
