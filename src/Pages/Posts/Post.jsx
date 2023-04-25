import React from "react";

const Post = () => {
  return (
    <article className="Post flex px-[1.5rem] flex-col border-r-[1px]">
      <div className="Posts-container border-b-[1px] mb-[1rem] px-[3rem] py-[3rem] ">

        <div className="img-container">
          <img
            src="images/black_love.jpg"
            alt="black couple kissing"
            className="image rounded-md "
          />
        </div>
        <div className="post-categories flex  text-yellow-300 items-center justify-center my-[.3rem]">
          <span className="post-category text-center mr-[0.3rem] cursor-pointer">
            Health
          </span>
          <span className="post-category text-center mr-[0.2rem] cursor-pointer">
            Relationship
          </span>
        </div>
       {/* Post Snipet and details */}
        <div className="author-date-info flex items-center mb-[0.5rem] ">
          <span className=" border-[1px] w-[2rem] h-[2rem] mr-[0.3rem]">
            <img src="images/profile-image/user-logo.png" alt="Profile" />
          </span>
          <span className="author text-stone-700 text-sm font-semibold ml-[0.3rem] flex-1 ">
            Osatohamhen Ebhohon
          </span>
          <span className="post-date italic text-stone-400 text-sm flex justify-end ">
            1 hour ago
          </span>
        </div>
 <span className="post-title text-center mb-[0.4rem] flex md:text-xl font-bold cursor-pointer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        {/* <div className="post-description"> */}
        <p className="text-sm text-gray-600 my-[0.3rem] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dignissimos id officia rem, nisi aliquid magni inventore commodi,
          nostrum nihil incidunt optio labore repellendus temporibus non dolores
          ex velit! Excepturi neque error culpa inventore voluptatum eaque
          quibusdam illo maiores officia dolorem, voluptates tempore esse velit
          repudiandae. Aspernatur ipsa tenetur animi sapiente magnam modi
          mollitia doloremque officia architecto hic delectus optio,
          necessitatibus non maiores minus, laboriosam unde ratione quia totam
          dolorem ab! Cupiditate tenetur voluptate atque temporibus unde maxime
          corporis, voluptatibus dolor ipsum nam vitae excepturi veniam eaque
          nulla esse cumque.
        </p>
      </div>

      {/* </div> */}
    </article>
    // <div></div>
  );
};

export default Post;
