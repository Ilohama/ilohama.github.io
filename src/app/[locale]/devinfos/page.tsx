"use client";
import { FaBriefcase, FaCode, FaEye, FaGraduationCap } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import ExpandableBox from "@/components/ui/ExpandableBox";
import { useTranslations } from "next-intl";
import PageContent from "@/components/layout/PageContent";
import { Navigation } from "@/components/ui/NavBar";
import RootScreen from "@/components/layout/RootScreen";
import { usePathname } from "next/navigation";
import Cookies from "universal-cookie";
import { useRouter } from "@/i18n/routing";

export default function DevInfos() {
  const locale = usePathname()?.split("/")[1];
  const t = useTranslations("dev_infos");
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();

  const onLeelooFreeTime = () => {
    router.push("/" + process.env.NEXT_PUBLIC_LINK);
  };

  return (
    <RootScreen>
      <Navigation locale={locale} />
      <PageContent>
        <h1 className="flex flex-row items-center mt-2 align-text-bottom text-4xl font-futuristic">
          <FaCode className="hidden md:block mr-4" />
          {t("header")}
          <FaCode className="hidden md:block ml-4" />
        </h1>
        <hr className="separator_secondary" />
        <ExpandableBox
          title={
            <>
              <FaGraduationCap className="mr-4" />
              {t("grades.lbl")}
            </>
          }
        >
          <div>
            <h3 className="small_header_text_block">
              {t("grades.beginning_lbl")} :
            </h3>
            <p className="text_block">{t("grades.beginning_desc")}</p>
          </div>
          <div>
            <h3 className="small_header_text_block">
              {t("grades.revelation_lbl")} :
            </h3>
            <p className="text_block">{t("grades.revelation_desc")}</p>
          </div>
          <div>
            <h3 className="small_header_text_block">
              {t("grades.pursuit_lbl")} :
            </h3>
            <p className="text_block">{t("grades.pursuit_desc")}</p>
          </div>
        </ExpandableBox>
        <hr className="separator_slate" />
        <ExpandableBox
          title={
            <>
              <FaBriefcase className="mr-4" />
              {t("jobs.lbl")}
            </>
          }
        >
          <p className="text_block">{t("jobs.desc")}</p>
        </ExpandableBox>
        <hr className="separator_slate" />
        <ExpandableBox
          title={
            <>
              <GiPartyPopper className="mr-4" />
              {t("freetime.lbl")}
            </>
          }
        >
          <p className="text_block">{t("freetime.desc")}</p>
          {cookies.get("leeloo_vision") === true ? (
            <button onClick={onLeelooFreeTime}>
              <FaEye />
            </button>
          ) : (
            ""
          )}
        </ExpandableBox>
      </PageContent>
    </RootScreen>
  );
}
