import React from "react";
import {
  FaBriefcase,
  FaCode,
  FaDownload,
  FaFilePdf,
  FaGraduationCap,
} from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import ExpandableBox from "src/components/ExpandableBox";

const DevInfos = () => {
  const { t } = useTranslation();

  return (
    <div className="page_content_container">
      <h1 className="flex flex-row items-center mt-2 align-text-bottom text-4xl font-futuristic">
        <FaCode className="hidden md:block mr-4" />
        {t("dev_infos.header")}
        <FaCode className="hidden md:block ml-4" />
      </h1>
      <hr className="separator_secondary" />
      <ExpandableBox
        title={
          <>
            <FaGraduationCap className="mr-4" />
            {t("dev_infos.grades.lbl")}
          </>
        }
      >
        <div>
          <h3 className="small_header_text_block">
            {t("dev_infos.grades.beginning_lbl")} :
          </h3>
          <p className="text_block">{t("dev_infos.grades.beginning_desc")}</p>
        </div>
        <div>
          <h3 className="small_header_text_block">
            {t("dev_infos.grades.revelation_lbl")} :
          </h3>
          <p className="text_block">{t("dev_infos.grades.revelation_desc")}</p>
        </div>
        <div>
          <h3 className="small_header_text_block">
            {t("dev_infos.grades.pursuit_lbl")} :
          </h3>
          <p className="text_block">{t("dev_infos.grades.pursuit_desc")}</p>
        </div>
      </ExpandableBox>
      <hr className="separator_slate" />
      <ExpandableBox
        title={
          <>
            <FaBriefcase className="mr-4" />
            {t("dev_infos.jobs.lbl")}
          </>
        }
      >
        <p className="text_block">{t("dev_infos.jobs.desc")}</p>
      </ExpandableBox>
      <hr className="separator_slate" />
      <ExpandableBox
        title={
          <>
            <GiPartyPopper className="mr-4" />
            {t("dev_infos.freetime.lbl")}
          </>
        }
      >
        <p className="text_block">{t("dev_infos.freetime.desc")}</p>
      </ExpandableBox>
      <hr className="separator_slate" />
      <ExpandableBox
        title={
          <>
            <FaFilePdf className="mr-4" />
            {t("dev_infos.resume.lbl")}
          </>
        }
      >
        <p className="flex items-center justify-between text_block">
          {t("dev_infos.resume.desc")}
          <a
            href="docs/CV_Leeloo_Franchi_FR.pdf"
            target="_blank"
            className="block w-fit"
          >
            <button
              className="btn_futuristic_secondary underline flex flex-row items-center justify-center text-lg w-32 ml-2"
              data-augmented-ui="bl-clip tr-clip"
            >
              <FaDownload />
            </button>
          </a>
        </p>
      </ExpandableBox>
    </div>
  );
};

export default DevInfos;
