import React from "react";
import { useTranslation } from "react-i18next";
import { FaTerminal, FaUsers } from "react-icons/fa";

const Legals = () => {
  const { t } = useTranslation();

  return (
    <div className="page_content_container">
      <h1 className="flex flex-row items-center align-text-bottom text-4xl font-futuristic mt-2 px-4">
        <FaTerminal className="hidden md:block mr-4" />
        {t("legals.header")}
        <FaUsers className="hidden md:block ml-4" />
      </h1>
      <hr className="separator_secondary" />
      <div className="flex flex-col items-start text-justify w-fit">
        <p className="mb-4 mx-2">
          <a
            href="https://www.easyreading.it/en/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            EasyReading
          </a>{" "}
          :<br />
          {t("legals.easyreading_desc")}
        </p>
        <p className="mb-4 mx-2">
          <a
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            React-Icons
          </a>{" "}
          :<br />
          {t("legals.reacticons_desc")}
        </p>
        <p className="mb-4 mx-2">
          <a
            href="https://augmented-ui.com/docs/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Augmented-UI
          </a>{" "}
          :<br />
          {t("legals.augmentedui_desc")}
        </p>
        <hr className="separator_slate self-center" />
        <p className="self-end">By : Leeloo Ilohama Franchi</p>
        <p className="self-end">Copyright &copy; 2024</p>
      </div>
    </div>
  );
};

export default Legals;
