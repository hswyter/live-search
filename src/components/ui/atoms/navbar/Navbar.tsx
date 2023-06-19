import React, { FunctionComponent, PropsWithChildren, ReactElement } from "react";

type NavbarProps = PropsWithChildren & {
  leftElement?: ReactElement;
}

const Navbar: FunctionComponent<NavbarProps> = ({ leftElement, children }: NavbarProps) => {
  return (
    <nav className="w-full flex items-center px-2 py-3 border border-b-1 border-r-0 border-l-0 border-t-0">
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