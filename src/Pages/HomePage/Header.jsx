import React from "react";

const Header = () => {
  return (
    <article className="home-header relative w-full h-[40rem] md:h-[55rem]">
      <div className="header-title  w-full h-[5rem] flex flex-col justify-center items-center font-serif italic relative bottom-[-2rem] ">
        <span>health & wellness</span>
        <span className="text-7xl uppercase">Blog</span>
      </div>
      <div className="header-img-container w-full h-[35rem] md:h-[50rem]">
        <img
          src="images/Autumn-feel.jpg"
          alt="Autumn fall"
          className="w-full h-full object-cover"
        />
      </div>
    </article>
  );
};

export default Header;
