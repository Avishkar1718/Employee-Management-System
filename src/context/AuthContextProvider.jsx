import React, { createContext, useEffect, useState } from "react";
import {setLocalStorage, getLocalStorage } from "../utils/LocalStorage";
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setLocalStorage();
    const { employees} = getLocalStorage();
    setUserData({ employees });
  }, []);

  return (
    <>
      <AuthContext.Provider value={userData }>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthContextProvider;
