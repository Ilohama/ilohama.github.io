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
    cookies.set("secret_steps_done", 0);
    cookies.set("ilohama_secret", false);
    cookies.set("ilo_secret_path", false);
    router.refresh();
  };

  return (
    <>
      <hr className="separator_secondary" />
      <p>{t("secret_desc")}</p>
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
