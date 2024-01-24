import ProfileDropdown from "@/components/common/ProfileDropdown";
import SearchBar from "@/components/common/SearchBar";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="border-b border-slate-300/60 grid items-center px-4 grid-cols-[max-content_auto_max-content]">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className=" relative z-10">
        <SearchBar />
      </div>
      <div className="flex gap-2 items-center">
        <IoIosNotificationsOutline className="h-6 w-6 text-slate-500 cursor-pointer" />
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Navbar;
