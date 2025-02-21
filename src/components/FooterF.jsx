import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { MdOutlineDescription } from 'react-icons/md';
import { FaRegFileAlt } from 'react-icons/fa';

const Footer = () => {
  const currentDate = new Date().getFullYear().toLocaleString();
  return (
    <footer className="w-full px-4 sm:px-6 md:px-8 bg-footer_background_color text-footer_text_color">
      <div className="flex flex-col gap-8 py-8 md:py-16">
        {/* Logos section */}
        <div className="flex justify-center items-start gap-8 w-full" >
          <div className="w-48 h-24 bg-white flex items-center justify-center">
            <NavLink to="/">
              <img
                className="w-full h-full object-contain"
                src="/images/logo_lemida.png"
                alt="Lemida"
              />
            </NavLink>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-32 h-24 bg-white flex items-center justify-center">
              <img
                src="/images/qualiopi.png"
                alt="qualiopi"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center text-sm max-w-xs">
              <p className="mb-1">
                La certification qualité a été délivrée au 
              </p>
              <p className="mb-1">
                titre de la catégorie d'action suivante :
              </p>
              <p className="font-semibold text-gray-200">
                Actions de formation
              </p>
            </div>
          </div>
        </div>

        {/* Navigation sections - ajusté avec espacement réduit */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap- mt-4" style={{marginLeft:"300px"}}>

        <div className="" style={{ marginLeft: "px" }}>
  {/* Centrage global avec alignement à gauche et décalage */}
  <p
    className="text-lg font-medium text-center"
    style={{ marginBottom: "20px",  fontSize: '15px' ,marginRight:"30px"}}
  >
    Découvrir Lemida
  </p>
  <ul
    className="text-xs font-medium"
    style={{
      display: "flex", // Flexbox pour aligner
      flexDirection: "column", // Empiler verticalement
      alignItems: "flex-start", // Aligner les éléments à gauche
      margin: "0 auto", // Centrer globalement le conteneur
      paddingLeft: "20px", // Décaler les éléments vers la droite
      rowGap: "10px", // Espacement entre les éléments
      maxWidth: "200px", // Largeur pour limiter l'étalement
    }}
  >
    <li>
      <NavLink
        to="/formations/categorie/sante"
        className="hover:opacity-80 hover:underline"
        style={{ fontSize: '10px' }}
      >
        Santé
      </NavLink>
    </li>
    <li><NavLink to="/formations/categorie/btp" className="hover:underline">
    Juridique et administrative</NavLink></li>

    <li>
      <NavLink
        to="/formations/categorie/btp"
        className="hover:opacity-80 hover:underline"
        style={{ fontSize: '10px' }}
      >
        Bâtiment
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/a-propos"
        className="hover:opacity-80 hover:underline"
        style={{ fontSize: '10px' }}
      >
        À propos
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className="hover:opacity-80 hover:underline"
        style={{ fontSize: '10px' }}
      >
        Contactez-nous
      </NavLink>
    </li>
  </ul>
</div>


<div className="" style={{ paddingLeft: "20px", marginLeft: "px" }}>
  {/* Titre centré */}
  <p
    className="text-lg font-medium text-center"
    style={{ marginBottom: "20px" ,fontSize: '15px', marginRight:"50px"  }}
  >
    Informations légales
  </p>
  <ul
    className="text-xs font-medium"
    style={{
      display: "flex", // Flexbox pour alignement
      flexDirection: "column", // Empilement vertical
      alignItems: "flex-start", // Alignement à gauche des éléments
      margin: "0 auto", // Centrage global
      rowGap: "10px", // Espacement vertical
      maxWidth: "200px", // Largeur maximale du conteneur
    }}
  >
    <li>
      <NavLink
        to="/politiques-de-confidentialite"
        className="hover:opacity-80 hover:underline"
        style={{ fontSize: '10px' }}
      >
        Politique de confidentialité
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/conditions-generales"
        className="hover:opacity-80 hover:underline"
        style={{ fontSize: '10px' }}
      >
        Conditions générales
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/mentions-legales"
        className="hover:opacity-80 hover:underline"
        style={{ fontSize: '10px' }}
      >
        Mentions légales
      </NavLink>
    </li>
  </ul>
</div>




<div className="" style={{ paddingLeft: "20px", marginRight: "px" }}>
  {/* Titre centré */}
  <p
    className="text-lg font-medium mb-4 text-center"
    style={{ marginBottom: "20px",marginRight:"220px" ,fontSize: '15px' }}
  >
    Contact
  </p>
  <ul
    className="text-xs font-medium"
    style={{
      display: "flex", // Flexbox pour gestion de l'empilement
      flexDirection: "column", // Organisation verticale
      alignItems: "flex-start", // Alignement à gauche des éléments
      margin: "0 auto", // Centrage global
      rowGap: "10px", // Espacement vertical
      maxWidth: "300px", // Largeur maximale du conteneur
    }}
  >
    <li className="flex items-center gap-2">
      <GoHome className="w-5 h-5" />
      <span  style={{ fontSize: '10px' }}>229 RUE SAINT-HONORE, 75001 PARIS</span>
    </li>
    <li className="flex items-center gap-2">
      <MdOutlinePhone className="w-5 h-5" />
      <span  style={{ fontSize: '10px' }}>07 56 82 86 00</span>
    </li>
    <li className="flex items-center gap-2">
      <MdOutlineMail className="w-5 h-5" />
      <span  style={{ fontSize: '10px' }}>contact@lemida.fr</span>
    </li>
   { /*<li className="flex items-center gap-2">
      <MdOutlineDescription className="w-5 h-5" />
      <span>SIRET: 932 315 914 00014</span>
    </li>*/}
  { /*<li className="flex items-center gap-2">
      <FaRegFileAlt className="w-5 h-5" />
      <span>
        NDA: 11757074975 délivré par la Préfecture de Région de l'île-de-France
      </span>
    </li>*/}
  </ul>
</div>

</div>



        {/* Social media and copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t gap-4">
          <p className="text-sm font-medium">&copy; {currentDate} Lemida.</p>
          <div style={{ fontSize: '13px' }}>SIRET: 932 315 914 00014</div>
<div style={{ fontSize: '13px' }}>NDA: 11757074975 délivré par la Préfecture de Région de l'île-de-France</div>

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