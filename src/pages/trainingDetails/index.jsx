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
import {trainings} from '../../assets/data/trainings';
import { useParams } from 'react-router-dom';
import { FaUserInjured } from "react-icons/fa6";
import { TbCoinEuro } from "react-icons/tb";
import { FaUserMd } from "react-icons/fa";
import { FaSyringe } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";

const TrainingDetails = () => {
  const { id } = useParams();
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
  const formation = trainings.find((f) => f.id === parseInt(id));

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const rectDescription = descriptionRef.current.getBoundingClientRect();
        const rectSkills = skillsRef.current.getBoundingClientRect();
        const rectProgram = programRef.current.getBoundingClientRect();
        const rectAids = aidsRef.current.getBoundingClientRect();
        const rectTestimonials = testimonialsRef.current.getBoundingClientRect();

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
      
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
const professionals = Array.isArray(formation.professionals) ? formation.professionals : [];
  return (
    <div className="relative flex flex-col bg-gray-100">
      {/* Header avec image et titre */}
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={formation.image} 
          alt={formation.title}
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl font-extrabold text-white mb-4">{formation.title}</h1>
            
          </div>
        </div>
      </div>

     

      {/* Section principale */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Contenu principal */}
        <div className="lg:w-2/3">
          {/* Onglets */}
          <div ref={elementRef} className="bg-white rounded-lg shadow-sm mb-6">
            <Tab 
              toggleResults={toggleResults}
              setToggleResults={setToggleResults}
            />
          </div>

          {/* Sections de contenu */}
          <div className="space-y-12">
            <div ref={descriptionRef} className="bg-white p-6 rounded-lg shadow-sm">
              <Description formation={formation}/>
            </div>

            <div ref={programRef} className="bg-white p-6 rounded-lg shadow-sm">
              <Program formation={formation} />
            </div>

            <div ref={skillsRef} className="bg-white p-6 rounded-lg shadow-sm">
              <Skills formation={formation}/>
            </div>

            {/*<div ref={aidsRef} className="bg-white p-6 rounded-lg shadow-sm">
              <Aids 
                setShowEligibilityForm={setShowEligibilityForm}
                formation={formation}
              />
            </div>*/}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-6">
          {/* Bloc récapitulatif */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
  <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Informations pratiques
  </h3>
  <div className="space-y-5">
    <div className="flex items-start gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <p className="text-sm font-medium text-gray-500">Durée</p>
        <p className="font-medium text-gray-700">{formation.duration}</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <TbCoinEuro className="h-5 w-5 mt-0 text-primary" />
      <div>
        <p className="text-sm font-medium text-gray-500">Tarif</p>
        <p className="font-medium text-gray-700">{formation.tarif} <span className="text-primary">€</span></p>
      </div>
    </div>

    <div className="flex items-start gap-3">
     <FaUserInjured className="h-5 w-5 mt-0.5 text-primary" />
      <div>
        <p className="text-sm font-medium text-gray-500">Public</p>
        <p className="font-medium text-gray-700">{formation.Public}</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <div>
        <p className="text-sm font-medium text-gray-500">Numéro de l'action DPC</p>
        <p className="font-medium text-gray-700">{formation.numeroActionDPC}</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
      <div>
        <p className="text-sm font-medium text-gray-500">Financements</p>
        <p className="font-medium text-gray-700">{formation.Financements}</p>
      </div>
    </div>

    {formation.avantage && (
      <div className="flex items-start gap-3 pt-3 border-t border-primary">
       
        <div>
          <p className="text-sm font-medium text-primary">Avantages</p>
          {formation.avantage.split('\n').map((line, index) => (
          <p key={index} className="text-sm text-gray-700">
          {line}
          </p>
           ))}<br/>
         <p className="text-sm text-gray-700"><span className="text-sm text-red-700">*</span>{ formation.remarqueAvantage}</p>
        </div>
      </div>
    )}
  </div>

  

</div>
{professionals.length > 0 && (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
      <AiOutlineTeam className="h-6 w-6 text-primary" />
      Équipe pédagogique
    </h3>

    <div className="space-y-5">
      {professionals.map((person, index) => (
        <div key={index} className="flex items-start gap-3">
          
          <div>
            <p className="font-medium text-gray-700">{person.name}</p>

            
            <p className="text-sm text-gray-500">{person.profession}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          {/* Bloc formateur */}
          {formation.instructors && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Formateur(s)</h3>
              <div className="space-y-4">
                {formation.instructors.map((instructor, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <img 
                      src={instructor.image || "https://via.placeholder.com/150"} 
                      alt={instructor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{instructor.name}</p>
                      <p className="text-sm text-gray-600">{instructor.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bouton d'inscription */}
          <button 
            onClick={() => setShowInscriptionForm(true)}
            className="bg-primary hover:bg-secondary hover:text-primary border border-transparent overflow-hidden text-white font-medium py-3 px-6 rounded-lg transition-colors hover:border-primary"
          >
            S'inscrire à la formation
          </button>

       <button 
  onClick={() => setShowEligibilityForm(true)}
  className="bg-secondary hover:bg-primary text-primary hover:text-white border border-primary font-medium py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15V3M12 15L8 11M12 15L16 11M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  Télécharger le programme
</button>
        </div>
      </div>

      {/* Fixed tab en haut */}
      {isReached && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <div className="container mx-auto px-4">
            <FixedTab
              setShowInscriptionForm={setShowInscriptionForm}
              toggleResults={toggleResults}
              setToggleResults={setToggleResults}
              formation={formation}
            />
          </div>
        </div>
      )}

      {/* Modales */}
      {showInscriptionForm && (
        <InscriptionForm 
          setShowInscriptionForm={setShowInscriptionForm}
          formation={formation}
        />
      )}
      {showEligibilityForm && (
        <EligibilityForm 
          setShowEligibilityForm={setShowEligibilityForm}
          formation={formation}
        />
      )}
    </div>
  );
};

export default TrainingDetails;