'use client';
import {ID} from 'appwrite';
import {createContext, useContext, useEffect, useState} from 'react';
import {account} from '../appwrite';

const UserContext = createContext ();

export function useUser () {
  return useContext (UserContext);
}

export function UserProvider (props) {
  const [user, setUser] = useState (null);

  async function login (email, password) {
    try {
      const loggedIn = await account.createEmailPasswordSession (
        email,
        password
      );
      alert ('login success');
      setUser (loggedIn);
    } catch (error) {
      alert (error);
    }
  }

  async function logout () {
    await account.deleteSession ('current');
    setUser (null);
  }

  async function register (email, password) {
    try {
      await account.create (ID.unique (), email, password);
      await login (email, password);
    } catch (error) {
      alert (error);
    }
  }

  async function init () {
    try {
      const loggedIn = await account.get ();
      if (loggedIn) {
        setUser (loggedIn);
      }
    } catch (err) {
      setUser (null);
      // alert(err)
    }
  }

  useEffect (() => {
    init ();
  }, []);

  return (
    <UserContext.Provider value={{current: user, login, logout, register}}>
      {props.children}
    </UserContext.Provider>
  );
}
