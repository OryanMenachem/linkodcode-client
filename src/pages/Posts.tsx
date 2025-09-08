import Post from "../features/post/post";
import data from "../data/data";

export default function Posts() {
  const postsArray = data;
  return (
    <div className="page posts-page">
      <h1 className="title posts-title">Posts</h1>
      <div className="post-display-container">
        {postsArray.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
