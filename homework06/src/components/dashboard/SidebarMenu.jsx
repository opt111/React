import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/dashboard/map", label: "Map" },
  { to: "/dashboard/analytics", label: "Analytics" },
  { to: "/dashboard/favorites", label: "Favorites" },
  { to: "/dashboard/profile", label: "Profile" },
];

export default function SidebarMenu() {
  return (
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
  );
}
