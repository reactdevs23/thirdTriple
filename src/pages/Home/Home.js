import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import UnlockCapabilities from "../../components/UnlockCapabilities/UnlockCapabilities";
import AboutUs from "../../components/AboutUs/AboutUs";
import ReferAndEarn from "../../components/ReferAndEarn/ReferAndEarn";
import PreRegister from "../../components/PreRegister/PreRegister";
import ProtectingYourPeaceOfMind from "../../components/ProtectingYourPeaceOfMind/ProtectingYourPeaceOfMind";
import GetExclusiveRewards from "../../components/GetExclusiveRewards/GetExclusiveRewards";
import Services from "../../components/Services/Services";
import classes from "./Home.module.css";
import VirtualCards from "../../components/VirtualCards/VirtualCards";
import ReadyToStart from "../../components/ReadyToStart/ReadyToStart";
import Faqs from "../../components/Faqs/Faqs";
import LatestNews from "../../components/LatestNews/LatestNews";
import ExploreSecurity from "../../components/ExploreSecurity/ExploreSecurity";
import WhatCanYouDo from "../../components/WhatCanYouDo/WhatCanYouDo";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <UnlockCapabilities />
      <AboutUs />
      <div className={classes.referAndRegister}>
        <ReferAndEarn />
        <PreRegister />
      </div>
      <VirtualCards />
      <ProtectingYourPeaceOfMind />
      <GetExclusiveRewards />
      <Services />
      <WhatCanYouDo />
      <ExploreSecurity />
      <LatestNews />
      <Faqs />
      <div className={classes.referAndStart}>
        <ReferAndEarn />
        <ReadyToStart />
      </div>
    </div>
  );
};

export default Home;
