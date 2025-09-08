import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

const LayoutMain = () => {
  return (
    <div className="layout main--layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutMain;
