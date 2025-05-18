import ImgHoverBtnLinks from "@/components/ui/ImgHoverBtnLinks";
import floppyStyles from "@/components/ui/floppy.module.scss";
import releases from "./music_releases.json";
import Cookies from "universal-cookie";
import { RealitySwitchBtn } from "@/components/ui/EyeBtns";
import { useRouter } from "@/i18n/routing";

export default function ReleasesList() {
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();

  const onSwitchReality = () => {
    cookies.set("reality_switched", true);
    router.push("/");
  };

  return (
    <ul
      className="flex-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-2 pb-2 mt-1 mb-8 overflow-visible w-fit auto-rows-min"
      data-augmented-ui-reset
    >
      <div className={floppyStyles.floppy_item_container} data-augmented-ui>
        <ImgHoverBtnLinks {...releases["death"]} />
      </div>
      <div className={floppyStyles.floppy_item_container} data-augmented-ui>
        <ImgHoverBtnLinks {...releases["waitingTime"]} />
      </div>
      <div className={floppyStyles.floppy_item_container} data-augmented-ui>
        <ImgHoverBtnLinks {...releases["feelings"]} />
      </div>
      <div className={floppyStyles.floppy_item_container} data-augmented-ui>
        <ImgHoverBtnLinks {...releases["retrovision"]} />
      </div>
      <div className={floppyStyles.floppy_item_container} data-augmented-ui>
        <ImgHoverBtnLinks {...releases["walkingOut"]} />
      </div>
      <div className={floppyStyles.floppy_item_container} data-augmented-ui>
        {cookies.get("secret_steps_done") === 3 &&
        cookies.get("reality_switched") !== true ? (
          <div className="w-full h-full overflow-hidden">
            <RealitySwitchBtn onClick={onSwitchReality} />
          </div>
        ) : (
          <ImgHoverBtnLinks {...releases["realitySwitch"]} />
        )}
      </div>
    </ul>
  );
}
