import React from "react";

const OurMission = () => {
  return (
    <section className="flex items-center justify-center md:px-desktop_padding sm:px-tablet_padding px-mobile_padding max-w-5xl mx-auto py-16">
      <div className="flex md:flex-row flex-col items-center  lg:gap-[72px] md:gap-8">
        <div className="flex justify-start md:py-[68px] py-9">
          <div className="flex flex-col gap-[42px]">
            <div className="flex flex-col gap-[14px]">
              <p className="sm:text-3xl text-xl font-bold text-gray-700">
                Notre mission
              </p>
             {/* <p className="sm:text-base text-sm font-medium">
                Notre mission est de transformer la manière dont les
                professionnels de la santé accèdent à la formation en leur
                offrant des solutions d’apprentissage en ligne innovantes,
                accessibles et adaptées à leurs besoins.
              </p>*/}
               <p className="sm:text-base text-sm font-medium">
               Notre objectif est de révolutionner l'accès à la formation pour les professionnels 
               de la santé en proposant des solutions d’apprentissage en ligne innovantes,
                accessibles et parfaitement adaptées à leurs besoins.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:w-[421px] min-w-[350px] max-sm:w-[320px] max-md:w-[400px]">
          <img
            src="https://t3.ftcdn.net/jpg/04/18/52/88/360_F_418528804_xgyFvVsMSHeWk1UgDtR9aoccqSC7BrHy.jpg"
            alt="our mission"
            className="rounded-md shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
