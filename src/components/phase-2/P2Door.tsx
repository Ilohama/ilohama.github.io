import { useState } from "react";
import NumPad from "@/components/ui/NumPad";
import { useTranslations } from "next-intl";
import P2Guardian from "./P2Guardian";

export default function P2Door() {
  const [doorKnock, setDoorKnock] = useState("");
  const t = useTranslations("phase2");

  const onPadInput = (num: string) => {
    setDoorKnock(doorKnock + num);
  };

  const onPadClear = () => {
    setDoorKnock("");
  };

  return doorKnock === process.env.NEXT_PUBLIC_SECRET_3 ? (
    <P2Guardian />
  ) : (
    <div className="flex flex-col items-center justify-center h-full">
      <h3 className="text-2xl mb-2">{t("door_header")}</h3>
      <p className="text-xs text-gray-500">{t("door_msg")}</p>
      <hr className="separator_slate" />
      <NumPad onInput={onPadInput} onClear={onPadClear} />
    </div>
  );
}
