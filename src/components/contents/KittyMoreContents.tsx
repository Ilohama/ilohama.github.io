import { useTranslations } from "next-intl";
import zyloSrc from "@/imgs/zylo.png";
import Image from "next/image";
import Cookies from "universal-cookie";
import { useRouter } from "@/i18n/routing";
import { BlueEyeBtn, EndEyeBtn } from "@/components/ui/EyeBtns";

export default function KittyMoreContents() {
  const t = useTranslations("kitty");
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();

  const onSecret2Click = () => {
    cookies.remove("myCat");
    cookies.set("secret_steps_done", 1);
    cookies.set("ilohama_secret", true);
    router.refresh();
  };

  const onUnsearchClick = () => {
    cookies.remove("secret_steps_done");
    cookies.remove("ilohama_secret");
    cookies.remove("myCat");
    router.refresh();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full align-text-bottom text-4xl">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div
          data-augmented-ui
          className="text-4xl text-secondary-100 leading-relaxed w-full dialog text-left"
        >
          <p className="font-futuristic">ZYL-0 :</p>
          <p className="md:mr-2">{t("msg")}</p>
          <p className="text-xs mb-4 md:mb-0 ">
            {t("small")}
            <br />
            <EndEyeBtn
              onClick={() => {
                onUnsearchClick();
              }}
            />
            {cookies.get("ilohama_secret") === true ? (
              ""
            ) : (
              <BlueEyeBtn
                onClick={() => {
                  onSecret2Click();
                }}
              />
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
