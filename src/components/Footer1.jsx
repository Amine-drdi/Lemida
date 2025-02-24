import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="w-full px-4 sm:px-6 md:px-800 bg-gray-900 text-gray-200 pt-300 pb-4">
      <div className="flex flex-col gap-8 py-8 md:py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 md:py-16 w-full max-w-screen-xl mx-auto px-4">
      {/* Première colonne : Logos et Navigation */}
      <div className="flex flex-col gap-8">
        {/* Logos */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-32 h-16 bg-white flex items-center justify-center">
            <NavLink to="/">
              <img className="w-full h-full object-contain" src="/images/logo_lemida.png" alt="Lemida" />
            </NavLink>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4 text-sm">
            <img src="/images/qualiopi.png" alt="Qualiopi" className="w-24 h-16 bg-white" />
            <div className="text-left">
              <p className="text-gray-300">La certification qualité a été délivrée au titre de :</p>
              <p className="font-semibold">Actions de formation</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Découvrir Lemida */}
          <div>
            <p className="text-base font-medium mb-2">Découvrir Lemida</p>
            <ul className="text-xs space-y-1">
              <li><NavLink to="/formations/categorie/sante">Santé</NavLink></li>
              <li><NavLink to="/formations/categorie/btp" className="hover:underline">Bâtiment</NavLink></li>
              <li><NavLink to="/formations/juridique/juridique-et-administrative" className="hover:underline">Juridique et Administrative</NavLink></li>
              <li><NavLink to="/a-propos" className="hover:underline">À propos</NavLink></li>
              <li><NavLink to="/contact" className="hover:underline">Contactez-nous</NavLink></li>
            </ul>
          </div>
          
          {/* Informations légales */}
          <div>
            <p className="text-base font-medium mb-2">Informations légales</p>
            <ul className="text-xs space-y-1">
              <li><NavLink to="/politiques-de-confidentialite" className="hover:underline">Politique de confidentialité</NavLink></li>
              <li><NavLink to="/conditions-generales" className="hover:underline">Conditions générales</NavLink></li>
              <li><NavLink to="/mentions-legales" className="hover:underline">Mentions légales</NavLink></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <p className="text-base font-medium mb-2">Contact</p>
            <ul className="text-xs space-y-1">
              <li className="flex items-center gap-1">
                <GoHome className="w-4 h-4" />
                <span>229 RUE SAINT-HONORE, 75001 PARIS</span>
              </li>
              <li className="flex items-center gap-1">
                <MdOutlinePhone className="w-4 h-4" />
                <span>07 56 82 86 00</span>
              </li>
              <li className="flex items-center gap-1">
                <MdOutlineMail className="w-4 h-4" />
                <span>contact@lemida.fr</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Deuxième colonne : Localisation */}
      <div>
        <p className="text-base font-medium mb-2">Localisation</p>
        <iframe
          title="Google Maps Location"
          className="w-full h-64 rounded-lg"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5915744864317!2d2.331891076573113!3d48.86605170033998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e35bb69eb65%3A0x15e8ab32bb8b1b57!2s229%20Rue%20Saint-Honor%C3%A9%2C%2075001%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1708445158767!5m2!1sen!2sfr"
          allowFullScreen
        ></iframe>
      </div>
    </div>



        {/* Social media and copyright */}
        <div className="flex flex-col items-center sm:flex-row justify-between border-t border-gray-700 pt-4 text-xs">
  <div className="flex flex-row gap-1 items-center">
    <p>&copy; {currentDate} Lemida.</p>
  </div>

  <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
    <div className="flex flex-row gap-2 items-center">
      <p className="font-semibold">SIRET :</p>
      <p className="text-gray-500">932 315 914 00014</p>
    </div>
    <div className="flex flex-row gap-2 items-center">
      <p className="font-semibold">NDA :</p>
      <p className="text-gray-500">11757074975</p>
    </div>
    <div className="flex flex-row gap-2 items-center">
      <p className="font-semibold">Délivré par :</p>
      <p className="text-gray-500">La Préfecture de Région de l'île-de-France</p>
    </div>
  </div>

  <div className="flex space-x-3 mt-2 sm:mt-0">
    <a href="https://www.facebook.com/@lemida" target="_blank" rel="noreferrer" className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition">
      <FaFacebookF className="w-3 h-3" />
    </a>
    <a href="https://www.instagram.com/@lemida" target="_blank" rel="noreferrer" className="w-7 h-7 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-400 transition">
      <FaInstagram className="w-3 h-3" />
    </a>
    <a href="https://www.linkedin.com/@lemida" target="_blank" rel="noreferrer" className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-700 transition">
      <FaLinkedinIn className="w-3 h-3" />
    </a>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
