import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="w-full px-4 sm:px-6 md:px-8 bg-gray-900 text-gray-200 pt-0 pb-4">
      <div className="flex flex-col gap-4 py-8 md:py-16">
        {/* Logos section */}

        <div className="flex flex-col md:flex-row items-start justify-start gap-10 w-full max-w-screen-xl mx-auto px-4">
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
    <p className="m-0 p-0">
    Lemida est un organisme de formation <br/>  dédié à la montée en compétences<br/> 
     des professionnels et des entreprises.<br/>  En combinant expertise et pédagogie <br/> 
     innovante, nous proposons des formations<br/>  adaptées aux exigences actuelles<br/> 
      du marché et aux besoins <br/> spécifiques de chaque apprenant.
    </p>
  </div>
</div>

  {/* Certificat */}
  <div className="flex flex-col items-start gap-2 text-xs sm:text-left">
  <img src="/images/qualiopi.png" alt="Qualiopi" className="w-24 h-16 bg-white" />
  <div className="text-gray-300">
    <p className="m-0 p-0">
      Notre organisme est certifié Qualiopi<br/> 
      pour les actions de formation (L.6313-1 - 1°).<br/> 
      Cette certification atteste de la qualité des<br/>
       processus que nous mettons en œuvre pour accompagner<br/>
        nos clients dans leur montée en compétences,<br/>
         conformément au référentiel national de certification qualité.
    </p>
  </div>
</div>
                   </div>
 {/* Navigation sections */}
  <div className="grid grid-cols-1 sm:grid-cols md:grid-cols-4 gap-[5px] text-center md:text-left">
  {/* Découvrir Lemida */}
  <div className="ml-100 ">
    <p className="text-sm font-medium mb-2">Découvrir Lemida</p>
    <ul className="text-xs space-y-1">
      <li><NavLink to="/formations/categorie/sante">Santé</NavLink></li>
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
    <p className="text-sm font-medium mb-2">Contact</p>
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
    <p className="text-sm font-medium mb-2">Localisation</p>
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
        <div className="flex flex-col items-center sm:flex-row justify-between border-t border-gray-700 pt-1 pb-0 text-sm h-12 mb-0">
        <div className="flex flex-row gap-2 items-center">
          {/*<p>&copy; {currentDate} Lemida.</p>*/}
          </div> 
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
  {/* SIRET et NDA */}
  <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-center md:text-left">
  <div className="flex flex-row gap-2 items-center">
          <p>&copy; {currentDate} Lemida.</p>
          </div>

   {/* <div className="flex flex-row gap-2 items-center">
      <p className="font-semibold">NDA :</p>
      <p className="text-gray-500">11757074975</p>
    </div>*/}
  { /* <div className="flex flex-row gap-2 items-center">
      <p className="font-semibold">Délivré par :</p>
      <p className="text-gray-500">La Préfecture de Région de l'île-de-France</p>
    </div>*/}
  </div>
</div>
<div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/@lemida"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border border-white hover:text-primary hover:border-primary hover:bg-white transition-all duration-300"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/@lemida"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border border-white hover:text-primary hover:border-primary hover:bg-white transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/@lemida"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border border-white hover:text-primary hover:border-primary hover:bg-white transition-all duration-300"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;