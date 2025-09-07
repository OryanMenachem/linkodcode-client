import Post from "../features/post/Post";
import { type TypePost } from "../features/post/Post";
// import { useEffect, useState } from "react";

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

// export async function getData() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("../../public/posts.json")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
//   console.log(data);

//   return data;
// }

export function convertToPost(
  postsArray: Array<{
    postTitle: string;
    postDescription: string;
    imgSrc?: string | undefined;
    imgAlt?: string | undefined;
    likesNumber: number;
    timestamp: string;
  }>
) {
  let posts: TypePost[] = [];

  for (const pos of postsArray) {
    const post: TypePost = {
      postTitle: pos.postTitle,
      postDescription: pos.postDescription,
      imgSrc: pos.imgSrc,
      imgAlt: pos.imgAlt,
      likesNumber: pos.likesNumber,
      timestamp: pos.timestamp,
    };
    console.log("type pos", typeof post);
    posts.push(post);
  }

  return "";
}
