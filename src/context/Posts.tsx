import { createContext, useState } from "react";
import { type Post } from "../features/post/post";

const typeExContextState = {
  posts: [],
};
export const postsContext =
  createContext<TypeExContextType>(typeExContextState);

export default function PostsContext(props: containerProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  return (
    <postsContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </postsContext.Provider>
  );
}

type containerProps = {
  children: React.ReactNode;
};

type TypeExContextType = {
  posts: Post[] | [];
  setPosts?: any;
};
