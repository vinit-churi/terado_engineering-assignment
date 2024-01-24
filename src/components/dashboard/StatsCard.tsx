import { MdMoreVert } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type TStatsCard = {
  data: {
    icon: React.ReactNode;
    title: string;
    value: string;
    percent: string;
    color: string;
    iconBackground: string;
    percentColor: string;
    percentBackground: string;
  };
};

const StatsCard = ({ data }: TStatsCard) => {
  return (
    <div
      className={`rounded-md p-4 flex-[1_1_0px] max-[870px]:flex-[0_1_48%] max-[500px]:flex-[1_1_100%]  ${data.color}`}
    >
      <div className="flex justify-between items-center">
        <div
          className={`flex justify-center items-center rounded-full h-12 w-12 ${data.iconBackground}`}
        >
          {data.icon}
        </div>
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-0">
              <MdMoreVert className="cursor-pointer text-2xl text-slate-800" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute top-0 w-max right-0">
              <DropdownMenuLabel>Stats</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                {data.title} details
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-sm font-semibold text-slate-700/60">
            {data.title}
          </p>
          <p className="text-2xl font-bold">{data.value} $</p>
        </div>
        <div>
          <p
            className={`${data.percentBackground} ${data.percentColor} rounded-md px-2 py-1`}
          >
            {data.percent} %
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
