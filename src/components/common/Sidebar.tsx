import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import sidebarLinks from "@/constants/sidebarLinks";
import SidebarLink from "@/components/common/SidebarLink";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { useState } from "react";
const Sidebar = () => {
  const [theme, setTheme] = useState(false);
  return (
    <div className="bg-blue-50/30 row-start-1 row-span-2 border-r border-slate-300/40 col-start-1 col-span-1 px-6 py-6">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="h-auto w-[150px]" />
      </Link>
      <div className="flex flex-col mt-16 gap-2">
        {sidebarLinks.map((link) => (
          <SidebarLink
            key={link.title}
            link={link.link}
            icon={link.icon}
            title={link.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
