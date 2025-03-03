import React from "react";
import img1 from "../../../../public/images/mission2.jpg";
import { FaGraduationCap, FaGlobe, FaUserCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <section className="flex items-center justify-center px-6 md:px-16 max-w-6xl mx-auto py-16 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex flex-col gap-6 md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary">Notre mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous révolutionnons l'accès à la formation pour les professionnels de la santé, du bâtiment ainsi que du secteur juridique et administratif en proposant des solutions d’apprentissage en ligne innovantes, flexibles et adaptées à leurs besoins spécifiques.
          </p>
          <hr className="border-gray-300" />
          <h3 className="text-xl font-semibold text-gray-700">Notre engagement</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaGraduationCap className="text-3xl text-blue-500" />
              <span className="text-lg font-medium">Offrir des parcours pédagogiques de qualité</span>
            </div>
            <div className="flex items-center gap-3">
              <FaGlobe className="text-3xl text-green-500" />
              <span className="text-lg font-medium">Accessibles partout et à tout moment</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUserCheck className="text-3xl text-purple-500 ml-2" />
              <span className="text-lg font-medium">Accompagnement pour chaque professionnel dans son évolution et sa réussite</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={img1}
            alt="Notre mission"
            className="rounded-lg shadow-lg object-cover w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
