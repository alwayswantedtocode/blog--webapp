import React, { useState } from "react";
import Data from "./data";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useGlobalContext } from "../GlobalContext";

const Navbar = () => {
  const { revealMenu, setRevealMenu } = useGlobalContext();

  return (
    <header className="nav-Header w-full h-[5rem] bg-blue-500 flex items-center sticky top-0 z-50">
      <nav className="nav-area w-full h-[3rem] bg-green-500 flex items-center  justify-between  ">
        {/* Logo */}
        <div className="Logo w-fit content h-full mx-3 md:mx-5">
          <img
            src="images/Logo/log_By_Wix.jpg"
            alt="Logo"
            className=" w-fit content h-full"
          />
        </div>
        {/* Hambuger Menu */}
        <button
          className="hamburger-menu text-4xl bg-transparent border-0 flex items-center  mx-3 md:hidden lg:invisible"
          onClick={() => setRevealMenu(!revealMenu)}
        >
          {revealMenu ? <FiX /> : <FiAlignJustify />}
        </button>
        {/* Navigation area */}
        <div className="nav-container text-lg font-normal   hidden  md:flex  lg:flex ">
          {Data.map((menu, index) => {
            const { Menu, Path, id } = menu;
            return (
              <button className="nav-item active-nav mx-3" key={id}>
                <NavLink className="nav-list" path="#">
                  {Menu}
                </NavLink>
              </button>
            );
          })}
        </div>
        {/* Profile Search and social media area */}
        <article className="socials w-fit conent h-full flex items-center hidden md:flex  lg:flex mx-5 ">
          {/* Icon area */}
          <div className="icon-container  h-full w-fit content flex items-center">
            {Data.map((icons) => {
              const { Icon, id } = icons;
              return (
                <div className="icons cursor-pointer text-xl mx-2" key={id}>
                  {Icon}
                </div>
              );
            })}
          </div>
        </article>
        <article className="profile-search flex hidden md:flex ">
          <div className="profile-pic w-[2.5rem] h-[2.5rem ] rounded-l-full rounded-r-full cursor-pointer mx-2  ">
            <img
              src="images/profile-image/R.jpg"
              alt="Profile Image"
              className=" object-cover h-[2.5rem] content w-[2.5rem] rounded-l-full rounded-r-full"
            />
          </div>
          <div className="search-bar w-[2.5rem] h-[2.5rem ] text-3xl font-normal flex items-center justify-center cursor-pointer mx-3  ">
            <BiSearch />
          </div>
        </article>
      </nav>
    </header>
  );
};
export default Navbar;
