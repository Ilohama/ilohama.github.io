import { useState } from "react";
import { useTranslations } from "next-intl";
import P2End from "./P2End";
import secrets from "@/secret.json";

export default function P2Last() {
  const [lastPass, setLastPass] = useState("");
  const t = useTranslations("phase2");

  return lastPass === secrets["secret-6"] ? (
    <P2End />
  ) : (
    <div className="flex flex-col items-center justify-center h-full">
      <h3 className="text-2xl mb-2">{t("last_header")}</h3>
      <p className="text-xs text-gray-500">{t("last_msg")}</p>
      <hr className="separator_slate" />
      <input
        type="password"
        value={lastPass}
        onChange={(e) => setLastPass(e.target.value)}
      />
    </div>
  );
}
