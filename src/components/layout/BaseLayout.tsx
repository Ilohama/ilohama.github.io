import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout(props: Props) {
  const messages = await getMessages(props);

  return (
    <html className="h-full" lang={props.locale}>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <NextIntlClientProvider messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
