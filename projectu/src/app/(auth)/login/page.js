"use client";

import React, { useState } from "react";
import TextInputField from "@/components/webpage/section/TextInputField";
import Link from "next/link";
import "./Login.css";
import { useUser } from "../../context/user";

const LoginComponent = () => {
  const { login } = useUser();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(loginData.email, loginData.password);
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed! Please try again.");
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Login</h2>
          <form>
            <TextInputField
              label="Email"
              type="email"
              controlClass={"login-input"}
              placeholder="Enter your email"
              required={true}
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
            />
            <TextInputField
              label="Password"
              type="password"
              controlClass={"login-input"}
              placeholder="Enter your password"
              required={true}
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
            />
            <button
              className="login-button"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>

          <div className="login-links">
            <Link href="/forgot-password" className="forgot-password">
              Forgot <span>Password?</span>
            </Link>
            <p>
              Don’t have an account? <Link href="/register">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
