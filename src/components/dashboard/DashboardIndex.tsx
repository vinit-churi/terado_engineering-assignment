import Stats from "@/components/dashboard/Stats";
import DashboardChart from "./DashboardChart";
import DashboardMap from "./DashboardMap";
import DashboardTable from "./DashboardTable";

const DashboardIndex = () => {
  return (
    <div className="min-h-0 overflow-auto">
      <Stats />
      <div className="flex gap-4 px-4">
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
