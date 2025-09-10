import { httpRequest, type Url } from "../../utils/helpers";

export async function postManager(id: string) {
  const url: Url = {
    url: `http://localhost:3000/post/${id}`,
    method: "GET",
  };
  const result = await httpRequest(url);
  if (result.content) {
    const post = result.content;
    return post;
  }
  return result.message;
}
