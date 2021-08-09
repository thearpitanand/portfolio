// React Hooks
import { useState } from "react";

// Components
import NavBarLinks from "./NavBarLinks";

// CSS and Icons
import navbarStyles from "../../styles/components/Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const NavbarMobileLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={navbarStyles.MobileNavbarLinks}>
      <span>
        <AiOutlineMenu size="2rem" onClick={() => setOpen(!open)} />
      </span>
      {open && <NavBarLinks open={open} setOpen={setOpen} />}
    </div>
  );
};

export default NavbarMobileLinks;
