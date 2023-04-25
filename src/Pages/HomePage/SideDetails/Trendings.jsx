import React from "react";
import Trending from "./Trending";

const Trendings = () => {
  return (
    <article>
      <span className="heading ">
        <h4 className="text-2xl m-[1rem] p-[0.5rem] border-y-[2px] font-negative text-center font-bold">
          TRENDING TOPICS
        </h4>
      </span>
      <Trending />
      <Trending />
      <Trending />
      <Trending />
      <Trending />
    </article>
  );
};

export default Trendings;
