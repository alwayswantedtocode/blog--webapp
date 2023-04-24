import React, { useState, useContext } from "react";

const GlobalContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [revealMenu, setRevealMenu] = useState(false);
  const [isProfileOpened, setIsProfileOpened] = useState(false);

  const openProfile = () => {
    setIsProfileOpened(true);
  };

   const closeProfile = () => {
     setIsProfileOpened(false);
   };
  return (
    <GlobalContext.Provider
      value={{
        isProfileOpened,
        openProfile,
        closeProfile,
        setIsProfileOpened,
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
