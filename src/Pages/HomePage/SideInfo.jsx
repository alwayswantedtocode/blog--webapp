import React from "react";
import categories from "./data";

const SideInfo = () => {
  return (
    <artilce className=" sideInfo  w-[15rem] mx-[0.3rem] bg-stone-50  md:w-[17rem]  lg:w-[20rem]">
      <div className="sideinfo-item flex flex-col items-center">
        <span className="title uppercase flex justify-center border-t-2 border-gray-300 border-b-2 border-gray-300 my-3">
          About me
        </span>
        <div className="img-container flex md:w-[15rem] h-[15rem] items-center ">
          <img
            src="images/black-woman.png"
            alt="black woman"
            className="w-[15rem] h-[15rem] object-cover  "
          />
        </div>
        <div className="text-area flex items-center justify-center w-[15rem]">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            reiciendis rerum exercitationem porro totam impedit doloremque
            possimus sequi quis tempora.
          </p>
        </div>
      </div>
      <div className="sideinfo-2nditem flex flex-col items-center">
        <span className="border-t-2 border-gray-300 border-b-2 border-gray-300 my-3">
          CATEGORIES
        </span>
        <ul>
          {categories.map((category) => {
            const { list, id } = category;
            return (
              <li
                className="text-center inline-block w-[50%] mb-2 cursor-pointer"
                key={id}
              >
                {list}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sideinfo-2nditem flex flex-col items-center">
        <span className="border-t-2 border-gray-300 border-b-2 border-gray-300 my-3">
          FOLLOW US
        </span>
        <div>
          {categories.map((category) => {
            const { social, id } = category;
            return (
              <button className="text-center" key={id}>
                {social}
              </button>
            );
          })}
        </div>
      </div>
    </artilce>
  );
};

export default SideInfo;
