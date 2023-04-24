import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiMessageAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { useGlobalContext } from "../../GlobalContext";
const ProfileBar = () => {
  const { isProfileOpened, setIsProfileOpened } = useGlobalContext();
  return (
    <aside
      className={` w-[15rem]  bg-[#FEFEFE] z-[60] absolute top-[9%] right-0 rounded-l-md ${
        isProfileOpened ? "visible" : "invisible"
      }`}
    >
      <div className=" flex items-center text-[18px] p-[1rem] hover:bg-slate-50 hover: rounded-l-md hover: rounded-r-md cursor-pointer">
        <div className="profile-pic w-[2.8rem] h-[2.8rem ] rounded-l-full rounded-r-full cursor-pointer ml-1">
          <img
            src="images/profile-image/user-logo.png"
            alt="Profile"
            className=" object-cover h-[2.8rem] content w-[2.8rem] rounded-l-full rounded-r-full"
          />
        </div>
        <span className="ml-[0.3rem] flex flex-col justify-center">
          <span>Profile</span>
          <span>@Osatohamhen</span>
        </span>
      </div>
      <div className="write-post flex items-center text-[18px] p-[1rem] hover:bg-slate-50 hover: rounded-l-md hover: rounded-r-md  cursor-pointer">
        <BiMessageAdd className="mr-[0.3rem]" />
        <span className="ml-[0.3rem]">Post</span>
      </div>
      <div className="dashboard flex items-center text-[18px] p-[1rem] hover:bg-slate-50 hover: rounded-l-md hover: rounded-r-md  cursor-pointer">
        <RxDashboard className="mr-[0.3rem]" />
        <span className="ml-[0.3rem]">Dashborad</span>
      </div>
      <div className="edit-profile flex items-center text-[18px] p-[1rem] hover:bg-slate-50 hover: rounded-l-md hover: rounded-r-md  cursor-pointer">
        <AiOutlineEdit className="mr-[0.3rem]" />
        <span className="ml-[0.3rem]">Edit Profile</span>
      </div>
      <div className="edit-setting flex items-center text-[18px] p-[1rem] hover:bg-slate-50 hover: rounded-l-md hover: rounded-r-md  cursor-pointer">
        <IoSettingsOutline className="mr-[0.3rem]" />
        <span className="ml-[0.3rem]">Edit Settings</span>
      </div>
      <div className="edit-setting flex items-center text-[18px] p-[1rem] hover:bg-slate-50 hover: rounded-l-md hover: rounded-r-md  cursor-pointer">
        <IoLogOutOutline className="mr-[0.3rem]" />
        <span className="ml-[0.3rem]">Log Out</span>
      </div>
    </aside>
  );
};

export default ProfileBar;
