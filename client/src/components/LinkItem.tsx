import { Link, useLocation } from "react-router-dom";

interface LinkItemProps {
  label: string;
  path: string;
  icon: any;
}

const LinkItem = ({ label, path, icon }: LinkItemProps) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      className={`h-12 px-2 py-3 gap-4 flex items-center rounded-lg hover:bg-zinc-800 text-base hover:text-zinc-50 ${
        pathname === path ? "text-zinc-50 bg-zinc-800" : "text-zinc-400"
      }`}
    >
      <span className="text-xl">{icon}</span>
      {label}
    </Link>
  );
};

export default LinkItem;
