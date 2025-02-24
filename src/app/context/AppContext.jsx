import React, { createContext, useContext, useState } from "react";

//const AppContext = createContext();
const AppContext = createContext(null); // ✅ Assurez-vous qu'il a une valeur par défaut

export const AppContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [openSearchMenu, setOpenSearchMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{ activeMenu, setActiveMenu, openSearchMenu, setOpenSearchMenu }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }

  return context;
};