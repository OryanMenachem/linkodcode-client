import { Outlet } from "react-router";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const LayoutMain = () => {
  return (
    <div className="layout main--layout">
      <Header />
      <main className="main-child">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutMain;
