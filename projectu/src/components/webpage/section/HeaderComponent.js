"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./HeaderComponent.css";
import Link from "next/link";
import { useUser } from "../../../app/context/user";

const HeaderComponent = () => {
  const { current, logout, loading } = useUser();
  const isLoggedIn = current !== null;
  const handleLogout = async () => {
    try {
      await logout();
      window.location.replace("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className="container-fluid mt-4 pb-3">
      <Navbar collapseOnSelect expand="lg" className="container-md fixed-top">
        <Navbar.Brand className="fw-bold logo-link">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto justify-content-between">
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/github" className="nav-link">
              Github
            </Link>
          </Nav>
          <Nav>
            {loading ? (
              <div>Loading...</div>
            ) : isLoggedIn ? (
              <Button
                variant="light"
                className="ms-5 button"
                size="large"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Link href="/login" className="ms-5">
                <Button variant="light" className="button" size="large">
                  LogIn
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
