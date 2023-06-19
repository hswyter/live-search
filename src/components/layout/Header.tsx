import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../ui/atoms/navbar/Navbar";
import NavItem from "../ui/atoms/navbar/NavItem";

const Header: FunctionComponent = () => {
  const { t } = useTranslation();

  const logo = <img src="/images/logo_brille24.svg" alt="" className="w-40" />;

  return (
    <Navbar leftElement={logo}>
      <NavItem title={t('glasses')} />
      <NavItem title={t('sunglasses')} />
      <NavItem title={t('discover')} />
    </Navbar>
  );
}

export default Header;