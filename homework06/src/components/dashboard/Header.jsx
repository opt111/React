import { useAuthStore } from "../../store/authStore";
import "./Header.css";

export default function Header() {
  const email = useAuthStore((state) => state.user?.email);

  return (
    <header className="dashboard-header">
      <span className="dashboard-header__email">{email}</span>
    </header>
  );
}
