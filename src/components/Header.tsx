import React, { FunctionComponent } from "react";
import Navbar from "./navigation/Navbar";
import NavItem from "./navigation/NavItem";

const Header: FunctionComponent = () => {
  return (
    <Navbar leftElement={<img className="w-40" src="../images/logo_brille24.svg" />}>
      <NavItem title="Brillen" />
      <NavItem title="Sonnenbrillen" />
      <NavItem title="Entdecken" />
    </Navbar>
  );
}

export default Header;