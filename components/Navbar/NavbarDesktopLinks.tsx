import React, { useState } from "react";
import NavBarLinks from "./NavBarLinks";
import { AiOutlineMenu } from "react-icons/ai";
import navbarStyles from "../../styles/components/Navbar.module.css";

const NavbarDesktopLinks = () => {
  return (
    <div className={navbarStyles.DesktopNavbarLinks}>
      <NavBarLinks />
    </div>
  );
};

export default NavbarDesktopLinks;
