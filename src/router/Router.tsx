import { BrowserRouter, Routes, Route } from "react-router";
import LayoutMain from "../components/layout/mainLayout/MainLayout";
import { Posts, Home, NotFound, AddPost, SinglePost } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/single-post" element={<SinglePost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
