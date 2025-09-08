import Post from "../features/post/post";
// import { type TypePost } from "../features/post/Post";

export default function Posts({ postsArray }: { postsArray: any[] }) {
  return (
    <div className="page posts-page">
      <h1 className="title posts-title">Posts</h1>
      <div className="post-display-container">
        {postsArray.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
