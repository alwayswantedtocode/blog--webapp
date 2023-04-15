import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Slidebar from "../Navbar/Slidebar";

const NavLayout = () => {
  return (
    <>
      <Navbar />
      <Slidebar />
      <Outlet />
      <Footer />
    </>
  );
};
export default NavLayout;
