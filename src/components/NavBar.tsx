"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import styles from "./navigation.module.scss";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export const Navigation = ({ locale }: { locale: string }) => {
  const pathname = usePathname();

  const getButtonClassNames = (linkTo: string) => {
    return styles.nav_item + (linkTo == pathname ? " " + styles.current : "");
  };

  const t = useTranslations("navbar");

  return (
    <header data-augmented-ui id={styles.nav_bar_container}>
      <nav className={styles.nav_menu}>
        <div className={styles.nav_brand_container} data-augmented-ui>
          <Link href={"/" + locale}>
            <button
              className={
                styles.site_brand +
                (pathname === "/" + locale ? " " + styles.current : "")
              }
            >
              <FaHome className="mr-1" />
            </button>
          </Link>
        </div>
        <Link href={"/" + locale + "/musics"}>
          <button
            className={getButtonClassNames("/" + locale + "/musics")}
            data-augmented-ui
          >
            {t("musics_lbl")}
          </button>
        </Link>
        <Link href={"/" + locale + "/devinfos"}>
          <button
            className={getButtonClassNames("/" + locale + "/devinfos")}
            data-augmented-ui
          >
            {t("devinfos_lbl")}
          </button>
        </Link>
        <Link href={"/" + locale + "/contacts"}>
          <button
            className={getButtonClassNames("/" + locale + "/contacts")}
            data-augmented-ui
          >
            {t("contacts_lbl")}
          </button>
        </Link>
        <Link href={"/" + locale + "/legals"}>
          <button
            className={getButtonClassNames("/" + locale + "/legals")}
            data-augmented-ui
          >
            {t("legals_lbl")}
          </button>
        </Link>
        <div>
          <div
            className={styles.nav_item + " closer"}
            data-augmented-ui="br-clip"
          />
        </div>
      </nav>
      <LocaleSwitcher />
    </header>
  );
};
