import React, { useState } from "react";
import {
  RiChat1Line,
  RiShareForwardLine,
  RiFireLine,
  RiFireFill,
  RiMoreFill,
} from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";
import { BiBookmarkPlus } from "react-icons/bi";
import { useGlobalContext } from "../../GlobalContext";
import Comments from "./Comments";

const SinglePage = () => {

  const { openCommentSection } = useGlobalContext();

  const [giveAFire, setGiveFire] = useState(false);
  const [onHoverIcon, setOnHoverIcon] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  // Function to handle hover state change for an icon
  const handleIconHover = (index, isHovered) => {
    const updatedonHoverIcon = [...onHoverIcon];
    updatedonHoverIcon[index] = isHovered;

    if (isHovered) {
      const iconElement = document.getElementById(`icon-${index}`);
      const iconRect = iconElement.getBoundingClientRect();

      const asideElement = document.getElementById(`aside-${index}`);
      const asideRect = asideElement.getBoundingClientRect();

      const center = (iconRect.left + iconRect.right) / 2 - asideRect.width / 2;
      const top = iconRect.top - asideRect.height;

      asideElement.style.left = `${center}px`;
      asideElement.style.top = `${top}px`;
    }
    setOnHoverIcon(updatedonHoverIcon);
  };

  return (
    <>
      <section className="flex flex-1 flex-col justify-center items-center">
        <article className="Post-wrapper w-[60%] border-[2px]  ">
          {/* ************* Single Post heading and details************** */}

          <div className="w-[100%] flex justify-center items-center ml-[1rem]">
            {/* ************* Single Post heading************** */}
            <h1 className="text-5xl font-bold mb-[1rem]">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h1>
          </div>

          {/* ************* Single Post details************** */}

          <div className="author-date-info flex items-center mb-[0.5rem] ml-[1rem] ">
            <span className=" border-[1px] w-[3rem] h-[3rem] mr-[0.3rem]">
              <img src="images/profile-image/user-logo.png" alt="Profile" />
            </span>
            <div className=" flex flex-col border-[2px] h-[3rem]">
              <span className="author text-stone-700 text-sm font-semibold flex ">
                Osatohamhen Ebhohon
              </span>
              <span className="post-date text-stone-400 text-sm flex ">
                <p>1 hour ago </p> <p>mins read</p>
              </span>
            </div>
          </div>
          {/* *************Interact Via Icons************** */}
          <div className=" w-[100%] flex justify-between my-[0.5rem] py-[0.5rem] px-[1rem] border-t-[2px] border-b-[2px]">
            <div className="text-2xl flex border-[2px] space-x-4 ">
              <div
                className=""
                style={{ color: giveAFire ? "#FFB70B" : "" }}
                onClick={() => setGiveFire(!giveAFire)}
                onMouseEnter={() => handleIconHover(0, true)}
                onMouseLeave={() => handleIconHover(0, false)}
              >
                <aside
                  id="aside-0"
                  className={`Aside-Icon h-[2rem] p-[0.5rem] flex justify-center items-center rounded-[0.3rem] text-sm bg-black text-white ${
                    onHoverIcon[0] ? "visible" : "invisible"
                  } `}
                >
                  Fire
                </aside>
                <div id="icon-0">
                  {giveAFire ? (
                    <RiFireFill className="cursor-pointer" />
                  ) : (
                    <RiFireLine className="cursor-pointer" />
                  )}
                </div>
              </div>
              <div
                className="cursor-pointer"
                onMouseEnter={() => handleIconHover(1, true)}
                onMouseLeave={() => handleIconHover(1, false)}
              >
                <aside
                  id="aside-1"
                  className={`Aside-Icon h-[2rem] p-[0.5rem] flex justify-center items-center rounded-[0.3rem] text-sm bg-black text-white ${
                    onHoverIcon[1] ? "visiblie" : "invisible"
                  }`}
                >
                  Comment
                </aside>

                <RiChat1Line
                  id="icon-1"
                  className="cursor-pointer"
                  onClick={openCommentSection}
                />
              </div>
            </div>
            <div className="text-2xl flex border-[2px] space-x-4">
              <div
                className=""
                onMouseEnter={() => handleIconHover(2, true)}
                onMouseLeave={() => handleIconHover(2, false)}
              >
                <aside
                  id="aside-2"
                  className={`Aside-Icon h-[2rem] p-[0.5rem] flex justify-center items-center rounded-[0.3rem] text-sm bg-black text-white  ${
                    onHoverIcon[2] ? "visiblie" : "invisible"
                  }`}
                >
                  Bookmark
                </aside>
                <BiBookmarkPlus id="icon-2" className="cursor-pointer" />
              </div>
              <div
                className=""
                onMouseEnter={() => handleIconHover(3, true)}
                onMouseLeave={() => handleIconHover(3, false)}
              >
                <aside
                  id="aside-3"
                  className={`Aside-Icon h-[2rem] p-[0.5rem] flex justify-center items-center rounded-[0.3rem] text-sm bg-black text-white ${
                    onHoverIcon[3] ? "visiblie" : "invisible"
                  }`}
                >
                  Share
                </aside>
                <RiShareForwardLine id="icon-3" className="cursor-pointer" />
              </div>
              <div
                className=""
                onMouseEnter={() => handleIconHover(4, true)}
                onMouseLeave={() => handleIconHover(4, false)}
              >
                <aside
                  id="aside-4"
                  className={`Aside-Icon h-[2rem] p-[0.5rem] flex justify-center items-center rounded-[0.3rem] text-sm bg-black text-white ${
                    onHoverIcon[4] ? "visiblie" : "invisible"
                  }`}
                >
                  More
                </aside>
                <RiMoreFill id="icon-4" className="cursor-pointer" />
              </div>
            </div>
          </div>
          {/* ************* Content of Single Post************** */}
          <div className="Full-post-cont">
            <div className="Image-wrapper">
              <img
                src="images/black_love.jpg"
                alt="black couple kissing"
                className="image  "
              />
            </div>
            <div className="Post pl-[1rem] pr-[1rem pt-[2rem]">
              <p className=" leading-[45px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                tempore eum laborum, exercitationem rem quia hic perspiciatis,
                odio dolores enim voluptatum accusamus magni nesciunt veritatis
                deserunt cupiditate velit pariatur, consequatur sint sed.
                Mollitia, impedit eos, aliquam sequi eius architecto adipisci
                reprehenderit nesciunt veritatis incidunt quidem facere autem
                ducimus labore.
                <br /> Nemo unde commodi distinctio eius error culpa sunt
                placeat? A fugiat illum voluptate asperiores ipsa eveniet
                ducimus? Laborum perspiciatis natus quia harum voluptatem minus
                vel, atque a quasi, amet officiis reprehenderit, sit molestias
                consequuntur provident deleniti tempore inventore? Deleniti
                consequatur facilis soluta similique ratione architecto, nobis
                voluptatibus laudantium voluptatum voluptas eius exercitationem
                velit vero reiciendis dignissimos aspernatur maiores possimus
                atque blanditiis.
                <br /> Quidem illo rem amet nemo libero omnis iste neque quia
                reiciendis necessitatibus est eius a error facere possimus
                perferendis esse, quae nulla. Ipsa eum voluptate dolores
                veritatis libero asperiores iusto eius quod accusamus et
                molestias cupiditate quia atque, ratione nobis.
              </p>
            </div>
          </div>
        </article>
      </section>
      <Comments />
    </>
  );
};

export default SinglePage;
