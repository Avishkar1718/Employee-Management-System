import React, {useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
const NewTask = ({ data, currentEmployee }) => {
  // const [flag, setflag] = useState(true)
  // useEffect(() => {
  //   console.log("hellow");
    
  // },[flag])

  const { userData, setUserData } = useContext(AuthContext);
  const updatedData = { ...userData };
     const user = updatedData.employees.find((elem) => currentEmployee.id == elem.id);
      const task = user.tasks.find(
        (elem) => data.taskDescription === elem.taskDescription
      );
    
    const handleAccept=() => {
     
      if (user && task) {
        user.taskCounts.newTask--;
        user.taskCounts.active++;
        task.new = false;
        task.active = true;
        setUserData(updatedData);

        // setflag(false)
        console.log(userData);
        
      }
  
    }

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-6">
        <button onClick={handleAccept} className="bg-blue-500 rounded font-medium py-1 px-2 text-xs">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
