import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const AcceptTask = ({ data ,currentEmployee}) => {
  const { userData, setUserData } = useContext(AuthContext);
   const updatedData = { ...userData };
   const user = updatedData.employees.find(
     (elem) => currentEmployee.id == elem.id
   );
 
    const task = user.tasks.find(
      (elem) => data.taskDescription === elem.taskDescription
    );
  
  const handleComplete=() => {
   
    if (user && task) {
      user.taskCounts.completed++;
      user.taskCounts.active--;
      task.completed = true;
      task.active = false;
      task.newTask = false;
      setUserData(updatedData)
      console.log(userData);
      
    }

  }
  const handleFailed = () => {
     if (user && task) {
      
       user.taskCounts.active--;
        user.taskCounts.failed++;
       task.failed = true;
       task.active = false;
       task.newTask=false
       setUserData(updatedData);
       console.log(userData);
     }
  }
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-6 ">
        <button onClick={handleComplete} className="bg-green-500 rounded font-medium py-1 px-2 text-xs">
          Mark as Completed
        </button>
        <button onClick={ handleFailed} className="bg-red-500 rounded font-medium py-1 px-2 text-xs">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
