import Post from "../../features/post/post";
import { Loading } from "../../components/common/Common";
import { useEffect, useContext } from "react";
import { httpRequest, type Url } from "../../utils/helpers";
import { postsContext } from "../../context/Posts";

export default function Posts() {
  const { posts, setPosts } = useContext(postsContext);
  useEffect(() => {
    async function getPosts() {
      const url: Url = {
        url: "http://localhost:3000/post",
        method: "GET",
      };
      const result = await httpRequest(url);
      if (
        !result.error &&
        Array.isArray(result.content) &&
        result.content.length
      ) {
        setPosts(result.content);
      }
    }
    if (!posts.length) {
      getPosts();
    }
  }, []);

  return (
    <div className="page posts-page">
      <h1 className="title posts-title">Posts</h1>
      {posts.length ? <PostsContainer postsData={posts} /> : <Loading />}
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
