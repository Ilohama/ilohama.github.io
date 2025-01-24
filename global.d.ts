import en from "@/i18n/en.json";

type Message = typeof en;

declare global {
  interface IntlMessages extends Message {}
}
