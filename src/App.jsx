import { useState,useEffect, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthContextProvider";

function App() {
  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // }, []);
  const [user, setUser] = useState(null)
  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setUser("admin");
    }
    else if (email === "employee@gmail.com" && password === "123") {
      setUser("employee")
    }
    else {
      alert("Invalid credentials")
    }
  }
  const auth = useContext(AuthContext)
  console.log(auth);
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin } />: " "}
      {user==="employee"?<EmployeeDashboard/>:""}
      {user==="admin"?<AdminDashboard />:""}
    </>
  );
}

export default App;
