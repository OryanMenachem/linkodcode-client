import { BrowserRouter, Routes, Route } from "react-router";
import LayoutMain from "../components/app-layout/Layout";
import { Posts, Home } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
