import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { Locale } from "@/i18n/routing";
import { IoLanguage } from "react-icons/io5";
import styles from "./localeSwitcher.module.scss";

type Props = {
  defaultValue: string;
};

export default function LocaleSwitcherSelect({ defaultValue }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    const newPath = pathname.replace(/en|fr/, nextLocale);
    startTransition(() => {
      router.replace(newPath);
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
