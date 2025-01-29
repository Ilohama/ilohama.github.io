import { useTranslations } from "next-intl";
import {
  FaApple,
  FaBandcamp,
  FaDeezer,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

export default function MusicArtistLinks() {
  const t = useTranslations("musics");
  return (
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
  );
}
