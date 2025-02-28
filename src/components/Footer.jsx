import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="w-full px-4 sm:px-6 md:px-8 bg-gray-900 text-gray-200 ">
      <div className="flex flex-col gap-4 py-2 md:py-5">
        {/* Logos section */}

        <div className="flex flex-col md:flex-row items-start justify-start gap-10 w-full max-w-screen-xl mx-auto px-16">
            {/* Logo Lemida */}
            <div className="flex flex-col items-start gap-2">
  <div className="w-32 h-16 bg-white flex items-center justify-center">
    <NavLink to="/">
      <img
        className="w-full h-full object-contain"
        src="/images/logo_lemida.png"
        alt="Lemida"
      />
    </NavLink>
  </div>
  <div className="text-gray-300 text-xs">
    <p className="m-0 p-0 ">
    Lemida est un organisme de formation <br/>  dédié à la montée en compétences<br/> 
     des professionnels et des entreprises.<br/>  En combinant expertise et pédagogie <br/> 
     innovante, nous proposons des formations<br/>  adaptées aux exigences actuelles<br/> 
      du marché et aux besoins <br/> spécifiques de chaque apprenant.
    </p>
  </div>
</div>

  {/* Certificat */}
  <div className="flex flex-col items-start gap-2 text-xs sm:text-left ">
  <img src="/images/logo-qualiopi.jpeg" alt="Qualiopi" className="w-40 h-20 bg-white" />
  <div className="text-gray-300">
    <p className="m-0 p-0">
      Notre organisme est certifié Qualiopi<br/> 
      pour les actions de formation (L.6313-1 - 1°).<br/> 
      Cette certification atteste de la qualité des<br/>
       processus que nous mettons en œuvre pour accompagner<br/>
        nos clients dans leur montée en compétences,<br/>
         conformément au référentiel national de certification qualité. <br/><br/><br/>
    </p>
  </div>
</div>
                   </div>
 {/* Navigation sections */}
  <div className="grid grid-cols-1 sm:grid-cols md:grid-cols-4 gap-[0px] text-center md:text-left mx-16">
  {/* Découvrir Lemida */}
  <div className=" ">
    <p className="text-base font-medium mb-2">Découvrir Lemida</p>
    <ul className="text-xs space-y-1">
      <li><NavLink to="/formations/categorie/sante" className="hover:underline">Santé</NavLink></li>
      <li><NavLink to="/formations/categorie/btp" className="hover:underline">Bâtiment</NavLink></li>
      <li><NavLink to="/formations/juridique/juridique-et-administrative" className="hover:underline">Juridique et Administrative</NavLink></li>
      <li><NavLink to="/a-propos" className="hover:underline">À propos</NavLink></li>
      <li><NavLink to="/contact" className="hover:underline">Contactez-nous</NavLink></li>
    </ul>
  </div>
   {/* Informations légales */}
  <div className="">
       <p className="text-sm font-medium mb-2">Informations légales</p>
         <ul className="text-xs space-y-1">
          <li><NavLink to="/politiques-de-confidentialite" className="hover:underline">Politique de confidentialité</NavLink></li>
           <li><NavLink to="/conditions-generales" className="hover:underline">Conditions générales</NavLink></li>
          <li><NavLink to="/mentions-legales" className="hover:underline">Mentions légales</NavLink></li>
       </ul>
  </div>

  {/* Contact */}
  <div className="">
    <p className="text-base font-medium mb-2">Contact</p>
    <ul className="text-xs space-y-1">
      <li className="flex justify-center md:justify-start items-center gap-1">
        <GoHome className="w-3 h-3" />
        <span>229 RUE SAINT-HONORE, 75001 PARIS</span>
      </li>
      <li className="flex justify-center md:justify-start items-center gap-1">
        <MdOutlinePhone className="w-3 h-3" />
        <span>07 56 82 86 00</span>
      </li>
      <li className="flex justify-center md:justify-start items-center gap-1">
        <MdOutlineMail className="w-3 h-3" />
        <span>contact@lemida.fr</span>     
      </li>
      <li className="flex justify-center md:justify-start items-center gap-1">
        
        <span>SIRET : 932 315 914 00014</span>     
      </li>
    </ul>
  </div>

  {/* Carte Google Maps */}
  <div className="px-0">
    <p className="text-base font-medium mb-2 ">Localisation</p>
    <iframe
      title="Google Maps Location"
      className="w-full h-32 rounded-lg"
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
<div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 pt-4 pb-4 sm:pt-2 sm:pb-2 text-sm">
  {/* Copyright section - Centered */}
  <div className="flex-1  sm:text-left mb-4 sm:mb-0">
  </div>
  <div className="flex-1 text-center  sm:text-left mb-4 sm:mb-0 mr-48">
    <p>&copy; 2025 Lemida.  Tous droits réservés</p>
  </div>

  {/* Social media icons - Aligned to the right */}
  <div className="flex items-center justify-end gap-4 sm:gap-6">
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white border border-white hover:text-primary hover:border-primary hover:bg-white transition-all duration-300"
    >
      <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
    </a>
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white border border-white hover:text-primary hover:border-primary hover:bg-white transition-all duration-300"
    >
      <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
    </a>
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white border border-white hover:text-primary hover:border-primary hover:bg-white transition-all duration-300"
    >
      <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />
    </a>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;