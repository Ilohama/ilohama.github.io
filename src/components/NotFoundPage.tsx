import { useTranslations } from "next-intl";
import PageContent from "./PageContent";
import { setRequestLocale } from "next-intl/server";

export default function NotFoundPage() {
  setRequestLocale("en");
  const t = useTranslations("not_found_page");

  return (
    <PageContent>
      <p>{t("description")}</p>
    </PageContent>
  );
}
