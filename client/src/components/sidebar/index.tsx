import { Link, useLocation } from "react-router-dom";
import Flex from "../ui/flex";
import { ReactElement } from "react";
import { BookOpen, LayoutDashboard, Library, LogOut } from "lucide-react";
import { useAuth } from "@/context/auth-provider";
import { Button } from "../ui/button";

interface LinkItemProps {
  label: string;
  path: string;
  icon: ReactElement;
}

const Sidebar = () => {
  const { setToken }: any = useAuth();

  const onLogout = () => {
    setToken("");
  };

  return (
    <aside className="flex flex-col w-64 border-r px-6 pb-3">
      <Flex className="h-20 px-3 text-2xl font-bold">Bibliophile's</Flex>
      <Flex
        justify="normal"
        item="start"
        direction="column"
        gap="1"
        className="flex-1 py-8"
      >
        <LinkItem
          path="/"
          label="Dashboard"
          icon={<LayoutDashboard size={20} />}
        />
        <LinkItem path="/books" label="Books" icon={<BookOpen size={20} />} />
        <LinkItem path="/genres" label="Genres" icon={<Library size={20} />} />
      </Flex>
      <Button
        onClick={onLogout}
        type="button"
        variant="ghost"
        className="justify-start gap-4 h-12 text-muted-foreground hover:text-foreground"
      >
        <LogOut size={20} /> Logout
      </Button>
    </aside>
  );
};

export default Sidebar;

const LinkItem = ({ label, path, icon }: LinkItemProps) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={path}
      className={`h-12 w-full px-2 gap-4 flex items-center rounded-lg text-base hover:text-foreground hover:bg-secondary/80 ${
        pathname === path
          ? "text-foreground bg-secondary/80"
          : "text-muted-foreground"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
};
