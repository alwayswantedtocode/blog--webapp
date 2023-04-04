import React from "react";
import Data from "./data";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="nav-Header w-full h-[5rem] bg-blue-500 flex items-center sticky top-0">
      <nav className="nav-area w-full h-[3rem] bg-green-500 flex items-center justify-between px-8 ">
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
        {/* Navigation area */}
        <div className="nav-container text-lg font-normal ">
          {Data.map((menu, index) => {
            const { Menu, Path, id } = menu;
            return (
              <button className="nav-item active-nav mx-3" key={id}>
                {/* <NavLink className="nav-list" path="#"> */}
                {Menu}
                {/* </NavLink> */}
              </button>
            );
          })}
        </div>
        {/* Profile pic and Search area */}
        <div className="profile-pic w-[2rem] h-2rem mx-1 flex item-center w-fit content rounded-s-full">
          <img
            src="images/profile-image/R.jpg"
            alt="Profile Image"
            className=" h-fit content w-[2rem] rounded-l-full rounded-r-full"
          />
        </div>
        <div className="search text-lg font-normal">
          <BiSearch />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
