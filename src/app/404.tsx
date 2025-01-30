import RootScreen from "@/components/layout/RootScreen";
import Link from "next/link";

export default function Custom404() {
  const locale = "en";
  return (
    <html className="h-full" lang={locale}>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <RootScreen>
          <div className="flex flex-col items-center justify-center h-full">
            <h1>404 - Page Not Found</h1>
            <Link href={"/"}>Home</Link>
          </div>
        </RootScreen>
      </body>
    </html>
  );
}
