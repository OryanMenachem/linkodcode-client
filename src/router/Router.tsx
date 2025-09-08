import { BrowserRouter, Routes, Route } from "react-router";
import LayoutMain from "../components/app-layout/Layout";
import { Posts } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
