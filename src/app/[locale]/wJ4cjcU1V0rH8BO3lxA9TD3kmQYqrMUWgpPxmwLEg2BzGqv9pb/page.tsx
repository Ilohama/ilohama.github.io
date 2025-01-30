"use client";
import LeelooVision from "@/components/contents/LeelooVision";
import PageContent from "@/components/layout/PageContent";
import RootScreen from "@/components/layout/RootScreen";
import { Navigation } from "@/components/ui/NavBar";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "universal-cookie";

export default function LeelooSecretPage() {
  const locale = usePathname()?.split("/")[1];
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();
  if (cookies.get("leeloo_vision") !== true) {
    router.push("/" + locale);
  }

  return (
    <RootScreen>
      <Navigation locale={locale} />
      <PageContent>
        <LeelooVision />
      </PageContent>
    </RootScreen>
  );
}
