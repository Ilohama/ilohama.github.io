"use client";
import KittyDisplay from "@/components/contents/KittyDisplay";
import { Navigation } from "@/components/ui/NavBar";
import PageContent from "@/components/layout/PageContent";
import RootScreen from "@/components/layout/RootScreen";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "universal-cookie";

export default function KittyPage() {
  const locale = usePathname()?.split("/")[1];
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();
  if (cookies.get("myCat") !== true) {
    router.push("/" + locale);
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
