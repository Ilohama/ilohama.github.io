import { FaEye } from "react-icons/fa";
import styles from "./EyeBtns.module.scss";

export type EyeBtnProps = {
  onClick: () => void;
};

export function EndEyeBtn({ onClick }: EyeBtnProps) {
  return (
    <button
      className={styles.end_eye_btn}
      onClick={onClick}
      data-augmented-ui="tr-round bl-round"
    >
      <FaEye />
    </button>
  );
}

export function PinkEyeBtn({ onClick }: EyeBtnProps) {
  return (
    <button
      className={styles.pink_eye_btn}
      data-augmented-ui="inlay tl-round br-round"
      onClick={onClick}
    >
      <FaEye />
    </button>
  );
}

export function BlueEyeBtn({ onClick }: EyeBtnProps) {
  return (
    <button
      className={styles.blue_eye_btn}
      onClick={onClick}
      data-augmented-ui="tl-round br-round"
    >
      <FaEye />
    </button>
  );
}

export function GreenEyeBtn({ onClick }: EyeBtnProps) {
  return (
    <button
      className={styles.green_eye_btn}
      onClick={onClick}
      data-augmented-ui="tl-round br-round"
    >
      <FaEye />
    </button>
  );
}

export function DarkEyeBtn({ onClick }: EyeBtnProps) {
  return (
    <button
      className={styles.dark_eye_btn}
      onClick={onClick}
      data-augmented-ui="tl-round br-round"
    >
      <FaEye />
    </button>
  );
}

export function RealitySwitchBtn({ onClick }: EyeBtnProps) {
  return (
    <button className={styles.reality_switch_eye_btn} onClick={onClick}>
      <FaEye />
    </button>
  );
}
