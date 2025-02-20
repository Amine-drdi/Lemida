import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="w-full px-4 sm:px-6 md:px-8 bg-gray-900 text-gray-200">
      <div className="flex flex-col gap-8 py-8 md:py-16">
        {/* Logos section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-screen-xl mx-auto px-4">
    {/* Logo Lemida */}
    <div className="w-32 h-16 bg-white flex items-center justify-center">
      <NavLink to="/">
        <img
          className="w-full h-full object-contain"
          src="/images/logo_lemida.png"
          alt="Lemida"
        />
      </NavLink>
    </div>

    {/* Certificat */}
    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
      <img
        src="/images/qualiopi.png"
        alt="Qualiopi"
        className="w-24 h-16 bg-white"
      />
      <div className="text-center sm:text-left">
        <p className="text-gray-300">La certification qualité a été délivrée au titre de :</p>
        <p className="font-semibold">Actions de formation</p>
      </div>
    </div>
  </div>


          
        </div>

        {/* Navigation sections */}
        <div className="flex justify-center w-full max-w-screen-xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 text-center md:text-left">
      {/* Découvrir Lemida */}
      <div className="px-0.5">
        <p className="text-lg font-medium -mb-2">Découvrir Lemida</p>
        <ul className="text-sm space-y-0">
          <li><NavLink to="/formations/categorie/sante" className="hover:underline">Santé</NavLink></li>
          <li><NavLink to="/formations/categorie/btp" className="hover:underline">Bâtiment</NavLink></li>
          <li><NavLink to="/formations/juridique/juridique-et-administrative" className="hover:underline">Juridique et Administrative</NavLink></li>
          <li><NavLink to="/a-propos" className="hover:underline">À propos</NavLink></li>
          <li><NavLink to="/contact" className="hover:underline">Contactez-nous</NavLink></li>
        </ul>
      </div>

      {/* Informations légales */}
      <div className="px-0.5">
        <p className="text-lg font-medium -mb-2">Informations légales</p>
        <ul className="text-sm space-y-0">
          <li><NavLink to="/politiques-de-confidentialite" className="hover:underline">Politique de confidentialité</NavLink></li>
          <li><NavLink to="/conditions-generales" className="hover:underline">Conditions générales</NavLink></li>
          <li><NavLink to="/mentions-legales" className="hover:underline">Mentions légales</NavLink></li>
        </ul>
      </div>

      {/* Contact */}
      <div className="px-0.5">
        <p className="text-lg font-medium -mb-2">Contact</p>
        <ul className="text-sm space-y-0">
          <li className="flex justify-center md:justify-start items-center gap-0.5">
            <GoHome className="w-3 h-3" />
            <span>229 RUE SAINT-HONORE, 75001 PARIS</span>
          </li>
          <li className="flex justify-center md:justify-start items-center gap-0.5">
            <MdOutlinePhone className="w-3 h-3" />
            <span>07 56 82 86 00</span>
          </li>
          <li className="flex justify-center md:justify-start items-center gap-0.5">
            <MdOutlineMail className="w-3 h-3" />
            <span>contact@lemida.fr</span>
          </li>
        </ul>
      </div>
    </div>
  </div>


        {/* Social media and copyright */}
        <div className="flex flex-col items-center sm:flex-row justify-between border-t border-gray-700 pt-6 text-sm">
          <p>&copy; {currentDate} Lemida.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
  {/* SIRET et NDA */}
  <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-center md:text-left">
    <div className="flex flex-col gap-1">
      <p className="font-semibold">SIRET :</p>
      <p className="text-gray-500">932 315 914 00014</p>
    </div>
    <div className="flex flex-col gap-1">
      <p className="font-semibold">NDA :</p>
      <p className="text-gray-500">11757074975</p>
    </div>
    <div className="flex flex-col gap-1 mt-2 md:mt-0">
      <p className="font-semibold">Délivré par :</p>
      <p className="text-gray-500">La Préfecture de Région de l'île-de-France</p>
    </div>
  </div>
</div>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://www.facebook.com/@lemida" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/@lemida" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-400 transition">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/@lemida" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-700 transition">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
