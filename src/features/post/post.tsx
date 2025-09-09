import { DateTime, LikeBtn } from "../../components";

export default function Post({ post }: { post: Post }) {
  return (
    <article className="post-card post-post--card">
      <h1 className="post--title">{post.postTitle}</h1>
      <img className="post--img" src={post.imgSrc} alt={post.imgAlt} />
      <p className="post-description">{post.postDescription}</p>
      <LikeBtn likesNumber={post.likesNumber} />
      <DateTime classname="post" timestamp={post.timestamp} />
    </article>
  );
}

export type Post = {
  id?: number;
  postTitle: string;
  postDescription: string;
  imgSrc?: string;
  imgAlt?: string;
  likesNumber: number;
  timestamp: string;
};
