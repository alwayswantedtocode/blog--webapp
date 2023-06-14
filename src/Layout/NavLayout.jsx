import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Slidebar from "../Navbar/Slidebar";
import ProfileDrop from "../Navbar/ProfileBar/ProfileDrop";
import { useGlobalContext } from "../GlobalContext";

const NavLayout = () => {
  const { isProfileOpened, setIsProfileOpened } = useGlobalContext();
  return (
    <>
      <Navbar />
      {/* {isProfileOpened && (<Slidebar />)} */}
      <Slidebar />
      <ProfileDrop />

      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
export default NavLayout;
