import { useTranslations } from "next-intl";
import { useState } from "react";
import P2Last from "./P2Last";

export default function P2Darker() {
  const [darkerPass, setDarkerPass] = useState(["", "", ""]);
  const t = useTranslations("phase2");

  return darkerPass[0] + "-" + darkerPass[1] + "-" + darkerPass[2] ===
    process.env.NEXT_PUBLIC_SECRET_5 ? (
    <P2Last />
  ) : (
    <div className="flex flex-col items-center justify-center h-full">
      <h3 className="text-2xl mb-2">{t("darker_header")}</h3>
      <p className="text-xs text-gray-500">
        <input
          type="password"
          value={darkerPass[0]}
          onChange={(e) =>
            setDarkerPass([e.target.value, darkerPass[1], darkerPass[2]])
          }
          className="w-6 mr-2"
        />
        {t("darker_msg")}
        <input
          type="password"
          value={darkerPass[1]}
          onChange={(e) =>
            setDarkerPass([darkerPass[0], e.target.value, darkerPass[2]])
          }
          className="w-6 ml-2"
        />
      </p>
      <hr className="separator_slate" />
      <input
        type="password"
        value={darkerPass[2]}
        onChange={(e) =>
          setDarkerPass([darkerPass[0], darkerPass[1], e.target.value])
        }
        className="w-12"
      />
    </div>
  );
}
