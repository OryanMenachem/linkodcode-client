import { BrowserRouter, Routes, Route } from "react-router";
import { MainLayout, UserLayout } from "../components/layout/mainLayout/Layout";
import {
  Posts,
  Home,
  NotFound,
  AddPost,
  SinglePost,
  Login,
  PostView,
} from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<UserLayout />}>
          <Route path="/posts" element={<Posts />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/single-post" element={<SinglePost />} />
          <Route path="/single-post-view" element={<PostView />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
