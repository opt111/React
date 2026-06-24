import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function LogoutButton() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <button type="button" className="sidebar__logout" onClick={handleLogout}>
      Logout
    </button>
  );
}
