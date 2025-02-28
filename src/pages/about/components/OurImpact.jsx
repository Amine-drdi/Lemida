import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const OurImpact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ne se déclenche qu'une seule fois
    threshold: 0.5, // Déclenche lorsque 50% du composant est visible
  });

  return (
    <div className="relative bg-gradient-to-r from-[#EAEDF3] to-[#F5F7FA]">
      <div
        ref={ref}
        className="flex flex-col gap-16 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding max-w-5xl mx-auto py-16"
      >
        <div className="flex flex-col gap-4">
          <p className="sm:text-3xl text-xl font-bold text-gray-700">
            Notre Impact
          </p>
          <p className="sm:text-base text-sm font-medium max-w-2xl">
            Depuis notre création, nous avons eu un impact significatif dans le
            domaine de la formation médicale en ligne.
          </p>
        </div>
        <div className="flex flex-wrap items-center sm:justify-between justify-center max-sm:gap-6 text-black">
          {[
            { end: 120, label1: "formations spécialisées", label2: "couvrant divers domaines" },
            { end: 10000, label1: "Professionnels", label2: "ont suivi nos formations" },
            { end: 24, label1: "Experts", label2: "offrant un contenu précis" }
          ].map(({ end, label1, label2 }, index) => (
            <div key={index} className="p-4 flex flex-col gap-6 text-center">
              <p className="text-7xl leading-10 font-semibold mb-4">
                {inView ? <CountUp end={end} duration={2} separator="," /> : 0}
              </p>
              <p className="text-xl leading-3 font-medium">{label1}</p>
              <p className="text-base leading-3 font-normal">{label2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurImpact;