import React from "react";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import OurMission from "./components/OurMission";
import OurImpact from "./components/OurImpact";
import OurApproach from "./components/OurApproach";
import Founder from "./components/Founder";

const About = () => {
  return (
    <div>
      <Hero />
      <OurStory />
      <OurMission />
      <OurImpact />
      <OurApproach />
      <Founder/>
    </div>
  );
};

export default About;
