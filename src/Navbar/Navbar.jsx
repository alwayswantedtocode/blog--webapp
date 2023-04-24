import React, { useState } from "react";
import Data from "./data";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import Profile from "./ProfileBar/Profile";
import { useGlobalContext } from "../GlobalContext";

const Navbar = () => {
  const { revealMenu, setRevealMenu, openProfile } = useGlobalContext();

  return (
    <header className="nav-Header w-full h-[4.5rem] bg-slate-100 flex items-center sticky top-0 z-50 shadow-md">
      <nav className="nav-area w-full h-[4.5rem] bg-white flex items-center  md:justify-between md:flex">
        {/* Hambuger Menu */}
        <div className="btn-container flex-3">
          <button
            className="hamburger-menu text-4xl bg-transparent border-0 flex w-fit content items-center cursor-pointer mx-3  md:hidden "
            onClick={() => setRevealMenu(!revealMenu)}
          >
            {revealMenu ? <FiX /> : <FiAlignJustify />}
          </button>
        </div>
        {/* Logo */}
        <div className="Logo-container  mx-3 flex-1 md:flex-9 md:mr-0 md:mx-[3rem]">
          <div className="logo w-[4rem] flex flex-col">
            <span className="font-mono font-extrabold  text-center">
              Autumn
            </span>
            <span className="font-mono font-extralight text-center">blog</span>
          </div>
        </div>

        {/* Navigation area */}
        <div className="nav-container text-lg  font-normal hidden md:flex md:flex-1 mx-auto lg:flex  ">
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
        {/* Profile Search area */}
        <article className="profile-search  flex  ">
          <div className="search-bar w-[2.5rem] h-[2.5rem ] text-3xl font-normal flex items-center justify-center cursor-pointer mx-3 hidden md:flex ">
            <BiSearch className="" />
          </div>
          <Profile />
        </article>

        {/* social media area */}
        <article className="socials w-fit conent h-full flex items-center hidden md:flex mr-5 ">
          {/* Icon area */}
          <div className="icon-container  h-full w-fit content flex items-center hidden md:flex">
            {Data.map((icons) => {
              const { Icon, id } = icons;
              return (
                <div className="icons cursor-pointer text-xl mx-1" key={id}>
                  {Icon}
                </div>
              );
            })}
          </div>
        </article>
      </nav>
    </header>
  );
};
export default Navbar;
