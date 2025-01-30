"use client";
import styles from "./numpad.module.scss";

export type NumPadProps = {
  onInput: (num: string) => void;
  onClear: () => void;
};

type NumPadBtnProps = {
  num: string;
  onClick: (num: string) => void;
};

const NumPadBtn = ({ num, onClick }: NumPadBtnProps) => {
  return (
    <button
      onClick={() => onClick(num)}
      className={styles.numpad_btn}
      data-augmented-ui="tr-clip br-clip tl-clip bl-clip"
    >
      {num}
    </button>
  );
};

const NumPad = (props: NumPadProps) => {
  return (
    <div className={styles.numpad_container} data-augmented-ui="border br-clip">
      <NumPadBtn num="1" onClick={props.onInput} />
      <NumPadBtn num="2" onClick={props.onInput} />
      <NumPadBtn num="3" onClick={props.onInput} />
      <NumPadBtn num="4" onClick={props.onInput} />
      <NumPadBtn num="5" onClick={props.onInput} />
      <NumPadBtn num="6" onClick={props.onInput} />
      <NumPadBtn num="7" onClick={props.onInput} />
      <NumPadBtn num="8" onClick={props.onInput} />
      <NumPadBtn num="9" onClick={props.onInput} />
      <button
        onClick={props.onClear}
        className={styles.numpad_btn + " text-yellow-500 bg-yellow-950"}
        data-augmented-ui="tr-clip br-clip tl-clip bl-clip"
      >
        C
      </button>
      <NumPadBtn num="0" onClick={props.onInput} />
    </div>
  );
};

export default NumPad;
