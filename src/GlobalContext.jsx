import React, { useState,useRef, useContext } from "react";

const GlobalContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [revealMenu, setRevealMenu] = useState(false);
  const [isProfileOpened, setIsProfileOpened] = useState(false);
  const [isCommentOpen, setIsCommentOpen]=useState(false)

//Close Mobile Menu
  const closeMobileMenu =()=>{
    setRevealMenu(false)
  }

  // Open and Close Comment section
  const openCommentSection =()=>{
    setIsCommentOpen(true);
  }
const closeCommentSection=()=>{
  setIsCommentOpen(false)
}
  const openProfile = () => {
    // setIsProfileOpened(true);
  };

  const closeProfile = () => {
    setIsProfileOpened(false);
  };

// Second option to close pofile bar
   const profileBarRef = useRef();
  const handleProfileBar = (event) => {
    if (!profileBarRef.current.contains(event.target)) {
      closeProfile();
    }
  };
  
  return (
    <GlobalContext.Provider
      value={{
        isProfileOpened,
        openProfile,
        closeProfile,
        closeMobileMenu,
        setIsProfileOpened,
        revealMenu,
        setRevealMenu,
        isCommentOpen,
        setIsCommentOpen,
        openCommentSection,
        closeCommentSection,
        profileBarRef,
        handleProfileBar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
