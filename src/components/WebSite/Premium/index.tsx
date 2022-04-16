import React from "react";
import SectionTop from "./components/SectionTop";
import SectionBottom from "./components/SectionBottom";
import { ppHeaderTitles } from "../../../constants/PremiumPage";

const Premium = () => {
  const titles = ppHeaderTitles;
  return (
    <>
      <SectionTop headerTitles={titles.section_top} />
      <SectionBottom headerTitles={titles.section_bottom} />
    </>
  );
};

export default Premium;
