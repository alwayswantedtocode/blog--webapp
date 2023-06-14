import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../GlobalContext";
import data from "./data";

const Slidebar = () => {
  const { revealMenu, setRevealMenu, closeMobileMenu } = useGlobalContext();

  const closeMobileMenuRef = useRef();

  //  *************Close Mobile Menu option two****************
  const closeMenu = (event) => {
    if (!closeMobileMenuRef.current.contains(event.target)) {
      closeMobileMenu();
      // setRevealMenu(!revealMenu);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <>
      {/* to have the aside contro the animation of the side bar, use tenery operation for aside only */}
      <aside
        onClick={closeMenu}
        className={`SideSlideWrap fixed top[5rem] right-0 w-full h-full z-[100] grid place-items-center transition-all duration-500 ease-in-out transform scale-100 bg-black bg-opacity-30  md:hidden   ${
          revealMenu ? "visible" : "invisible"
        }`}
      >
        {/* For side bar that slide right let -translate-x-full be translate-x-full */}
        <div
          className={`sideMenu fixed top-0 left-0 h-[100%] w-[60%] bg-white transition-all duration-700 ease-in-out md:hidden ${
            revealMenu ? "translate-x-0" : "-translate-x-full"
          }`}
          ref={closeMobileMenuRef}
        >
          <article className="sideNavContainer mt-[1rem]">
            {data.map((menu) => {
              const { Menu, id } = menu;
              return (
                <div
                  className="SideNav w-[1005] h-[3.5rem]  px-[0.5rem] border-[2px] border-green-600 flex flex-col text-[1.15rem] font-normal justify-center cursor-pointer"
                  key={id}
                >
                  {Menu}
                </div>
              );
            })}

            <section className="slide-footer-container flex justify-start w-full h-[4rem] relative top-[2rem] border-[2px] border-red-500 ">
              {data.map((Icons) => {
                const { Icon, id } = Icons;
                return (
                  <button
                    className="slide-footer text-gray-400 text-xl mx-[0.5rem]  cursor-pointer"
                    key={id}
                  >
                    {Icon}
                  </button>
                );
              })}
            </section>
          </article>
        </div>
      </aside>
    </>
  );
};

export default Slidebar;
