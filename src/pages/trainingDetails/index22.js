import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./components/Hero";
import Recap from "./components/Recap";
import Tab from "./components/Tab";
import FixedTab from "./components/FixedTab";
import Description from "./components/Description";
import Skills from "./components/Skills";
import Program from "./components/Program";
import Testimonials from "./components/Testimonials";
import Aids from "./components/Aids";
import InscriptionForm from "./components/InscriptionForm";
import EligibilityForm from "./components/EligibilityForm";

const TrainingDetails = () => {
  const elementRef = useRef(null);
  const descriptionRef = useRef(null);
  const skillsRef = useRef(null);
  const programRef = useRef(null);
  const aidsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [isReached, setIsReached] = useState(false);
  const [showInscriptionForm, setShowInscriptionForm] = useState(false);
  const [showEligibilityForm, setShowEligibilityForm] = useState(false);
  const [toggleResults, setToggleResults] = useState("Description");

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const rectDescription = descriptionRef.current.getBoundingClientRect();
        const rectSkills = skillsRef.current.getBoundingClientRect();
        const rectProgram = programRef.current.getBoundingClientRect();
        const rectAids = aidsRef.current.getBoundingClientRect();
        const rectTestimonials =
          testimonialsRef.current.getBoundingClientRect();

        if (rect.top <= 50) {
          setIsReached(true);
        } else {
          setIsReached(false);
        }
        if (rectDescription.top <= 220) {
          setToggleResults("Description");
        }
        if (rectSkills.top <= 220) {
          setToggleResults("Compétences développées");
        }
        if (rectProgram.top <= 220) {
          setToggleResults("Programmes");
        }
        if (rectAids.top <= 220) {
          setToggleResults("Financements");
        }
        if (rectTestimonials.top <= 220) {
          setToggleResults("Témoignages");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative flex flex-col gap-5 py-5">
      <div className="flex flex-row gap-2 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding">
        <NavLink
          to="/"
          className="max-sm:hidden text-base font-normal text-gray-700"
        >
          Accueil
        </NavLink>{" "}
        <p className="sm:hidden text-base font-normal text-gray-700">...</p>
        <span className="text-base font-normal text-gray-700">|</span>
        <p className="max-sm:hidden text-base font-normal text-gray-700">
          Infirmiers
        </p>
        <p className="sm:hidden text-base font-normal text-gray-700">...</p>
        <span className="text-base font-normal text-gray-700">|</span>
        <p className="text-base font-normal text-gray-700 line-clamp-1">
          Formation Plaies et cicatrisation
        </p>
      </div>
      <Hero setShowInscriptionForm={setShowInscriptionForm} />
      <Recap />
      <div className="md:px-desktop_padding sm:px-tablet_padding px-mobile_padding py-5 flex flex-col gap-14">
        <div ref={elementRef}>
          <Tab
            toggleResults={toggleResults}
            setToggleResults={setToggleResults}
          />
        </div>
        <div ref={descriptionRef}>
          <Description />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={programRef}>
          <Program />
        </div>
        <div ref={aidsRef}>
          <Aids setShowEligibilityForm={setShowEligibilityForm} />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full z-[1500] ${
          isReached ? "translate-y-0" : "-translate-y-full"
        } duration-700 ease-in-out`}
      >
        <FixedTab
          setShowInscriptionForm={setShowInscriptionForm}
          toggleResults={toggleResults}
          setToggleResults={setToggleResults}
        />
      </div>
      {showInscriptionForm && (
        <InscriptionForm setShowInscriptionForm={setShowInscriptionForm} />
      )}
      {showEligibilityForm && (
        <EligibilityForm setShowEligibilityForm={setShowEligibilityForm} />
      )}
    </div>
  );
};

export default TrainingDetails;