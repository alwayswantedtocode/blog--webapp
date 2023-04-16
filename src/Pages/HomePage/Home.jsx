import React from "react";
import Header from "./Header";
import Posts from "../Posts/Posts";
import SideInfo from "./SideInfo";

const Home = () => {
  return (
    <>
      <section className="header-section">
        <Header />
      </section>
      <section className="Post-sideinfo-section flex justify-between mt-2">
        <Posts />
        <SideInfo />
      </section>
    </>
  );
};

export default Home;
