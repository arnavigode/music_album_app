import React from "react";
import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlepost-wrap">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-album-cover-template-design-8c1c49849522f3e17e0776f15dd6e47e_screen.jpg?ts=1617448722"
          alt=""
          className="sinlepost-img"
        />
        <h1 className="singlepost-title">
          Lorem ipsum dolor sit amet consectetur
          <div className="singlepost-edit-cont">
            <i className="singlepost-icon fa-solid fa-pen-to-square"></i>
            <i className="singlepost-icon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlepost-info">
          <span className="singlepost-artist">
            Artist: <b>Justin B</b>{" "}
          </span>
          <span className="singlepost-date">1 year ago</span>
        </div>
        <p className="singlepost-discp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dolorem unde repudiandae magni amet necessitatibus, molestias quasi
          iusto, esse reiciendis, vel eveniet consequuntur numquam nobis fugiat
          aliquid quae quam. Rem?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dolorem unde repudiandae magni amet necessitatibus, molestias quasi
          iusto, esse reiciendis, vel eveniet consequuntur numquam nobis fugiat
          aliquid quae quam. Rem?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dolorem unde repudiandae magni amet necessitatibus, molestias quasi
          iusto, esse reiciendis, vel eveniet consequuntur numquam nobis fugiat
          aliquid quae quam. Rem?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dolorem unde repudiandae magni amet necessitatibus, molestias quasi
          iusto, esse reiciendis, vel eveniet consequuntur numquam nobis fugiat
          aliquid quae quam. Rem?
        </p>
      </div>
    </div>
  );
}
