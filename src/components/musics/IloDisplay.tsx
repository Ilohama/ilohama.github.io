import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Cookies from "universal-cookie";
import { EndEyeBtn, PinkEyeBtn } from "@/components/ui/EyeBtns";

export default function IloDisplay() {
  const t = useTranslations("musics");
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();

  const onShowSecretPath = () => {
    cookies.set("ilo_secret_path", true);
    router.refresh();
  };

  const onUnsearchClick = () => {
    cookies.remove("secret_steps_done");
    cookies.remove("ilohama_secret");
    cookies.remove("ilo_secret_path");
    router.refresh();
  };

  return (
    <>
      <hr className="separator_secondary" />
      <p>{t("secret_desc")}</p>
      <p className="text-yellow-600">{t("secret_hint")}</p>
      <hr className="separator_slate" />
      <div className="flex flex-row justify-end">
        <EndEyeBtn
          onClick={() => {
            onUnsearchClick();
          }}
        />
        {cookies.get("ilo_secret_path") !== true ? (
          <>
            {" || "}
            <PinkEyeBtn onClick={onShowSecretPath} />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
