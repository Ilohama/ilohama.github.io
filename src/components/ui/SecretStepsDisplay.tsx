import { useRouter } from "@/i18n/routing";
import Cookies from "universal-cookie";
import styles from "./SecretStepsDisplay.module.scss";

export default function SecretStepsDisplay() {
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();

  const onRealitySwitchClick = () => {
    cookies.set("phase_2_enabled", true);
    router.push("/phase-2");
  };

  return cookies.get("reality_switched") === true ? (
    <div
      className={styles.secret_steps_container + " cursor-pointer"}
      onClick={onRealitySwitchClick}
      data-augmented-ui="br-clip bl-clip"
    >
      {cookies.get("secret_steps_done")} / ?
    </div>
  ) : (
    <div
      className={styles.secret_steps_container}
      data-augmented-ui="br-clip bl-clip"
    >
      {cookies.get("secret_steps_done")} / 7
    </div>
  );
}
