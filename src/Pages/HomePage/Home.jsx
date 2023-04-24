import React from "react";
import Header from "./Header";
import Posts from "../Posts/Posts";
import SideInfo from "./SideDetails/SideInfo";
import { useGlobalContext } from "../../GlobalContext";
const Home = () => {
  const { closeProfile } = useGlobalContext();
  return (
    <section onClick={closeProfile}>
      <div className="header-section">
        <Header />
      </div>
      <div className="Post-sideinfo-section flex justify-between mt-2">
        <Posts />
        <hr />
        <SideInfo />
      </div>
    </section>
  );
};

export default Home;
