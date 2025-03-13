import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-start w-full md:w-1/2 p-8 text-black">
      <div className="flex flex-col w-full h-fit">
        <h1 className="md:text-3xl text-xl font-bold mb-4 text-primary">Contactez-nous</h1>
        <p className="text-lg mb-6">
          Nous serions ravis de vous entendre ! Que vous ayez une question, un
          retour d'expérience ou besoin d'assistance, notre équipe est là pour
          vous aider.
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <HiPhone className="w-6 h-6 mr-4 text-primary" />
            <span>07 56 82 86 00</span>
          </div>
          <div className="flex items-center ">
            <HiMail className="w-6 h-6 mr-4 text-primary"  />
            <span>contact@lemida.fr</span>
          </div>
          <div className="flex items-center ">
            <HiLocationMarker className="w-6 h-6 mr-4 text-primary" />
            <span>229 RUE SAINT-HONORE, 75001 PARIS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
