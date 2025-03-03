import React from "react";
import ContactUsForm from "./components/ContactUsForm";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
//import contactImage from '../../assets/images/contactus.webp';

import contactImage from '../../assets/images/contact-cover.png'

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full relative">
        <img
         src={contactImage} 

          alt="hero"
          className="object-cover w-full"
        />
      </div>
      <div className="flex justify-center w-full h-full bg-gray-200 xl:px-desktop_padding md:px-laptop_padding sm:px-tablet_padding px-mobile_padding py-16">
        <div className="flex flex-col md:flex-row gap-8 w-full h-full max-w-5xl">
          <Hero />
          <ContactUsForm />
        </div>
      </div>

      <div className="flex justify-center py-16">
        <Faq />
      </div>
    </div>
  );
};

export default Contact;
