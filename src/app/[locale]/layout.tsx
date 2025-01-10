import { ReactNode, use } from "react";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Navigation } from "../../components/NavBar";
import { routing } from "../../lang/routing";
import { notFound } from "next/navigation";
import BaseLayout from "../../components/BaseLayout";
import SlowParticles from "../../components/SlowParticles";

export const metadata: Metadata = {
  title: "iLo's Personal Page",
  description: "Personal page",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Params = Promise<{ locale: string }>;

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) {
  const param = use(params);
  const locale = param.locale;

  if (!routing.locales.includes(locale as "en" | "fr")) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <BaseLayout locale={locale}>
      <div id="root">
        <div className="page_container" data-augmented-ui>
          <SlowParticles />
          <Navigation locale={locale} />
          {children}
        </div>
      </div>
    </BaseLayout>
  );
}
