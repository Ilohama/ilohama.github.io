import { useTranslations } from "next-intl";
import zyloSrc from "@/imgs/zylo.png";
import Image from "next/image";
import Cookies from "universal-cookie";
import { FaEye } from "react-icons/fa";
import { useRouter } from "@/i18n/routing";

export default function KittyMoreContents() {
  const t = useTranslations("kitty");
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();

  const onSecret2Click = () => {
    cookies.set("myCat", false);
    cookies.set("secret_steps_done", 1);
    cookies.set("ilohama_secret", true);
    router.refresh();
  };

  const onUnsearchClick = () => {
    cookies.set("secret_steps_done", 0);
    cookies.set("ilohama_secret", false);
    cookies.set("myCat", false);
    router.refresh();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full align-text-bottom text-4xl">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div
          data-augmented-ui
          className="text-4xl text-secondary-100 leading-relaxed w-full dialog text-left"
        >
          <p className="font-futuristic">ZYLO :</p>
          <p className="md:mr-2">{t("msg")}</p>
          <p className="text-xs mb-4 md:mb-0 ">
            {t("small")}
            <button
              className="search_mode_disable_btn ml-4"
              onClick={() => {
                onUnsearchClick();
              }}
              data-augmented-ui="tr-round bl-round"
            >
              <FaEye />
            </button>
            {cookies.get("ilohama_secret") === true ? (
              ""
            ) : (
              <button
                className="secret_2_enable_btn"
                onClick={() => {
                  onSecret2Click();
                }}
                data-augmented-ui="tl-round br-round"
              >
                <FaEye />
              </button>
            )}
          </p>
        </div>
        <Image
          className="rounded-full max-w-xxs"
          src={zyloSrc}
          alt="Zylo's avatar"
        />
      </div>
    </div>
  );
}
