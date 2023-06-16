import React, { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import NavItem from "./NavItem";

export type NavbarProps = PropsWithChildren & {
  leftElement?: ReactElement;
}

const Navbar: FunctionComponent<NavbarProps> = ({ leftElement, children }: NavbarProps) => {
  return (
      <nav className="flex items-center px-2 py-3 border border-b-1">
        <div className="container px-4 mx-auto flex items-center">
          {leftElement}
          <ul className="flex flex-row list-none">
            {children}
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;