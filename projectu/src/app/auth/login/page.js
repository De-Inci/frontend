"use client";
import { useState } from "react";
import { useUser } from "../../../lib/context/user";
import './Login.css';

export default function Login() {
  const user = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
     await user.login(email, password);
    window.location.href = '/dashboard/';
  };
  
  return (
    <section className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="login-input"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="login-input"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="login-actions">
          <button
            className="login-button"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="login-register-text">
            If new, register <a href="/auth/register" className="login-register-link">here</a>
          </p>
        </div>
      </form>
    </section>
  );
}