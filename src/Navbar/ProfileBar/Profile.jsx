import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useGlobalContext } from "../../GlobalContext";
const Profile = () => {
  const { isShowProfile, setIsShowProfile, openProfile } = useGlobalContext();
  return (
    <div className="ProfileBar  flex items-center justify-center mx-[1rem] ">
      <div className="profile-pic w-[2.5rem] h-[2.5rem ] rounded-l-full rounded-r-full ml-1">
        <img
          src="images/profile-image/user-logo.png"
          alt="Profile"
          className=" object-cover h-[2.5rem] content w-[2.5rem] rounded-l-full rounded-r-full cursor-pointer"
          onClick={openProfile}
        />
      </div>
      <div
        className="chevrondown flex justify-center items-center text-lg cursor-pointer color-gray-500 hover:color-gray-100 "
        onClick={openProfile}
      >
        <BiChevronDown />
      </div>
    </div>
  );
};

export default Profile;
