import React from "react";
import Recommended from "./Recommend";

const Recommends = () => {
  return (
    <article className="px-[0.3rem] mb-[10rem] ">
      <span className="heading ">
        <h4 className="text-2xl m-[1rem] p-[0.5rem] border-y-[2px] font-negative text-center font-bold">
          RECOMMENED TOPICS
        </h4>
      </span>
      <Recommended />
      <Recommended />
      <Recommended />
      <Recommended />
      <Recommended />
    </article>
  );
};

export default Recommends;
