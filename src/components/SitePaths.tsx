import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Musics from "../pages/Musics";
import DevInfos from "src/pages/DevInfos";
import Contacts from "../pages/Contacts";
import Legals from "src/pages/Legals";

function SitePaths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/musics" element={<Musics />} />
      <Route path="/devinfos" element={<DevInfos />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/legals" element={<Legals />} />
    </Routes>
  );
}

export default SitePaths;
