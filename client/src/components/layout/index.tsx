import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/toaster";

const Layout = () => {
  return (
    <section className="w-screen h-screen flex overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <Header />
        <ScrollArea style={{ height: "calc(100% - 94px)" }}>
          <Outlet />
        </ScrollArea>
      </main>
      <Toaster />
    </section>
  );
};

export default Layout;
