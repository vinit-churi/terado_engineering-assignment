import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div className="grid grid-cols-[300px_auto] grid-rows-[90px_auto] min-h-screen">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
