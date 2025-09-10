import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "../../context/Posts";
import { LikeBtn, DateTime } from "../../components";
import type { Post } from "../../features/post/post";
import { Loading } from "../../components/common/Common";

export default function SinglePost() {
  const location = useLocation();
  const { id } = location.state || {};
  const { posts } = useContext(postsContext);
  let post;
  if (posts.length) {
    post = posts.find((p: any) => p.id === id);
  }

  return (
    <div className="page single-post--page">
      {post ? <PostView post={post} /> : <Loading />}
    </div>
  );
}

function PostView({ post }: { post: Post }) {
  return (
    <main className="post-card post-view-post--card">
      <h1 className="post--title">{post.postTitle}</h1>
      <img className="post--img" src={post.imgSrc} alt={post.imgAlt} />
      <p className="post-description">{post.postDescription}</p>
      <LikeBtn likesNumber={post.likesNumber} />
      <DateTime classname="post" timestamp={post.timestamp} />
    </main>
  );
}
