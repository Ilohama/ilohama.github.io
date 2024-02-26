import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SlowParticles from "./components/SlowParticles";
import NavBar from "./components/NavBar";
import SitePaths from "./components/SitePaths";
import "./App.scss";

function App() {
  const { i18n } = useTranslation();
  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <div className="page_container" data-augmented-ui>
      <SlowParticles />
      <Router>
        <NavBar
          onClickLanguageChange={onClickLanguageChange}
          initalLang={i18n.language}
        />
        <SitePaths />
      </Router>
    </div>
  );
}

export default App;
