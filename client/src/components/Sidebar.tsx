import {
  HiBookOpen,
  HiCog,
  HiOutlineLogout,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";
import LinkItem from "./LinkItem";
import { Button } from "./ui";
import { useAuth } from "../context/AuthProvider";

const Sidebar = () => {
  const { setToken }: any = useAuth();

  const onLogout = () => {
    setToken("");
  };

  return (
    <aside className="flex flex-col w-64 border-r border-zinc-800 px-6">
      <div className="h-20 flex items-center px-3 text-2xl font-bold">
        Bibliophile's
      </div>
      <div className="flex-1 py-8 flex flex-col gap-1">
        <LinkItem label="Dashboard" path="/" icon={<HiOutlineViewGrid />} />
        <LinkItem label="Books" path="/books" icon={<HiBookOpen />} />
        <LinkItem label="Genres" path="/genres" icon={<HiBookOpen />} />
        <LinkItem label="Profile" path="/profile" icon={<HiUser />} />
        <LinkItem label="Settings" path="/settings" icon={<HiCog />} />
      </div>
      <div>
        <Button
          onClick={onLogout}
          variant="ghost"
          _content="leading"
          className="w-full justify-start"
        >
          <HiOutlineLogout size={20} /> Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
