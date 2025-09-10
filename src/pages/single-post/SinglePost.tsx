import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { postsContext } from "../../context/Posts";
import { LikeBtn, DateTime } from "../../components";
import type { TypePost } from "../../features/post/post";
import Post from "../../features/post/post";
import { Loading } from "../../components/common/Common";
import { postManager } from "./services";
import { useNavigate } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation();
  const { id } = location.state || {};

  if (!id) {
    return <SearchPost />;
  }

  const { posts } = useContext(postsContext);
  let post;
  if (posts.length) {
    post = posts.find((p: any) => p.id === id);
  }

  return (
    <div className="page single-post--page">
      {post ? <PostDisplay post={post} /> : <Loading />}
    </div>
  );
}

export function PostDisplay({ post }: { post: TypePost }) {
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

export function PostView() {
  const location = useLocation();
  const { post } = location.state || {};

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

function SearchPost() {
  const [postId, setPostId] = useState<any>();
  const navigate = useNavigate();
  return (
    <main className="search-post">
      <label className="label username--label" htmlFor="search-post">
        Search Post
      </label>
      <input
        id="search-post"
        className="search-post--input"
        type="text"
        name="search-post"
        required
        onChange={(e) => setPostId(e.target.value)}
      />
      <button
        className="btn search-post--btn"
        onClick={async () => {
          const post = await postManager(postId);
          navigate("/single-post-view", { state: { post: post } });
        }}
      >
        Search
      </button>
    </main>
  );
}
