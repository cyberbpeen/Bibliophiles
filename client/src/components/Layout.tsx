import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <section className="w-screen h-screen flex pb-3">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
