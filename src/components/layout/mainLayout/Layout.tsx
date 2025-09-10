import { Outlet } from "react-router";
import { Footer } from "../../footer/Footer";
import { MainHeader, UserHeader } from "../../header/Header";

export const MainLayout = () => {
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

export const UserLayout = () => {
  return (
    <div className="layout main--layout">
      <UserHeader />
      <main className="main-child">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


