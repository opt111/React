import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import "./AuthForm.css";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending, isError, error } = useRegister();

  function handleSubmit(event) {
    event.preventDefault();
    mutate({ name, email, password });
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <label className="auth-form__field">
        Name
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="John Doe"
          required
        />
      </label>

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
          minLength={6}
          required
        />
      </label>

      {isError && <p className="auth-form__error">{error.message}</p>}

      <button type="submit" className="auth-form__submit" disabled={isPending}>
        {isPending ? "Creating account..." : "Sign up"}
      </button>
    </form>
  );
}
