"use client";

import React, { useState } from "react";
import TextInputField from "@/components/webpage/section/TextInputField";
import Link from "next/link";
import "./signup.css";
import { useUser } from "../../context/user";

const RegisterComponent = () => {
  const { register } = useUser();
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(signUpData.name, signUpData.email, signUpData.password);
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed! Please try again.");
    }
  };
  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">SignUp</h2>
          <form>
            <TextInputField
              label="Name"
              type="text"
              controlClass={"login-input"}
              placeholder="Enter your name"
              required={true}
              name="name"
              value={signUpData.name}
              onChange={handleInputChange}
            />
            <TextInputField
              label="Email"
              type="email"
              controlClass={"login-input"}
              placeholder="Enter your email"
              required={true}
              name="email"
              value={signUpData.email}
              onChange={handleInputChange}
            />
            <TextInputField
              label="Password"
              type="password"
              controlClass={"login-input"}
              placeholder="Enter your password"
              required={true}
              name="password"
              value={signUpData.password}
              onChange={handleInputChange}
            />
            <button
              className="login-button"
              type="submit"
              onClick={handleSignUpSubmit}
            >
              Submit
            </button>
          </form>

          <div className="login-links">
            <p className="signup-footer-text">
              Already have an account? <Link href="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
