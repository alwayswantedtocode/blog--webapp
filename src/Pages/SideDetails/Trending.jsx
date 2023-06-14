import React from "react";

const Trending = () => {
  return (
    <article className="sideInfo flex-3">
      <div className="fire-topics w-[25rem] flex mx-[1rem] my-[1rem] items-center justify-center">
        <div className="img-container w-[10rem] h-[6rem]">
          <img
            src="images/black-woman.png"
            alt="black-woman"
            className="w-fit content h-fit content rounded-r rounded-l cursor-pointer"
          />
        </div>
        <div className="topics w-[15rem] mx-[1rem] text-[1.04rem] font-bold cursor-pointer">
          <h1>
           Aperiam ex culpa laudantium natus rem atque non dolorum repudiandae. 
          </h1>
        </div>
      </div>
    </article>
  );
};

export default Trending;
