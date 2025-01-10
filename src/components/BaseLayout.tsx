import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages();
  return (
    <html className="h-full" lang={locale}>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
