// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { type Post } from "../features/post/post";
import { httpRequest, timeStamp, type Url } from "../utils/helpers";

export default function AddPost() {
  const [postTitle, setPostTitle]: [postTitle: string, setPostTitle: any] =
    useState("");
  const [postDescription, setPostDescription]: [
    postDescription: string,
    setPostDescription: any
  ] = useState("");
  const [imgSrc, setImgSrc]: [imgSrc: string, setImgSrc: any] = useState("");
  const [imgAlt, setImgAlt]: [imgAlt: string, setImgAlt: any] = useState("");

  return (
    <div className="page add-post--page">
      <h1 className="title add-post--title">Add Post</h1>
      <div className="post-card add-post--post-card">
        <label className="label title--label" htmlFor="postTitle">
          title
        </label>
        <input
          id="postTitle"
          className="input"
          type="text"
          name="postTitle"
          required
          onChange={(e) => setPostTitle(e.target.value)}
        />

        <label className="label title--label" htmlFor="postDescription">
          description
        </label>
        <input
          id="postDescription"
          className="input"
          type="text"
          name="postDescription"
          required
          onChange={(e) => setPostDescription(e.target.value)}
        />

        <label className="label image--label" htmlFor="imgSrc">
          image
        </label>
        <input
          id="imgSrc"
          className="input"
          type="text"
          name="imgSrc"
          required
          onChange={(e) => setImgSrc(e.target.value)}
        />

        <label className="label  image-description--label" htmlFor="imgAlt">
          image description
        </label>
        <input
          id="imgAlt"
          className="input"
          type="text"
          name="imgAlt"
          required
          onChange={(e) => setImgAlt(e.target.value)}
        />
      </div>
      <button
        className="btn add-post--btn"
        type="button"
        onClick={async () => {
          addPost(postTitle, postDescription, imgSrc, imgAlt);
        }}
      >
        add post
      </button>
    </div>
  );
}

async function addPost(
  postTitle: string,
  postDescription: string,
  imgSrc?: string,
  imgAlt?: string
) {
  const post: Post = {
    postTitle,
    postDescription,
    imgSrc: `http://localhost:3000/images/${imgSrc}.jpg`,
    imgAlt,
    likesNumber: 0,
    timestamp: timeStamp(),
  };

  const url: Url = {
    url: "http://localhost:3000/post",
    method: "POST",
    body: post,
  };
  const result = await httpRequest(url);
  console.log(result.content);
  return result.content;
}
