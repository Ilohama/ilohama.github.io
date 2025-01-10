import { useParams } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { IoLanguage } from "react-icons/io5";
import styles from "./localeSwitcher.module.scss";

type Props = {
  defaultValue: string;
};

export default function LocaleSwitcherSelect({ defaultValue }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className={styles.langContainer} data-augmented-ui="bl-clip">
      <IoLanguage className="text-slate-300" />
      <select
        id={styles.langSelector}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        <option value="en">En</option>
        <option value="fr">Fr</option>
      </select>
    </div>
  );
}
