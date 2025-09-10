import { Outlet } from "react-router";
import { Footer } from "../../footer/Footer";
import { MainHeader } from "../../header/Header";

const MainLayout = () => {
  return (
    <div className="layout main--layout">
      <MainHeader />
      <main className="main-child">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
