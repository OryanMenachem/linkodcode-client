import { BrowserRouter, Routes, Route } from "react-router";
import {
  MainLayout,
  UserLayout,
} from "../components/layout/mainLayout/MainLayout";
import { Posts, Home, NotFound, AddPost, SinglePost, Login } from "../pages";

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
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
