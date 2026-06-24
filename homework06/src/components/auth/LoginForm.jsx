import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./AuthForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending, isError, error } = useLogin();

  function handleSubmit(event) {
    event.preventDefault();
    mutate({ email, password });
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <label className="auth-form__field">
        Email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="john@example.com"
          required
        />
      </label>

      <label className="auth-form__field">
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="••••••••"
          required
        />
      </label>

      {isError && <p className="auth-form__error">{error.message}</p>}

      <button type="submit" className="auth-form__submit" disabled={isPending}>
        {isPending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
