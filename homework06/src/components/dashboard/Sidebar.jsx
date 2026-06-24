import SidebarMenu from "./SidebarMenu";
import LogoutButton from "../auth/LogoutButton";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <span className="sidebar__logo-dot" />
        <span>
          Logistics
          <br />
          Dashboard
        </span>
      </div>

      <SidebarMenu />

      <LogoutButton />
    </aside>
  );
}
