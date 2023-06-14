import React from "react";
import Recomendation from "./recomendation";
import Trendings from "./Trendings";

const SideInfo = () => {
  return (
    <section className="  h-[50px] justify-cneter items-center flex-col hidden md:flex lg:flex">
      <Recomendation />
      <Trendings />
    </section>
  );
};

export default SideInfo;
