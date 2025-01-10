import { useLocale } from "use-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return <LocaleSwitcherSelect defaultValue={locale} />;
}
