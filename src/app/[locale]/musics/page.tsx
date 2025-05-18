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
import { AvailableLfSets } from "@/components/musics/AvailableLfSets";

const PopUpZone = ({
  isOpen,
  setName,
  onClose,
}: {
  isOpen: boolean;
  setName: AvailableLfSets;
  onClose: () => void;
}) => {
  return (
    <>
      {isOpen ? <LfPopUp ytSrc={SetsDatas[setName]} onClose={onClose} /> : ""}
    </>
  );
};

export default function Musics() {
  const locale = usePathname()?.split("/")[1];
  const cookies = new Cookies(null, { path: "/" });
  const t = useTranslations("musics");
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [lfSetLoaded, setLfSet] = useState<AvailableLfSets>("lf4");

  return (
    <RootScreen>
      <Navigation locale={locale} />
      <PageContent>
        <PopUpZone
          isOpen={isPopUpOpen}
          setName={lfSetLoaded}
          onClose={() => {
            setPopUpOpen(false);
          }}
        />
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
            onOpenSet={(setName: AvailableLfSets) => {
              setLfSet(setName);
              setPopUpOpen(true);
            }}
          />
        </ExpandableBox>
      </PageContent>
    </RootScreen>
  );
}
