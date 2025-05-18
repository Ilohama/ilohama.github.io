"use client";
import { GiVrHeadset, GiMechaHead } from "react-icons/gi";
import { useTranslations } from "next-intl";
import Image from "next/image";
import avatarPic from "@/imgs/Avatar.png";
import PageContent from "@/components/layout/PageContent";
import { useRouter } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import RootScreen from "@/components/layout/RootScreen";
import { Navigation } from "@/components/ui/NavBar";
import Cookies from "universal-cookie";

export default function Home() {
  const locale = usePathname()?.split("/")[1];
  const t = useTranslations("home");
  const router = useRouter();
  const cookies = new Cookies(null, { path: "/" });

  const onMusicsClick = () => {
    router.push("/musics", { locale });
  };

  const onDevsInfosClick = () => {
    router.push("/devinfos", { locale });
  };

  return (
    <RootScreen>
      <Navigation locale={locale} />
      <PageContent>
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
          <hr className="separator_slate" />
          <div className="flex flex-col md:flex-row items-center w-full">
            <p
              data-augmented-ui
              className="text-4xl text-primary-75 leading-relaxed w-full dialog"
            >
              {t("welcome")}
            </p>
            <Image
              className="rounded max-w-xxs"
              src={avatarPic}
              alt="Leeloo's Avatar"
            />
          </div>
          <hr className="separator_slate" />
          <div
            className="dark_aug_ui_text_container_2_secondary w-full"
            data-augmented-ui
          >
            <p className="text-slate-300 text-2xl mb-1 leading-relaxed">
              {t("main_intro")}
            </p>
          </div>
          <hr className="separator_slate" />
          <div
            className="dark_aug_ui_text_container_2_primary w-full"
            data-augmented-ui
          >
            <p className="text-slate-300 text-2xl mb-1 leading-relaxed">
              {t("musics_infos")}
            </p>
            <button
              className="btn_futuristic_secondary text-2xl my-2"
              data-augmented-ui="bl-clip tr-clip"
              onClick={() => onMusicsClick()}
            >
              {t("music_link")}
            </button>
          </div>
          <hr className="separator_slate" />
          <div
            className="dark_aug_ui_text_container_2_secondary w-full mb-4 md:mb-2"
            data-augmented-ui
          >
            <p className="text-slate-300 text-2xl mb-1 leading-relaxed">
              {t("dev_infos")}
            </p>
            <button
              className="btn_futuristic text-2xl my-2"
              data-augmented-ui="bl-clip tr-clip"
              onClick={() => {
                onDevsInfosClick();
              }}
            >
              {t("dev_link")}
            </button>
          </div>
          {cookies.get("myCat") === true ? (
            <>
              <hr className="separator_slate" />
              <div>
                <p>
                  Remember to{" "}
                  <span className="font-mono">
                    &quot;{process.env.NEXT_PUBLIC_SECRET_0}&quot;
                  </span>{" "}
                  y&apos;all !
                </p>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </PageContent>
    </RootScreen>
  );
}
