import { BsDatabaseAdd } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";

export default [
  {
    icon: <BsDatabaseAdd />,
    title: "Total Sales",
    value: "12,021",
    percent: "12",
    color: "bg-yellow-400",
    iconBackground: "bg-yellow-700",
  },
  {
    icon: <IoCartOutline />,
    title: "Total Orders",
    value: "14,410",
    percent: "38",
    color: "bg-blue-400",
    iconBackground: "bg-blue-700",
  },
  {
    icon: <FaRegChartBar />,
    title: "Total Visitations",
    value: "12,410",
    percent: "19",
    color: "bg-red-400",
    iconBackground: "bg-red-700",
  },
  {
    icon: <TbPigMoney />,
    title: "Total Revenue",
    value: "19,410",
    percent: "40",
    color: "bg-green-400",
    iconBackground: "bg-green-700",
  },
];
