import RootScreen from "@/components/layout/RootScreen";
import Custom404 from "./404";

export default function GlobalNotFount() {
  const locale = "en";
  return (
    <html className="h-full" lang={locale}>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <RootScreen>
          <Custom404 />
        </RootScreen>
      </body>
    </html>
  );
}
