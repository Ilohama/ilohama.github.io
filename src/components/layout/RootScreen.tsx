import { ReactNode } from "react";
import SlowParticles from "@/components/ui/SlowParticles";
import Cookies from "universal-cookie";

export default function RootScreen({ children }: { children: ReactNode }) {
  const cookies = new Cookies(null, { path: "/" });
  const bgColor =
    cookies.get("ilohama_secret") === true
      ? "ilohama_secret_page_container"
      : cookies.get("myCat") === true
      ? "search_page_container"
      : "page_container";

  return (
    <div id="root">
      <SlowParticles />
      <div className={bgColor} data-augmented-ui>
        {children}
      </div>
    </div>
  );
}
