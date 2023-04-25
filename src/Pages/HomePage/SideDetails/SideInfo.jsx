import React from "react";
import categories from "../homedata";
import Recommends from "./Recommends";
import Trendings from "./Trendings";

const SideInfo = () => {
  return (
    <section className=" h-[50px] flex flex-col hidden flex-3 md:flex lg:flex">
      <Recommends />
      <Trendings />
    </section>
  );
};

export default SideInfo;
