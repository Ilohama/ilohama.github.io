"use client";
import { Navigation } from "@/components/NavBar";
import PageContent from "@/components/PageContent";
import RootScreen from "@/components/RootScreen";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { FaEye, FaTerminal, FaUsers } from "react-icons/fa";
import Cookies from "universal-cookie";

export default function Legals() {
  const locale = usePathname()?.split("/")[1];
  const cookies = new Cookies(null, { path: "/" });
  const t = useTranslations("legals");
  const router = useRouter();

  const onSearchClick = () => {
    cookies.set("myCat", true);
    router.refresh();
  };

  const onUnsearchClick = () => {
    cookies.set("myCat", false);
    router.refresh();
  };

  return (
    <RootScreen>
      <Navigation locale={locale} />
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
          <p className="mb-4 mx-2">
            <span className="underline underline-offset-4">Stéfanie</span> :
            <br />
            {t("stef_desc")}
          </p>
          <hr className="separator_slate self-center" />
          <p className="self-end">By : Leeloo Ilohama Franchi</p>
          {cookies.get("myCat") === true ? (
            <button
              className="search_mode_disable_btn"
              onClick={() => {
                onUnsearchClick();
              }}
              data-augmented-ui="tr-round bl-round"
            >
              <FaEye />
            </button>
          ) : (
            <button
              className="search_mode_enable_btn"
              onClick={() => {
                onSearchClick();
              }}
              data-augmented-ui="tl-round br-round"
            >
              <FaEye />
            </button>
          )}
          <p className="self-end">Copyright &copy; 2025</p>
        </div>
      </PageContent>
    </RootScreen>
  );
}
