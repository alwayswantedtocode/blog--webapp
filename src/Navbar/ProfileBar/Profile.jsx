import React, { useState, useEffect } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useGlobalContext } from "../../GlobalContext";
const Profile = () => {
  const {
    isProfileOpened,
    setIsProfileOpened,
    profileBarRef,
    handleProfileBar,
  } = useGlobalContext();

  useEffect(() => {
    document.addEventListener("mousedown", handleProfileBar);

    return () => {
      document.removeEventListener("mousedown", handleProfileBar);
    };
  }, []);

  return (
    <div
      className="ProfileBar  flex items-center justify-center mx-[1rem] "
      ref={profileBarRef}
    >
      <div className="profile-pic w-[2.5rem] h-[2.5rem ] rounded-l-full rounded-r-full ml-1">
        <img
          src="images/profile-image/user-logo.png"
          alt="Profile"
          className=" object-cover h-[2.5rem] content w-[2.5rem] rounded-l-full rounded-r-full cursor-pointer"
          onClick={() => setIsProfileOpened(!isProfileOpened)}
        />
      </div>
      <div
        className="chevrondown flex justify-center items-center text-xl cursor-pointer color-gray-500 hover:color-gray-100 "
        onClick={() => setIsProfileOpened(!isProfileOpened)}
        ref={profileBarRef}
      >
        {isProfileOpened ? <BiChevronDown /> : <BiChevronUp />}
      </div>
    </div>
  );
};

export default Profile;
