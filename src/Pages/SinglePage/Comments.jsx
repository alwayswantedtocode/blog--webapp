import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../../GlobalContext";
import { BsShieldCheck, BsXLg } from "react-icons/bs";

const Comments = () => {
  const {
    isCommentOpen,
    setIsCommentOpen,
    openCommentSection,
    closeCommentSection,
  } = useGlobalContext();

  const closeCommentsRef = useRef();

  // Second Option close comment
  const handleCloseComment = (event) => {
    if (!closeCommentsRef.current.contains(event.target)) {
      closeCommentSection();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleCloseComment);
    return () => {
      document.removeEventListener("mousedown", handleCloseComment);
    };
  }, []);

  return (
    <aside
      className={`commentwrapper fixed top-[0rem] left-0 w-full h-full z-[100] grid place-items-center transition-all duration-500 ease-in-out transform scale-100 bg-black bg-opacity-30 ${
        isCommentOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`comment fixed top-0  h-[100%] lg:w-[30%] lg:left-[70%] md:w-[50%] md:left-[50%] bg-white transition-all duration-700 ease-in-out ${
          isCommentOpen ? "-translate-x-0" : "translate-x-full"
        }`}
        ref={closeCommentsRef}
      >
        {/* comment section Heading content */}
        <div className="head-content w-[100%] h-[4rem] border-[2px] flex items-center justify-between ">
          {/* comment heading*/}
          <div className="heading-cover flex  border-[2px]">
            <h1 className="text-2xl font-bold">Comments</h1>
          </div>
          {/* close comment icon and guidline link  */}
          <div className="comment-guideline-close flex justify-between border-[2px] ">
            <BsShieldCheck className="text-xl" />
            <BsXLg
              className="text-xl cursor-pointer"
              onClick={closeCommentSection}
            />
          </div>
        </div>

        {/* comment section body content */}
        <div className="">
          {/* input section */}
          <div className="w-[90%] h-[25rem] border-[2px]">
            <div className="input-area">
              <input type="text" />
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default Comments;
