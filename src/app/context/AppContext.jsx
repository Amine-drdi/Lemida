import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

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

  return context;
};
