import { Outlet } from "react-router";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

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
