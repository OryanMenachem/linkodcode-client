import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PostsContext from "./context/Posts.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostsContext>
      <App />
    </PostsContext>
  </StrictMode>
);
