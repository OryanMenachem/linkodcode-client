import { timeStamp, httpRequest } from "../../utils/helpers";
import type { Post } from "../../features/post/post";
import type { Url } from "../../utils/helpers";

export async function addPost(
  postTitle: string,
  postDescription: string,
  imgSrc?: string,
  imgAlt?: string
) {
  const post: Post = {
    postTitle,
    postDescription,
    imgSrc: `http://localhost:3000/images/${imgSrc}.jpg`,
    imgAlt,
    likesNumber: 0,
    timestamp: timeStamp(),
  };

  const url: Url = {
    url: "http://localhost:3000/post",
    method: "POST",
    body: post,
  };
  const result = await httpRequest(url);
  console.log(result.content);
  return result.content;
}
