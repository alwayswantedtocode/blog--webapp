import React from "react";
import {NavLink, Link} from "react-router-dom"
import Header from "./Header";
import Posts from "./Posts/Posts";
import SideInfo from "../SideDetails/SideInfo"
import { useGlobalContext } from "../../GlobalContext";
const Home = () => {
  const { handleProfileBar } = useGlobalContext();
  return (
    // onClick={handleProfileBar}
    <section>
      <div className="header-section">
        <Header />
      </div>
      <div className="Post-sideinfo-section flex  mt-2 ">
        <Posts className=" flex flex-1"/>

        <SideInfo className=" flex flex-3" />
      </div>
    </section>
  );
};

export default Home;
