import React, { useContext, useState } from "react";


const CreateTask = () => {
  
  return (
    <div className="p-6 bg-[#1e293b] mt-5 rounded-xl shadow-lg border border-[#334155]">
      <form className="flex flex-wrap w-full items-start justify-between gap-6">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-[#0f172a] border border-[#334155] focus:border-emerald-500 text-white placeholder-gray-300 transition mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-[#0f172a] border border-[#334155] focus:border-emerald-500 
              text-white placeholder-gray-300 transition mb-4"
              type="date"
              placeholder="dd-mm-yyyy"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-[#0f172a] border border-[#334155] focus:border-emerald-500 text-white placeholder-gray-300 transition mb-4"
              type="text"
              placeholder="employee name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-md outline-none bg-[#0f172a] border border-[#334155] focus:border-emerald-500 text-white placeholder-gray-300 transition"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/5 flex flex-col">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            className="w-full h-40 text-sm py-2 px-3 rounded-md outline-none bg-[#0f172a] border border-[#334155] focus:border-emerald-500 text-white placeholder-gray-300 transition"
           
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
