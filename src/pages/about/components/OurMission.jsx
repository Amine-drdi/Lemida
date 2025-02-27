import React from "react";
import img1 from "../../../../public/images/mission2.jpg"
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
               Nous révolutionnons l'accès à la formation pour les professionnels de la santé, du bâtiment ainsi que du secteur juridique et administratif en proposant des solutions d’apprentissage en ligne innovantes, flexibles et adaptées à leurs besoins spécifiques. Notre engagement : offrir des parcours pédagogiques de qualité, accessibles partout et à tout moment, afin d’accompagner chaque professionnel dans son évolution et sa réussite.              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:w-[421px] min-w-[350px] max-sm:w-[320px] max-md:w-[400px]">
          <img
            src={img1}
            alt="our mission"
            className="rounded-md shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
