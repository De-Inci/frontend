"use client";
import { ID } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function login(email, password) {
    try {
      const loggedIn = await account.createEmailPasswordSession(
        email,
        password
      );
      setUser(loggedIn);
      window.location.replace("/");
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function register(name, email, password) {
    try {
      setUser(null);
      const userId = ID.unique();
      await account.create(userId, email, password);
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      setUser(response);
      window.location.replace("/");
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false); // Set loading to false once user info is fetched
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider
      value={{ current: user, login, logout, register, loading }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
