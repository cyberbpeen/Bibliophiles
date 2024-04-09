import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineSun,
  HiPlus,
} from "react-icons/hi";
import { Button } from "./ui";

const Header = () => {
  return (
    <header className="h-20 px-8 border-b border-b-zinc-800">
      <div className="h-full flex justify-between items-center">
        <div className="relative">
          <HiOutlineSearch
            fontSize={20}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400"
          />
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="bg-transparent text-sm text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-zinc-50 ring-1 ring-inset rounded ring-zinc-800 active:outline-none h-10 w-[24rem] pl-11 pr-4"
          />
        </div>
        <div className="flex gap-6">
          <Button variant="outline" _content="icon">
            <HiPlus fontSize={20} />
          </Button>
          <Button variant="outline" _content="icon">
            <HiOutlineBell fontSize={20} />
          </Button>
          <Button variant="outline" _content="icon">
            <HiOutlineSun fontSize={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
