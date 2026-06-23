import { NavLink, Outlet } from "react-router-dom";
import "./DashboardLayout.css";

const NAV_ITEMS = [
  { to: "/dashboard/map", label: "Map" },
  { to: "/dashboard/analytics", label: "Analytics" },
  { to: "/dashboard/favorites", label: "Favorites" },
  { to: "/dashboard/profile", label: "Profile" },
];

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar__logo">
          <span className="sidebar__logo-dot" />
          <span>
            Logistics
            <br />
            Dashboard
          </span>
        </div>

        <nav className="sidebar__nav">
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                "sidebar__link" + (isActive ? " sidebar__link--active" : "")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button type="button" className="sidebar__logout">
          Logout
        </button>
      </aside>

      <main className="dashboard-layout__content">
        <Outlet />
      </main>
    </div>
  );
}
