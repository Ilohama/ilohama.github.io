import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr"],
  // Used when no locale matches
  defaultLocale: "en",
  // Don't add a locale prefix
  localePrefix: "always",
});

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|__session|.*\\..*).*)",
    // Using only the below paths seems to match every path...
    '/',
    '/(en|fr)/:path*'
  ],
};
