import { ReactNode } from "react";
import styles from "./PopUp.module.scss";
import { IoCloseSharp } from "react-icons/io5";

export default function PopUp({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className={styles.popup_container} data-augmented-ui>
      <div className={styles.popup_closer} data-augmented-ui="br-clip bl-clip">
        <button onClick={onClose}>
          <IoCloseSharp className="text-4xl" />
        </button>
      </div>
      {children}
    </div>
  );
}
