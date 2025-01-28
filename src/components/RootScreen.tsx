import { ReactNode } from "react";
import SlowParticles from "./SlowParticles";
import Cookies from "universal-cookie";

export default function RootScreen({ children }: { children: ReactNode }) {
  const cookies = new Cookies(null, { path: "/" });

  return (
    <div id="root">
      <SlowParticles />
      <div
        className={
          cookies.get("myCat") === true
            ? "search_page_container"
            : "page_container"
        }
        data-augmented-ui
      >
        {children}
      </div>
    </div>
  );
}
