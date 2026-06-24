import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import "./DashboardLayout.css";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-layout__main">
        <Header />

        <main className="dashboard-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
