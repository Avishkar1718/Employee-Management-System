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
 
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const Authdata = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);
  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
     setUser("admin");
     localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    }
    else if (Authdata && Authdata.employees.find((e)=>email==e.email)) {
      setUser("employee")
    }
    else {
      alert("Invalid credentials")
    }
  }
  
 
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin } />: " "}
      {user==="employee"?<EmployeeDashboard/>:<AdminDashboard/>}
     
    </>
  );
}

export default App;
