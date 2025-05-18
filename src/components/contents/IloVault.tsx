import { useState } from "react";
import secrets from "@/secret.json";
import PopUp from "@/components/layout/PopUp";
import NumPad from "@/components/ui/NumPad";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import iloAvatar from "@/imgs/ilovatar.png";
import Image from "next/image";
import Cookies from "universal-cookie";
import { EndEyeBtn, PinkEyeBtn } from "@/components/ui/EyeBtns";

export default function IloVaultGuardian() {
  const cookies = new Cookies(null, { path: "/" });
  const [password, setPassword] = useState("");
  const t = useTranslations("vault");
  const router = useRouter();
  cookies.remove("ilo_secret_path");

  const onPadInput = (num: string) => {
    setPassword(password + num);
  };

  const onPadClear = () => {
    setPassword("");
  };

  const onUnsearchClick = () => {
    cookies.remove("myCat");
    cookies.remove("ilohama_secret");
    cookies.remove("ilo_secret_path");
    cookies.remove("secret_steps_done");
    router.push("/");
  };

  const onSwitchToLeelooView = () => {
    cookies.remove("myCat");
    cookies.remove("ilohama_secret");
    cookies.set("leeloo_vision", true);
    cookies.set("secret_steps_done", 2);
    router.push("/");
  };

  return password === secrets["secret-1"] ? (
    <div className="flex flex-col items-center justify-center h-full">
      <Image
        className="rounded-full max-w-xxs mb-4"
        src={iloAvatar}
        alt="ilohama avatar"
      />
      <h1 className="text-4xl mb-4">{t("success_msg")}</h1>
      <div className="flex flex-row">
        <EndEyeBtn
          onClick={() => {
            onUnsearchClick();
          }}
        />
        {" || "}
        <PinkEyeBtn onClick={onSwitchToLeelooView} />
      </div>
    </div>
  ) : (
    <PopUp onClose={onUnsearchClick}>
      <div className="flex flex-col items-center justify-center h-full">
        <h3 className="text-2xl mb-2">{t("msg")}</h3>
        <hr className="w-1/4 border-slate-700 my-2" />
        <p className="text-xs text-gray-500">{t("small")}</p>
        <ol className="text-xs text-gray-500 text-left">
          <li>1 / {t("hint_1")}</li>
          <li>2 / {t("hint_2")}</li>
          <li>3 / {t("hint_3")}</li>
        </ol>
        <hr className="separator_slate" />
        <p className="mb-2 text-left">{t("pass_lbl") + " " + password}</p>
        <NumPad onInput={onPadInput} onClear={onPadClear} />
      </div>
    </PopUp>
  );
}
