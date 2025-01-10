import en from "@/lang/en.json";

type Message = typeof en;

declare global {
    interface IntlMessages extends Message {}
}