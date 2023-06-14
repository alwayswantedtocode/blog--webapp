import React from "react";
import SinglePost from "./SinglePost";
import SideInfo from "../SideDetails/SideInfo";

const ViewPost = () => {
  return (
    <>
      <div className="flex flex-row ">
        <SinglePost />
        {/* <SideInfo /> */}
      </div>
    </>
  );
};

export default ViewPost;
