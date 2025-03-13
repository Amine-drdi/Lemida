import React, { useState, useEffect } from "react";

const Cookies = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [selectedCookies, setSelectedCookies] = useState({
    essential: true,
    performance: false,
    marketing: false,
  });

  useEffect(() => {
    const cookiePreference = localStorage.getItem("cookieConsent");
    const lastRejectionDate = localStorage.getItem("lastRejectionDate");

    if (!cookiePreference || (lastRejectionDate && new Date() - new Date(lastRejectionDate) > 30 * 24 * 60 * 60 * 1000)) {
      setShowBanner(true);
    }
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCookies({
      ...selectedCookies,
      [category]: !selectedCookies[category],
    });
  };

  const handleAccept = async () => {
    localStorage.setItem("cookieConsent", JSON.stringify(selectedCookies));
    setShowBanner(false);

    await fetch("/api/save-cookie-preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedCookies),
    });
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("lastRejectionDate", new Date().toISOString());
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <section className="fixed z-[99999] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 md:p-8 mx-auto bg-white border-gray-200 dark:bg-gray-800 left-4 bottom-4 sm:left-8 sm:bottom-8 md:left-12 md:bottom-16 dark:border-gray-700 rounded-2xl shadow-lg animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base md:text-lg flex items-center">
          🍪 <span className="ml-2">Nous utilisons des cookies !</span>
        </h2>
        <button onClick={handleClose} className="text-gray-700 hover:text-black dark:hover:text-gray-300">
          ✕
        </button>
      </div>

      <p className="mt-4 text-xs sm:text-sm text-gray-900 dark:text-gray-300">
        Ce site web utilise des cookies essentiels pour fonctionner correctement
        et des cookies de suivi pour analyser votre navigation. Ces derniers nécessitent votre consentement.
      </p>

      <div className="mt-4 space-y-2">
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={selectedCookies.essential} disabled className="form-checkbox h-4 w-4 accent-primary rounded" />
          <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-300">Cookies essentiels</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={selectedCookies.performance} onChange={() => handleCategoryChange("performance")} className="form-checkbox h-4 w-4 accent-primary rounded" />
          <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-300">Cookies de performance</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={selectedCookies.marketing} onChange={() => handleCategoryChange("marketing")} className="form-checkbox h-4 w-4 accent-primary rounded" />
          <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-300">Cookies de marketing</span>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <button onClick={handleAccept} className="flex items-center justify-center text-white font-medium rounded-lg text-xs sm:text-sm px-3 sm:px-4 py-2 bg-primary hover:bg-secondary hover:text-primary border border-transparent hover:border-primary transition-all ease-in-out duration-500">
          Accepter tout
        </button>
        <button onClick={handleReject} className="text-xs sm:text-sm bg-orange-600 text-white font-medium rounded-lg  px-3 sm:px-4 py-2.5 duration-300 transition-colors focus:outline-none hover:bg-orange-800 hover:text-white">
          Rejeter tout
        </button>
      </div>
    </section>
  );
};

export default Cookies;
