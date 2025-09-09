// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

export default function AddPost() {
  const timestamp = 0;
  return (
    <div className="page add-post--page">
      <h1 className="title add-post--title">Add Post</h1>
      <form action="http://localhost:3000/post" method="post">
        <label className="label title--label" htmlFor="title">
          title
        </label>
        <input
          className="input title--input"
          type="text"
          name="postTitle"
          required
        />

        <label className="label title--label" htmlFor="title">
          description
        </label>
        <input
          className="input post-description--input"
          type="text"
          name="postDescription"
          required
        />

        <label className="label image--label" htmlFor="title">
          image
        </label>
        <input
          className="input image--input"
          type="text"
          name="imgSrc"
          required
        />

        <label className="label  image-description--label" htmlFor="title">
          image description
        </label>
        <input
          className="input image-description--input"
          type="text"
          name="imgAlt"
          required
        />
      </form>
    </div>
  );
}
