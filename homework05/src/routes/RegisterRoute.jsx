import { Link } from "react-router-dom";

export default function RegisterRoute() {
  return (
    <div>
      <h1>Register Route</h1>
      <p>
        Вже є акаунт? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}
