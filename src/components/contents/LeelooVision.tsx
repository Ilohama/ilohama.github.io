import { useState } from "react";
import secrets from "@/secret.json";
import Image from "next/image";
import catGif from "@/imgs/cat_laptop.gif";
import { usePathname } from "next/navigation";
import { useRouter } from "@/i18n/routing";
import PopUp from "@/components/layout/PopUp";
import Cookies from "universal-cookie";
import Custom404 from "@/app/404";
import { EndEyeBtn } from "@/components/ui/EyeBtns";
import { useTranslations } from "next-intl";
import { FaCheck } from "react-icons/fa";

export default function LeelooVision() {
  const cookies = new Cookies(null, { path: "/" });
  const currentPath = usePathname()?.split("/")[2];
  const [showInput, setShowInput] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const t = useTranslations("lvision");

  const onClose = () => {
    cookies.set("leeloo_vision", false);
    cookies.set("secret_steps_done", 0);
    router.push("/");
  };

  const onValidate = () => {
    cookies.set("leeloo_vision", false);
    cookies.set("secret_steps_done", 3);
    router.push("/");
  };

  return password === secrets["secret-2"] ? (
    <PopUp onClose={onClose}>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl">{t("header")}</h1>
        <Image
          className="rounded max-w-xxs"
          src={catGif}
          alt="Another cat gif..."
        />
        <p className="text-xs text-gray-700">
          {t("small")}
          <br />
          <code className="text-gray-800">{currentPath}</code>
        </p>
        <button
          className="flex items-center text-green-900"
          onClick={onValidate}
        >
          <FaCheck />
          {t("validate_btn")}
        </button>
      </div>
    </PopUp>
  ) : (
    <div className="flex flex-col h-full items-center justify-center">
      {showInput === true ? (
        <>
          <p className="self-start">?!&lt;/1==3\&gt;!? :</p>
          <hr className="separator_slate" />
          <input
            className="text-black"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <hr className="separator_slate" />
          <EndEyeBtn onClick={onClose} />
        </>
      ) : (
        <>
          <Custom404 />
          <button onClick={() => setShowInput(true)}>...</button>
        </>
      )}
    </div>
  );
}
