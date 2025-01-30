import { useState } from "react";
import secrets from "@/secret.json";
import PopUp from "@/components/layout/PopUp";
import NumPad from "@/components/ui/NumPad";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import iloAvatar from "@/imgs/ilovatar.png";
import Image from "next/image";
import Cookies from "universal-cookie";
import { FaEye } from "react-icons/fa";

export default function IloVaultGuardian() {
  const cookies = new Cookies(null, { path: "/" });
  const [password, setPassword] = useState("");
  const t = useTranslations("vault");
  const router = useRouter();

  const onExitPage = () => {
    setPassword("");
    router.push("/");
  };

  const onPadInput = (num: string) => {
    setPassword(password + num);
  };

  const onPadClear = () => {
    setPassword("");
  };

  const onUnsearchClick = () => {
    cookies.set("myCat", false);
    cookies.set("ilohama_secret", false);
    cookies.set("ilo_secret_path", false);
    cookies.set("secret_steps_done", 0);
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
        <button
          className="search_mode_disable_btn"
          onClick={() => {
            onUnsearchClick();
          }}
          data-augmented-ui="tr-round bl-round"
        >
          <FaEye />
        </button>
        {/* {cookies.get("ilo_secret_path") !== true ? (
          <>
            {" || "}
            <button
              className="pink_eye_btn"
              data-augmented-ui="inlay tl-round br-round"
              onClick={onShowSecretPath}
            >
              <FaEye />
            </button>
          </>
        ) : (
          ""
        )} */}
      </div>
    </div>
  ) : (
    <PopUp onClose={onExitPage}>
      <div className="flex flex-col items-center justify-center h-full">
        <h3 className="text-2xl mb-2">{t("msg")}</h3>
        <p className="text-xs text-gray-500">{t("small")}</p>
        <hr className="separator_slate" />
        <p className="mb-2 text-left">{t("pass_lbl") + " " + password}</p>
        <NumPad onInput={onPadInput} onClear={onPadClear} />
      </div>
    </PopUp>
  );
}
