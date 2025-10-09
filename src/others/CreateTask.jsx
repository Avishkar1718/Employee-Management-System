import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const CreateTask = () => {
  const userData = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const createdTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
    console.log(createdTask);

    const user = userData.employees.find((elem) => elem.firstName === asignTo);

    if (user) {
      user.tasks.push(createdTask);
      user.taskCounts.newTask++;
      console.log(userData.employees);

       localStorage.setItem("employees", JSON.stringify(userData.employees));
    } else {
      alert("Employee is not found");
    }
    console.log(user);

    // userData.employees.forEach(function (elem) {
    //   if (asignTo == elem.firstName) {
    //     elem.tasks.push(newTask);
    //     elem.taskCounts.newTask = elem.taskCounts.newTask + 1;

    //   }
    //   console.log(elem);
    // });
    // setUserData(data);
    // console.log(data);

    setTaskTitle("");
    setCategory("");
    setAsignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="p-6 bg-[#1e293b] mt-5 rounded-xl shadow-lg border border-[#334155]">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-wrap w-full items-start justify-between gap-6"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-[#0f172a] border border-[#334155] focus:border-emerald-500 text-white placeholder-gray-300 transition mb-4"
              type="text"
              placeholder="Make a UI design"
              required
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-[#0f172a] border border-[#334155] focus:border-emerald-500 
              text-white placeholder-gray-300 transition mb-4"
              type="date"
              placeholder="dd-mm-yyyy"
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-[#0f172a] border border-[#334155] focus:border-emerald-500 text-white placeholder-gray-300 transition mb-4"
              type="text"
              placeholder="employee name"
              value={asignTo}
              onChange={(e) => {
                setAsignTo(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-[#0f172a] border border-[#334155] focus:border-emerald-500 text-white placeholder-gray-300 transition"
              type="text"
              placeholder="design, dev, etc"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/5 flex flex-col">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            className="w-full h-40 text-sm py-2 px-3 rounded-md outline-none bg-[#0f172a] border border-[#334155] focus:border-emerald-500 text-white placeholder-gray-300 transition"
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
          ></textarea>

          <button className="bg-emerald-600 hover:bg-emerald-500 py-3 px-5 rounded-md text-sm font-medium mt-4 shadow-lg text-white transition">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
