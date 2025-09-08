import { BrowserRouter, Routes, Route } from "react-router";
import LayoutMain from "../components/layout/mainLayout/MainLayout";
import { Posts, Home, NotFound } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
