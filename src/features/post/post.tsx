import { useState } from "react";

export default function Post({ post }: { post: TypePost }) {
  return (
    <article className="post-card">
      <h1 className="title post--title">{post.postTitle}</h1>
      <img className="img post--img" src={post.imgSrc} alt={post.imgAlt} />
      <p className="post-description">{post.postDescription}</p>
      <LikeBtn likesNumber={0} />
      <CurrentDateTime classname="post" />
    </article>
  );
}

export type TypePost = {
  postTitle: string;
  postDescription: string;
  imgSrc?: string;
  imgAlt?: string;
  likesNumber: number;
};

export function CurrentDateTime({ classname }: { classname: string }) {
  const timestamp = new Date().toLocaleString();
  return (
    <time className={`time ${classname}--time`} dateTime={timestamp}>
      {timestamp}
    </time>
  );
}
export function LikeBtn({ likesNumber }: { likesNumber: number }) {
  const [likes, setLikes] = useState(likesNumber);
  const [liked, setLiked] = useState(false);

  const addRemoveLike = () => {
    !liked ? setLikes(likes + 1) : setLikes(likes - 1);
    setLiked(!liked);
  };
  return (
    <button className="btn likes-btn" onClick={() => addRemoveLike()}>
      👍{likes}
    </button>
  );
}

export const postTest: TypePost = {
  postTitle: "Oryan",
  postDescription: "A test post",
  imgSrc: "../../../public/vite.svg",
  imgAlt: "vite logo",
  likesNumber: 0,
};
