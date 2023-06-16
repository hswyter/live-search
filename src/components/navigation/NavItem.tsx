import { FunctionComponent } from "react";

export type NavItemProps = {
  title: string;
  hrefLink?: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({ title, hrefLink }: NavItemProps) => {
  return (
    <li className="nav-item">
      <a className="px-3 py-2 flex items-center text-base uppercase font-normal hover:font-medium" href={hrefLink}>
        <span className="ml-2">{title}</span>
      </a>
    </li>
  )
}

export default NavItem;