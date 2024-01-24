import { RxDashboard } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { BsChatDots } from "react-icons/bs";
import { GoOrganization } from "react-icons/go";
import { MdOutlineCases } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdOutlinePermPhoneMsg } from "react-icons/md";

export default [
  {
    link: "/",
    title: "Dashboard",
    icon: <RxDashboard />,
  },
  {
    link: "/e-commerce",
    title: "E-commerce",
    icon: <IoCartOutline />,
  },
  {
    link: "/customer",
    title: "Customer",
    icon: <MdOutlinePersonAddAlt />,
  },
  { link: "/crm", title: "CRM", icon: <GoPeople /> },
  {
    link: "/chat",
    title: "Chat",
    icon: <BsChatDots />,
  },
  {
    link: "/companies",
    title: "Companies",
    icon: <GoOrganization />,
  },
  {
    link: "/project",
    title: "Project",
    icon: <MdOutlineCases />,
  },
  {
    link: "/calendar",
    title: "Calendar",
    icon: <FaRegCalendarAlt />,
  },
  {
    link: "/tasks",
    title: "Tasks",
    icon: <FaTasks />,
  },
  {
    link: "/contacts",
    title: "Contacts",
    icon: <MdOutlinePermPhoneMsg />,
  },
];
