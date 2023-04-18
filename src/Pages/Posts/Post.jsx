import React from "react";

const Post = () => {
  return (
    <article className="Post  px-[3rem] flex  flex-col flex-3">
      <div className="img-container">
        <img
          src="images/black_love.jpg"
          alt="black couple kissing"
          className="image"
        />
      </div>
      <div className="post-categories flex  text-yellow-300 items-center justify-center">
        <span className="post-category text-center mr-[0.3rem] cursor-pointer">
          Health
        </span>

        <span className="post-category text-center mr-[0.3rem] cursor-pointer">
          Relationship
        </span>
      </div>
      <span className="post-title text-center  md:text-xl font-bold cursor-pointer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
      </span>
      <hr />
      <span className="post-date italic text-stone-400 flex justify-end ">1 hour ago</span>
      <div className="post-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos id officia rem, nisi aliquid magni inventore commodi, nostrum nihil incidunt optio labore repellendus temporibus non dolores ex velit! Excepturi neque error culpa inventore voluptatum eaque quibusdam illo maiores officia dolorem, voluptates tempore esse velit repudiandae. Aspernatur ipsa tenetur animi sapiente magnam modi mollitia doloremque officia architecto hic delectus optio, necessitatibus non maiores minus, laboriosam unde ratione quia totam dolorem ab! Cupiditate tenetur voluptate atque temporibus unde maxime corporis, voluptatibus dolor ipsum nam vitae excepturi veniam eaque nulla esse cumque.
        </p>
      </div>
    </article>
    // <div></div>
  );
};

export default Post;
