"use client";
import { Navigation } from "@/components/ui/NavBar";
import PageContent from "@/components/layout/PageContent";
import RootScreen from "@/components/layout/RootScreen";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import IloVaultGuardian from "@/components/contents/IloVault";

export default function IloVault() {
  const locale = usePathname()?.split("/")[1];
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();
  if (cookies.get("ilo_secret_path") !== true) {
    router.push("/" + locale);
  }

  return (
    <RootScreen>
      <Navigation locale={locale} />
      <PageContent>
        <IloVaultGuardian />
      </PageContent>
    </RootScreen>
  );
}
