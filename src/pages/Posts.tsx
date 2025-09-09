import Post from "../features/post/post";
import { Loading } from "../components/General";
import { useEffect, useState } from "react";
import { httpRequest, type Url } from "../utils/helpers";

export default function Posts() {
  const [postsData, setPostsData]: [postsData: object[], setPostsData: any] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const url: Url = {
        url: "http://localhost:3000/post",
        method: "GET",
      };
      const result = await httpRequest(url);
      if (!result.error && result.content?.length) {
        setPostsData(result.content);
      }
    }
    if (!postsData.length) {
      getPosts();
    }
  }, []);

  return (
    <div className="page posts-page">
      <h1 className="title posts-title">Posts</h1>
      {postsData.length ? (
        <PostsContainer postsData={postsData} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

function PostsContainer({ postsData }: { postsData: any }) {
  return (
    <div className="post-display-container">
      {postsData.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
