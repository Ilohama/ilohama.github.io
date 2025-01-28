"use client";
import KittyDisplay from "@/components/KittyDisplay";
import { Navigation } from "@/components/NavBar";
import PageContent from "@/components/PageContent";
import RootScreen from "@/components/RootScreen";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "universal-cookie";

export default function KittyPage() {
  const locale = usePathname()?.split("/")[1];
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();
  if (cookies.get("myCat") !== true) {
    router.push("/");
  }

  return (
    <RootScreen>
      <Navigation locale={locale} />
      <PageContent>
        <KittyDisplay />
      </PageContent>
    </RootScreen>
  );
}
