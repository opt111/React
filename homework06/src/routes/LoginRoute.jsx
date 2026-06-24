import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

export default function LoginRoute() {
  return (
    <div className="auth-card">
      <h1>Login Route</h1>
      <LoginForm />
      <p>
        Немає акаунту? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}
