import { useTranslations } from "next-intl";
import { useState } from "react";
import P2Darker from "./P2Darker";
import secrets from "@/secret.json";

export default function P2Guardian() {
  const [guardianPass, setGuardianPass] = useState("");
  const t = useTranslations("phase2");

  return guardianPass === secrets["secret-4"] ? (
    <P2Darker />
  ) : (
    <div className="flex flex-col items-center justify-center h-full">
      <h3 className="text-2xl mb-2">{t("guardian_header")}</h3>
      <p className="text-xs text-gray-500">{t("guardian_msg")}</p>
      <p className="text-xs text-gray-800">L37-17-BL4NK</p>
      <hr className="separator_slate" />
      <input
        type="password"
        value={guardianPass}
        onChange={(e) => setGuardianPass(e.target.value)}
      />
    </div>
  );
}
