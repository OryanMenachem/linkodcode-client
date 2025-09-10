import { DateTime, LikeBtn } from "../../components";
import { useNavigate } from "react-router-dom";

export default function Post({ post }: { post: Post }) {
  const navigate = useNavigate();
  return (
    <article className="post-card post-post--card">
      <h1 className="post--title">{post.postTitle}</h1>
      <img className="post--img" src={post.imgSrc} alt={post.imgAlt} />
      <p className="post-description">{post.postDescription}</p>
      <DateTime classname="post" timestamp={post.timestamp} />
      <LikeBtn likesNumber={post.likesNumber} />
      <button
        onClick={() => navigate("/single-post", { state: { id: post.id } })}
      >
        View
      </button>
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
