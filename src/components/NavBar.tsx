import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  onClickLanguageChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  initalLang: string;
}

const NavBar = (props: NavBarProps) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const getButtonClassNames = (linkTo: string) => {
    return "nav_item" + (linkTo === pathname ? " current" : "");
  };

  return (
    <div data-augmented-ui id="nav_bar_container">
      <nav className="nav_menu">
        <div className="nav_brand_container" data-augmented-ui>
          <Link to="/">
            <button
              className={"site_brand" + (pathname === "/" ? " current" : "")}
            >
              <FaHome className="mr-1" />
            </button>
          </Link>
        </div>
        <Link to="/musics">
          <button className={getButtonClassNames("/musics")} data-augmented-ui>
            {t("navbar.musics_lbl")}
          </button>
        </Link>
        <Link to="/devinfos">
          <button
            className={getButtonClassNames("/devinfos")}
            data-augmented-ui
          >
            {t("navbar.devinfos_lbl")}
          </button>
        </Link>
        <Link to="/contacts">
          <button
            className={getButtonClassNames("/contacts")}
            data-augmented-ui
          >
            {t("navbar.contacts_lbl")}
          </button>
        </Link>
        <Link to="/legals">
          <button className={getButtonClassNames("/legals")} data-augmented-ui>
            {t("navbar.legals_lbl")}
          </button>
        </Link>
        <div>
          <div className="nav_item closer" data-augmented-ui="br-clip" />
        </div>
      </nav>
      <div className="langContainer" data-augmented-ui="bl-clip">
        <IoLanguage className="text-slate-300" />
        <select
          id="langSelector"
          defaultValue={props.initalLang}
          onChange={props.onClickLanguageChange}
        >
          <option value="en">En</option>
          <option value="fr">Fr</option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
