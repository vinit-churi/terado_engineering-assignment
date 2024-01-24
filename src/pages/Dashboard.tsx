import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div className="grid grid-cols-[250px_auto] grid-rows-[90px_auto] max-[1100px]:grid-cols-[0px_auto] h-screen min-h-0">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
