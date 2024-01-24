import { BsDatabaseAdd } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";

export default [
  {
    icon: <BsDatabaseAdd className="text-white/90 text-2xl" />,
    title: "Total Sales",
    value: "12,021",
    percent: "+12",
    color: "bg-orange-200",
    iconBackground: "bg-orange-700",
    percentColor: "text-green-500",
    percentBackground: "bg-green-100/30",
  },
  {
    icon: <IoCartOutline className="text-white/90 text-2xl" />,
    title: "Total Orders",
    value: "14,410",
    percent: "+38",
    color: "bg-blue-200",
    iconBackground: "bg-blue-700",
    percentColor: "text-green-500",
    percentBackground: "bg-green-100/30",
  },
  {
    icon: <FaRegChartBar className="text-white/90 text-2xl" />,
    title: "Total Visitations",
    value: "12,410",
    percent: "-19",
    color: "bg-red-200",
    iconBackground: "bg-red-700",
    percentColor: "text-red-500",
    percentBackground: "bg-red-100/30",
  },
  {
    icon: <TbPigMoney className="text-white/90 text-2xl" />,
    title: "Total Revenue",
    value: "19,410",
    percent: "+40",
    color: "bg-green-200",
    iconBackground: "bg-green-700",
    percentColor: "text-green-500",
    percentBackground: "bg-green-100/30",
  },
];
