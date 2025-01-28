"use client";
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
} from "@/components/ImgHoverBtnLinks";
import { GiAudioCassette } from "react-icons/gi";
import floppyStyles from "@/components/floppy.module.scss";
import { useTranslations } from "next-intl";
import ExpandableBox from "@/components/ExpandableBox";
import PageContent from "@/components/PageContent";
import { useState } from "react";
import PopUp from "@/components/PopUp";
import { usePathname } from "next/navigation";
import RootScreen from "@/components/RootScreen";
import { Navigation } from "@/components/NavBar";

const deathLinksInfos: ImgHoverBtnLinksProps = {
  title: "[Sgl] : Death",
  image: {
    src: "/imgs/musics/DeathCover.png",
    alt: "Death cover",
  },
  links: {
    soundcloud: "https://on.soundcloud.com/ztiSUrqKfyuKsN4H8",
    youtube: "https://youtu.be/Crcoxjc8i-U?si=OFBk3AILWzpe5SXB",
    spotify:
      "https://open.spotify.com/intl-fr/track/38USZcWPs52y2rJANpZKtY?si=1060969c21784dcf",
    deezer: "https://deezer.page.link/3dcuJRr2NQ6c3PPi7",
    apple: "https://music.apple.com/us/album/death-single/1768063934",
  },
};
const waitingTimeLinksInfos: ImgHoverBtnLinksProps = {
  title: "[Sgl] : Waiting Time",
  image: {
    src: "/imgs/musics/WaitingTimeCover.png",
    alt: "Waiting Time cover",
  },
  links: {
    soundcloud: "https://on.soundcloud.com/uTqJFPrmi8VgmGLV9",
    youtube: "https://youtu.be/CIIlk7ofEa8?si=7sgCbrm3N1_OZqqj",
    spotify:
      "https://open.spotify.com/intl-fr/track/1NwLBdYT21RMBjpIz0HKxl?si=7c82c9437a474c5a",
    deezer: "https://deezer.page.link/U47b6eEnUeCJoFbG6",
    apple:
      "https://music.apple.com/us/album/waiting-time/1749053812?i=1749053813",
  },
};
const feelingsLinksInfos: ImgHoverBtnLinksProps = {
  title: "[EP] : Feelings",
  image: {
    src: "/imgs/musics/Feelings_Cover.png",
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
    src: "/imgs/musics/Ilohama_Retrovision.png",
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
    src: "/imgs/musics/Walking_Out_EP_Cover.png",
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
    src: "/imgs/musics/reality_switch.png",
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

export default function Musics() {
  const locale = usePathname()?.split("/")[1];
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
          <PopUp
            onClose={() => {
              setlf7PopupOpen(false);
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0sL8BlU6lMU?si=JF0HSHgvR3QeknWN&amp;start=6634"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </PopUp>
        ) : (
          ""
        )}
        {islf6PopupOpen ? (
          <PopUp
            onClose={() => {
              setlf6PopupOpen(false);
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/N-Qg-3CJF5E?si=dKHs6lOGEqG5Cq0V&amp;start=7700"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </PopUp>
        ) : (
          ""
        )}
        {islf5PopupOpen ? (
          <PopUp
            onClose={() => {
              setlf5PopupOpen(false);
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9y5m7cPou_U?si=hjK4zIdgxNe6DqfO&amp;start=5817"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </PopUp>
        ) : (
          ""
        )}
        {islf4PopupOpen ? (
          <PopUp
            onClose={() => {
              setlf4PopupOpen(false);
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XO_I3rURJLw?si=uDBzbDIozYDjGXrC&amp;start=4528"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </PopUp>
        ) : (
          ""
        )}
        <h1 className="flex flex-row items-center align-text-bottom text-4xl font-futuristic mt-2 px-4">
          <GiAudioCassette className="hidden md:block mr-4" />
          {t("header")}
          <GiAudioCassette className="hidden md:block ml-4" />
        </h1>
        <hr className="separator_secondary" />
        <div className="flex flex-col md:flex-row items-end px-2">
          <div className="dark_aug_ui_text_container text-lg" data-augmented-ui>
            <p>{t("desc")}</p>
          </div>
          <div
            className="dark_aug_ui_container_secondary grid grid-flow-row grid-cols-3 mt-2 px-6"
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
        </div>
        <hr className="separator_slate" />
        <ExpandableBox title={t("releases_lbl")}>
          <ul
            className="flex-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-2 pb-2 mt-1 mb-8 overflow-visible w-fit auto-rows-min"
            data-augmented-ui-reset
          >
            <div
              className={floppyStyles.floppy_item_container}
              data-augmented-ui
            >
              <ImgHoverBtnLinks {...deathLinksInfos} />
            </div>
            <div
              className={floppyStyles.floppy_item_container}
              data-augmented-ui
            >
              <ImgHoverBtnLinks {...waitingTimeLinksInfos} />
            </div>
            <div
              className={floppyStyles.floppy_item_container}
              data-augmented-ui
            >
              <ImgHoverBtnLinks {...feelingsLinksInfos} />
            </div>
            <div
              className={floppyStyles.floppy_item_container}
              data-augmented-ui
            >
              <ImgHoverBtnLinks {...retrovisionLinksInfos} />
            </div>
            <div
              className={floppyStyles.floppy_item_container}
              data-augmented-ui
            >
              <ImgHoverBtnLinks {...walkingOutLinksInfos} />
            </div>
            <div
              className={floppyStyles.floppy_item_container}
              data-augmented-ui
            >
              <ImgHoverBtnLinks {...realitySwitchLinksInfos} />
            </div>
          </ul>
        </ExpandableBox>
        <hr className="separator_slate" />
        <ExpandableBox title={t("mix_sets_lbl")}>
          /././ {t("sets_lessfest")} \.\.\
          <ul className="grid grid-cols-2 w-full text-center">
            <li>
              <button
                className="dark_aug_ui_text_container text-lg text-center my-2"
                onClick={() => setlf7PopupOpen(!islf7PopupOpen)}
                data-augmented-ui
              >
                lessfest 7
              </button>
            </li>
            <li>
              <button
                className="dark_aug_ui_text_container text-lg text-center my-2"
                onClick={() => setlf6PopupOpen(!islf6PopupOpen)}
                data-augmented-ui
              >
                lessfest 6
              </button>
            </li>
            <li>
              <button
                className="dark_aug_ui_text_container text-lg text-center my-2"
                onClick={() => setlf5PopupOpen(!islf5PopupOpen)}
                data-augmented-ui
              >
                lessfest 5
              </button>
            </li>
            <li>
              <button
                className="dark_aug_ui_text_container text-lg text-center my-2"
                onClick={() => setlf4PopupOpen(!islf4PopupOpen)}
                data-augmented-ui
              >
                lessfest 4
              </button>
            </li>
          </ul>
        </ExpandableBox>
      </PageContent>
    </RootScreen>
  );
}
