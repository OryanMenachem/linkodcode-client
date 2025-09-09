import { createContext, useState } from "react";
import { type Post } from "../features/post/post";
export const postsContext = createContext(null);

export default function PostsContext({ children }: { children: any }) {
  const [posts, setPosts] : [posts : Post[] , setPosts : any] = useState([]);
  return (
    <postsContext.Provider value={{posts, setPosts}}>
      {children}
    </postsContext.Provider>
  );
}
