import React, { useState } from "react";
import { login, register } from "../../services/loginService";
import { useNavigate } from "react-router-dom";
import "../../styles/auth/login.css";

export default function LoginForm() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [toRegister, setToRegister] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const setUsername = (username: string) => {
    setError("");
    setToRegister(false);
    setUser((user) => ({ ...user, username: username }));
  };

  const setPassword = (password: string) => {
    setError("");
    setToRegister(false);
    setUser((user) => ({ ...user, password: password }));
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    if (!user.username || !user.password) {
      setError("Username and Password are required!");
      return;
    }
    const result = toRegister ? await register(user) : await login(user);
    if (result.error) {
      setError(`${toRegister ? "Registeretion" : "Login"} Faild: ${result.error}`);
      return;
    }
    setSuccess(true);
  };

  return !success ? (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login Or Register</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={(event) => setPassword(event.target.value)}
        />

      {error && <p className="error">{error}</p>}

      <button type="submit" disabled={!!error}>
        Log in
      </button>
      <p>
        Do not have an account?
        <button
          type="submit"
          disabled={!!error}
          onClick={() => {
            setToRegister(true);
            handleSubmit();
          }}
        >
          Register
        </button>
      </p>
    </form>
  ) : (
    <section className="success">
      <p className="success-message">
        You {toRegister ? "Registered" : "Logged in"} Successfully!
      </p>
      <button
        className="nav-home-btn"
        disabled={!success}
        onClick={() => navigate("/home")}
      >
        Go to Home
      </button>
    </section>
  );
}