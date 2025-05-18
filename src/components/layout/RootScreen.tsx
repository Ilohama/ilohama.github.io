import { ReactNode } from "react";
import SlowParticles from "@/components/ui/SlowParticles";
import Cookies from "universal-cookie";
import styles from "./RootScreen.module.scss";
import GalaxyAnimation from "../ui/GalaxyAnim";

export default function RootScreen({ children }: { children: ReactNode }) {
  const cookies = new Cookies(null, { path: "/" });
  const bgColor =
    cookies.get("reality_switched") === true
      ? styles.reality_switch_page_container
      : cookies.get("leeloo_vision") === true
      ? styles.leeloo_view_page_container
      : cookies.get("ilohama_secret") === true
      ? styles.ilohama_secret_page_container
      : cookies.get("myCat") === true
      ? styles.search_page_container
      : styles.page_container;

  return (
    <div id="root">
      {cookies.get("reality_switched") === true ? (
        <GalaxyAnimation />
      ) : (
        <SlowParticles />
      )}
      <div className={bgColor} data-augmented-ui>
        {children}
      </div>
    </div>
  );
}
