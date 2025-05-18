"use client";
import PageContent from "@/components/layout/PageContent";
import PopUp from "@/components/layout/PopUp";
import RootScreen from "@/components/layout/RootScreen";
import P2Door from "@/components/phase-2/P2Door";
import { Navigation } from "@/components/ui/NavBar";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "universal-cookie";

export default function SecretPhase2() {
  const locale = usePathname()?.split("/")[1];
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();
  if (cookies.get("phase_2_enabled") !== true) {
    router.push("/" + locale);
  }

  const resetProgression = () => {
    cookies.remove("reality_switched");
    cookies.remove("secret_steps_done");
    cookies.remove("phase_2_enabled");
    router.push("/" + locale);
  };

  return (
    <RootScreen>
      <Navigation locale={locale} />
      <PageContent>
        <PopUp onClose={resetProgression}>
          <P2Door />
        </PopUp>
      </PageContent>
    </RootScreen>
  );
}
