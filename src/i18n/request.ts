import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export const locales = ["en", "fr"];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "fr")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./${locale}.json`)).default,
  };
});
