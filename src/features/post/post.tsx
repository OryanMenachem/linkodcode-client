import { DateTime, LikeBtn } from "../../components";

export default function Post({ post }: { post: TypePost }) {
  return (
    <article className="post-card">
      <h1 className="title post--title">{post.postTitle}</h1>
      <img className="img post--img" src={post.imgSrc} alt={post.imgAlt} />
      <p className="post-description">{post.postDescription}</p>
      <LikeBtn likesNumber={post.likesNumber} />
      <DateTime classname="post" timestamp={post.timestamp} />
    </article>
  );
}

export type TypePost = {
  postTitle: string;
  postDescription: string;
  imgSrc?: string;
  imgAlt?: string;
  likesNumber: number;
  timestamp: string;
};
