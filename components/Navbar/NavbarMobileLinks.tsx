import React, { useState } from "react";
import NavBarLinks from "./NavBarLinks";
import { AiOutlineMenu } from "react-icons/ai";
import navbarStyles from "../../styles/components/Navbar.module.css";

const NavbarMobileLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={navbarStyles.MobileNavbarLinks}>
      <span>
        <AiOutlineMenu size="2rem" onClick={() => setOpen(!open)} />
      </span>
      {open && <NavBarLinks />}
    </div>
  );
};

export default NavbarMobileLinks;
