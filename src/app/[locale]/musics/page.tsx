"use client";
import { GiAudioCassette } from "react-icons/gi";
import { useTranslations } from "next-intl";
import ExpandableBox from "@/components/ui/ExpandableBox";
import PageContent from "@/components/layout/PageContent";
import { useState } from "react";
import { usePathname } from "next/navigation";
import RootScreen from "@/components/layout/RootScreen";
import { Navigation } from "@/components/ui/NavBar";
import MusicArtistLinks from "@/components/musics/MusicArtistLinks";
import ReleasesList from "@/components/musics/ReleasesList";
import SetsList from "@/components/musics/SetsList";
import LfPopUp from "@/components/musics/LfPopUp";
import SetsDatas from "@/components/musics/music_sets.json";
import Cookies from "universal-cookie";
import IloDisplay from "@/components/musics/IloDisplay";

export default function Musics() {
  const locale = usePathname()?.split("/")[1];
  const cookies = new Cookies(null, { path: "/" });
  const t = useTranslations("musics");
  const [islf7PopupOpen, setlf7PopupOpen] = useState(false);
  const [islf6PopupOpen, setlf6PopupOpen] = useState(false);
  const [islf5PopupOpen, setlf5PopupOpen] = useState(false);
  const [islf4PopupOpen, setlf4PopupOpen] = useState(false);

  return (
    <RootScreen>
      <Navigation locale={locale} />
      <PageContent>
        {islf7PopupOpen ? (
          <LfPopUp
            ytSrc={SetsDatas["lf7"]}
            onClose={() => setlf7PopupOpen(false)}
          />
        ) : (
          ""
        )}
        {islf6PopupOpen ? (
          <LfPopUp
            ytSrc={SetsDatas["lf6"]}
            onClose={() => setlf6PopupOpen(false)}
          />
        ) : (
          ""
        )}
        {islf5PopupOpen ? (
          <LfPopUp
            ytSrc={SetsDatas["lf5"]}
            onClose={() => setlf5PopupOpen(false)}
          />
        ) : (
          ""
        )}
        {islf4PopupOpen ? (
          <LfPopUp
            ytSrc={SetsDatas["lf4"]}
            onClose={() => setlf4PopupOpen(false)}
          />
        ) : (
          ""
        )}
        <h1 className="flex flex-row items-center align-text-bottom text-4xl font-futuristic mt-2 px-4">
          <GiAudioCassette className="hidden md:block mr-4" />
          {t("header")}
          <GiAudioCassette className="hidden md:block ml-4" />
        </h1>
        {cookies.get("ilohama_secret") === true ? <IloDisplay /> : ""}
        <hr className="separator_secondary" />
        <MusicArtistLinks />
        <hr className="separator_slate" />
        <ExpandableBox title={t("releases_lbl")}>
          <ReleasesList />
        </ExpandableBox>
        <hr className="separator_slate" />
        <ExpandableBox title={t("mix_sets_lbl")}>
          <SetsList
            onlf4Open={() => setlf4PopupOpen(true)}
            onlf5Open={() => setlf5PopupOpen(true)}
            onlf6Open={() => setlf6PopupOpen(true)}
            onlf7Open={() => setlf7PopupOpen(true)}
          />
        </ExpandableBox>
      </PageContent>
    </RootScreen>
  );
}
