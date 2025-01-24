"use client";
import PageContent from "@/components/PageContent";
import { useTranslations } from "next-intl";
import { FaTerminal, FaUsers } from "react-icons/fa";

export default function Legals() {
  const t = useTranslations("legals");

  return (
    <PageContent>
      <h1 className="flex flex-row items-center align-text-bottom text-4xl font-futuristic mt-2 px-4">
        <FaTerminal className="hidden md:block mr-4" />
        {t("header")}
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
          {t("easyreading_desc")}
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
          {t("reacticons_desc")}
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
          {t("augmentedui_desc")}
        </p>
        <p className="mb-4 mx-2">
          <a
            href="https://www.twitch.tv/keiex"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            KeiEx
          </a>{" "}
          :<br />
          {t("keiex_desc")}
        </p>
        <hr className="separator_slate self-center" />
        <p className="self-end">By : Leeloo Ilohama Franchi</p>
        <p className="self-end">Copyright &copy; 2025</p>
      </div>
    </PageContent>
  );
}
