import { Link } from "react-router-dom";
import "./NavigateBtn.css";

export default function NavigateBtn({ to, children, variant = "primary" }) {
  return (
    <Link to={to} className={`navigate-btn navigate-btn--${variant}`}>
      {children}
    </Link>
  );
}
