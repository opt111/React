import { Link } from "react-router-dom";

export default function LoginRoute() {
  return (
    <div>
      <h1>Login Route</h1>
      <p>
        Немає акаунту? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}
