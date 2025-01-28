"use client";
import { useTranslations } from "next-intl";
import { FaAt, FaGithub, FaLinkedin } from "react-icons/fa";
import PageContent from "@/components/PageContent";
import Cookies from "universal-cookie";
import { usePathname } from "next/navigation";
import RootScreen from "@/components/RootScreen";
import { Navigation } from "@/components/NavBar";
import { Link } from "@/i18n/routing";

const Contact = () => {
  const locale = usePathname()?.split("/")[1];
  const cookies = new Cookies(null, { path: "/" });
  const t = useTranslations("contacts");

  return (
    <RootScreen>
      <Navigation locale={locale} />
      <PageContent>
        <h1 className="flex flex-row items-center mt-2 text-4xl">
          <FaAt className="hidden md:block mr-6" />
          <p className="align-text-bottom font-futuristic">
            <span className="text-5xl">C</span>ontacts
          </p>
          <FaAt className="hidden md:block ml-6" />
        </h1>
        <hr className="separator_secondary" />
        <div className="flex flex-col items-center">
          <h3 className="text-2xl">{t("socials_lbl")}</h3>
          <div className="flex flex-row items-start">
            <a
              href="https://github.com/Ilohama"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center justify-center underline mr-2"
            >
              <FaGithub className="mr-2" />
              Github
            </a>
            |
            <a
              href="https://www.linkedin.com/in/leeloo-franchi-358a8686"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center justify-center underline"
            >
              <FaLinkedin className="mx-2" />
              LinkedIn
            </a>
          </div>
        </div>
        <hr className="separator_slate" />
        <div className="flex flex-col items-center">
          <h3 className="text-2xl">E-Mails</h3>
          <div className="flex flex-row items-start">
            <p>
              Music :{" "}
              <a
                href="mailto:ilohama@vivaldi.net"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                ilohama@vivaldi.net
              </a>{" "}
              | Dev :{" "}
              <a
                href="mailto:leeloo.franchi@proton.me"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                leeloo.franchi@proton.me
              </a>
            </p>
          </div>
          {cookies.get("myCat") === true ? (
            <>
              <hr className="separator_slate" />
              <div className="flex flex-col items-center">
                <Link href="/kitty">{t("kitty_lbl")}</Link>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </PageContent>
    </RootScreen>
  );
};

export default Contact;
