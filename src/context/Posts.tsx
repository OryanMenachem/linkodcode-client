import { createContext, useState } from "react";
import { type TypePost } from "../features/post/post";

const typeExContextState = {
  posts: [],
};
export const postsContext =
  createContext<TypeExContextType>(typeExContextState);

export default function PostsContext(props: containerProps) {
  const [posts, setPosts] = useState<TypePost[]>([]);
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
  posts: TypePost[] | [];
  setPosts?: any;
};
