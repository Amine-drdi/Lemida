import React from "react";

const Hero = () => {
  return (
    <div className="lg:flex hidden relative justify-center items-center text-white p-6 bg-primary">
      <div className="absolute bottom-5 right-5 z-20 pointer-events-none w-1/3 h-1/2 shadow-xl">
        <img
          src="/images/login-hero-2.jpg"
          alt="btp"
          className="w-full h-full object-cover shadow-xl"
        />
      </div>
      <div className="absolute top-5 mx-auto z-20 pointer-events-none w-1/2 h-1/2 shadow-lg">
        <img
          src="/images/auth-medic.jpg"
          alt="medical"
          className="w-full h-full object-cover shadow-xl"
        />
      </div>
      <div className="absolute bottom-5 left-5 z-20 pointer-events-none w-1/3 h-1/2 shadow-lg">
        <img
          src="/images/auth-admin.jpg"
          alt="administration"
          className="w-full h-full object-cover shadow-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
