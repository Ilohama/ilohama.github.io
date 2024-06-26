import React from "react";
import {
  FaSoundcloud,
  FaYoutube,
  FaSpotify,
  FaDeezer,
  FaBandcamp,
  FaApple,
} from "react-icons/fa";
import ImgHoverBtnLinks, {
  ImgHoverBtnLinksProps,
} from "src/components/ImgHoverBtnLinks";
import { useTranslation } from "react-i18next";
import { GiAudioCassette } from "react-icons/gi";

const feelingsLinksInfos: ImgHoverBtnLinksProps = {
  title: "[EP] : Feelings",
  image: {
    src: "/img/musics/Feelings_Cover.png",
    alt: "Retrovision cover",
  },
  links: {
    soundcloud: "https://on.soundcloud.com/vS5u8nMLkckd7wsG7",
    youtube:
      "https://www.youtube.com/playlist?list=OLAK5uy_nA0f7ZdHnPL1RttbNCFvISZTbA--uxkek",
    spotify: "https://open.spotify.com/album/4ql3RODPc6Itk3imokbJ6s",
    deezer: "https://www.deezer.com/album/554131122",
    apple: "https://music.apple.com/album/feelings/1733633835",
  },
};
const retrovisionLinksInfos: ImgHoverBtnLinksProps = {
  title: "[Alb] : Retrovision",
  image: {
    src: "/img/musics/Ilohama_Retrovision.png",
    alt: "Retrovision cover",
  },
  links: {
    soundcloud: "https://on.soundcloud.com/dgQx4",
    youtube:
      "https://www.youtube.com/playlist?list=OLAK5uy_l4E3bKzI2r2u6w1jgPDBxuNOrWwJOfWHU",
    spotify: "https://open.spotify.com/album/3yz5JSKjTfQyAIK567Uxma",
    deezer: "https://www.deezer.com/fr/album/399968157",
    apple: "https://music.apple.com/fr/album/retrovision/1667516949",
  },
};
const walkingOutLinksInfos: ImgHoverBtnLinksProps = {
  title: "[EP] : Walking Out EP",
  image: {
    src: "/img/musics/Walking_Out_EP_Cover.png",
    alt: "Walking Out cover",
  },
  links: {
    soundcloud: "https://on.soundcloud.com/LA9Xy",
    youtube:
      "https://www.youtube.com/playlist?list=OLAK5uy_kPfL2Vg94VdjBDb0iw7TfapVNunI7AV1w",
    spotify: "https://open.spotify.com/album/4uhk5plbHXqXaiK5NfH2sQ",
    deezer: "https://www.deezer.com/us/album/371013417",
    apple: "https://music.apple.com/us/album/walking-out/1652154960",
  },
};
const realitySwitchLinksInfos: ImgHoverBtnLinksProps = {
  title: "[Sgl] : Reality Switch",
  image: {
    src: "/img/musics/reality_switch.png",
    alt: "Reality Switch cover",
  },
  links: {
    soundcloud: "https://on.soundcloud.com/uiXcM",
    youtube: "https://www.youtube.com/watch?v=cdmbVSR3qqw",
    spotify: "https://open.spotify.com/track/20OT9Srcw63z4b7BjEL2Gw",
    deezer: "https://www.deezer.com/us/album/367158057",
    apple:
      "https://music.apple.com/us/album/reality-switch/1650212335?i=1650212338",
  },
};

const Musics = () => {
  const { t } = useTranslation();

  return (
    <div className="page_content_container">
      <h1 className="flex flex-row items-center align-text-bottom text-4xl font-futuristic mt-2 px-4">
        <GiAudioCassette className="hidden md:block mr-4" />
        {t("musics.header")}
        <GiAudioCassette className="hidden md:block ml-4" />
      </h1>
      <hr className="separator_secondary" />
      <div className="dark_aug_ui_text_container text-lg" data-augmented-ui>
        <p>{t("musics.desc")}</p>
      </div>
      <div
        className="dark_aug_ui_container_secondary grid grid-flow-row grid-cols-3 md:grid-cols-6 mt-2 px-6"
        data-augmented-ui="tl-clip br-clip"
      >
        <a
          href="https://soundcloud.com/ilohama?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center text-4xl text-orange-600 mx-2"
        >
          <FaSoundcloud />
        </a>
        <a
          href="https://www.youtube.com/channel/UCx0eQlaZT32JC8KMAp2UGQg"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center text-4xl text-red-600 mx-2"
        >
          <FaYoutube />
        </a>
        <a
          href="https://open.spotify.com/artist/6DYGH7Hwo73pKSKxdIEkzC"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center text-4xl text-green-700 mx-2"
        >
          <FaSpotify />
        </a>
        <a
          href="https://www.deezer.com/us/artist/186909697"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center text-4xl mx-2"
        >
          <FaDeezer />
        </a>
        <a
          href="https://ilohama.bandcamp.com/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center text-4xl text-cyan-600 mx-2"
        >
          <FaBandcamp />
        </a>
        <a
          href="https://music.apple.com/us/artist/ilohama/1650212339"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center text-4xl mx-2"
        >
          <FaApple />
        </a>
      </div>
      <hr className="separator_slate" />
      <h2 className="align-text-center text-2xl mb-2">
        {t("musics.releases_lbl")}
      </h2>
      <ul
        className="flex-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-2 pb-2 mt-1 mb-8 overflow-visible w-fit auto-rows-min"
        data-augmented-ui-reset
      >
        <div className="floppy_item_container" data-augmented-ui>
          <ImgHoverBtnLinks {...feelingsLinksInfos} />
        </div>
        <div className="floppy_item_container" data-augmented-ui>
          <ImgHoverBtnLinks {...retrovisionLinksInfos} />
        </div>
        <div className="floppy_item_container" data-augmented-ui>
          <ImgHoverBtnLinks {...walkingOutLinksInfos} />
        </div>
        <div className="floppy_item_container mb-2 md:mb-0" data-augmented-ui>
          <ImgHoverBtnLinks {...realitySwitchLinksInfos} />
        </div>
      </ul>
    </div>
  );
};

export default Musics;
