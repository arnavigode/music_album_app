import React from "react";
import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="post-img"
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-album-cover-template-design-8c1c49849522f3e17e0776f15dd6e47e_screen.jpg?ts=1617448722"
        alt=""
      />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">Classical</span>
          <span className="post-cat">Pop</span>
          <span className="post-cat">Hip-Hop</span>
          <span className="post-cat">Dance</span>
          <span className="post-cat">Classical</span>
        </div>
        <span className="post-title">Title Of Post</span>
        <hr />
        <span className="post-date">1yr ago</span>
      </div>
      <p className="post-discp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi
        eaque enim voluptate distinctio aut ut minima, autem corporis, itaque
        eius pariatur nesciunt est repellat eveniet ipsum quasi deleniti
        perspiciatis.
      </p>
    </div>
  );
}
