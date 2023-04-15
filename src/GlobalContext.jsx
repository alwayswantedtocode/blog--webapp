import React, { useState, useContext } from "react";

const GlobalContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [revealMenu, setRevealMenu] = useState(false);
  const [isProfileOpened, setIsProfileOpened] = useState(false);

  const openMenu = () => {
    setIsProfileOpened(true);
  };

  const closeMenu = () => {
    setIsProfileOpened(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isProfileOpened,
        openMenu,
        closeMenu,
        revealMenu,
        setRevealMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
