import Stats from "@/components/dashboard/Stats";
import DashboardChart from "./DashboardChart";
import DashboardMap from "./DashboardMap";
import DashboardTable from "./DashboardTable";

const DashboardIndex = () => {
  return (
    <div className="min-h-0 overflow-auto max-[1100px] col-start-2 row-start-2 overflow-x-hidden">
      <Stats />
      <div className="flex gap-4 px-4 max-[810px]:flex-col">
        <DashboardChart />
        <DashboardMap />
      </div>
      <div className="m-4 h-96 w-auto rounded-md border border-solid border-slate-400">
        <DashboardTable />
      </div>
    </div>
  );
};

export default DashboardIndex;
