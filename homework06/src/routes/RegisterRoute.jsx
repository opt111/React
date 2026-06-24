import { Link } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";

export default function RegisterRoute() {
  return (
    <div className="auth-card">
      <h1>Register Route</h1>
      <RegisterForm />
      <p>
        Вже є акаунт? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}
