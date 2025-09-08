import Post from "../features/post/post";

import { useEffect, useState } from "react";
import { getData } from "../utils/helpers";

export default function Posts() {
  const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const posts = await getData("http://localhost:3000/post");
      setPostsData(posts);
    }
    if (!postsData.length) {
      getPosts();
    }
  }, []);

  return (
    <div className="page posts-page">
      <h1 className="title posts-title">Posts</h1>
      <div className="post-display-container">
        {postsData.map((post: any) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
