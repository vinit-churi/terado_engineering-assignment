import { Link, useLocation } from "react-router-dom";

type TSidebarLink = {
  link: string;
  icon: React.ReactNode;
  title: string;
};
const SidebarLink = ({ link, icon, title }: TSidebarLink) => {
  const location = useLocation();
  const isSelected = location.pathname === link;
  return (
    <Link
      to={link}
      className={`flex items-center gap-2 rounded-lg py-2 px-3 transition-colors duration-300 ease-in-out  ${
        isSelected ? "bg-blue-600 hover:!bg-blue-500 text-white" : null
      }`}
    >
      <div className={`${isSelected ? "text-white" : "text-slate-400"}`}>
        {icon}
      </div>
      <span
        className={`text-slate-400 text-lg ${
          isSelected ? "!text-white" : null
        }`}
      >
        {title}
      </span>
    </Link>
  );
};

export default SidebarLink;
