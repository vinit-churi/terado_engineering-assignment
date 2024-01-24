import ProfileDropdown from "@/components/common/ProfileDropdown";
import SearchBar from "@/components/common/SearchBar";
import { IoIosNotificationsOutline } from "react-icons/io";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="border-b border-slate-300/60 grid grid-rows-1 max-[1100px]:col-start-2 max-[1100px] row-start-1 items-center px-4 grid-cols-[max-content_auto_max-content]">
      <h1 className="text-3xl col-start-1 font-bold max-[1100px]:hidden row-start-1">
        Dashboard
      </h1>
      <MobileNav />
      <div className=" relative z-10 col-start-2 row-start-1">
        <SearchBar />
      </div>
      <div className="flex gap-2 items-center col-start-3 row-start-1">
        <IoIosNotificationsOutline className="h-6 w-6 text-slate-500 cursor-pointer" />
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Navbar;
