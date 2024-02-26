import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GiMechaHead, GiVrHeadset } from "react-icons/gi";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="page_content_container">
      <h1 className="flex flex-row items-center mt-2 text-4xl">
        <GiVrHeadset className="hidden md:block mr-6" />
        <p className="align-text-bottom font-futuristic">
          <span className="text-5xl">L</span>eeloo{" "}
          <span className="text-5xl">I</span>lohama{" "}
          <span className="text-5xl">F</span>ranchi
        </p>
        <GiMechaHead className="hidden md:block ml-6" />
      </h1>
      <hr className="separator_secondary" />
      <div className="flex flex-col items-center px-2 pb-10">
        <p className="text-4xl text-primary-75 leading-relaxed">
          {t("home.welcome")}
        </p>
        <hr className="separator_slate" />
        <div
          className="dark_aug_ui_text_container_2_secondary w-full"
          data-augmented-ui
        >
          <p className="text-slate-300 text-2xl mb-1 leading-relaxed">
            {t("home.main_intro")}
          </p>
        </div>
        <hr className="separator_slate" />
        <div
          className="dark_aug_ui_text_container_2_primary w-full"
          data-augmented-ui
        >
          <p className="text-slate-300 text-2xl mb-1 leading-relaxed">
            {t("home.musics_infos")}
          </p>
          <Link to="/musics">
            <button
              className="btn_futuristic_secondary text-2xl my-2"
              data-augmented-ui="bl-clip tr-clip"
            >
              {t("home.music_link")}
            </button>
          </Link>
        </div>
        <hr className="separator_slate" />
        <div
          className="dark_aug_ui_text_container_2_secondary w-full mb-4 md:mb-2"
          data-augmented-ui
        >
          <p className="text-slate-300 text-2xl mb-1 leading-relaxed">
            {t("home.dev_infos")}
          </p>
          <Link to="/devinfos">
            <button
              className="btn_futuristic text-2xl my-2"
              data-augmented-ui="bl-clip tr-clip"
            >
              {t("home.dev_link")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
