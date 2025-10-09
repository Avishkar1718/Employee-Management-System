import React, { createContext, useEffect, useState } from "react";
import {setLocalStorage, getLocalStorage } from "../utils/LocalStorage";
import Login from "../components/Auth/Login";
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setLocalStorage();
    const { employees} = getLocalStorage();
    setUserData({ employees });
  }, []);

  useEffect(() => {
    
    
    if (userData.employees) {
      console.log("use effects useedara",userData.employees);
      
      setLocalStorage(userData.employees);
    }
  }, [userData]);

  return (
    <>
      <AuthContext.Provider value={{userData,setUserData} }>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthContextProvider;
