import React from 'react'

function TasksCount() {
  return (
    // <div className="flex justify-between mt-10 gap-5 screen text-white">
    //   <div className="rounded-xl py-6 px-9 w-[35%] bg-red-500">
    //     <h2 className="text-3xl font-semibold">0</h2>
    //     <h3 className="text-xl font-medium">New task</h3>
    //   </div>
    //   <div className="rounded-xl py-6 px-9 w-[35%] bg-green-500">
    //     <h2 className="text-3xl font-semibold">0</h2>
    //     <h3 className="text-xl font-medium">New task</h3>
    //   </div>
    //   <div className="rounded-xl py-6 px-9 w-[35%] bg-yellow-500">
    //     <h2 className="text-3xl font-semibold">0</h2>
    //     <h3 className="text-xl font-medium">New task</h3>
    //   </div>
    //   <div className="rounded-xl py-6 px-9 w-[35%] bg-blue-500">
    //     <h2 className="text-3xl font-semibold">0</h2>
    //     <h3 className="text-xl font-medium">New task</h3>
    //   </div>

    // </div>
    <div className="flex flex-wrap justify-between mt-10 gap-2 text-white">
      <div className="rounded-xl py-6 px-6 w-[45%] sm:w-[45%] md:w-[20%] shadow-lg hover:scale-105 transition-transform bg-red-500">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium opacity-90">New task</h3>
      </div>
      <div className="rounded-xl py-6 px-6 w-[45%] sm:w-[45%] md:w-[20%] shadow-lg hover:scale-105 transition-transform bg-green-500">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium opacity-90">New task</h3>
      </div>
      <div className="rounded-xl py-6 px-6 w-[45%] sm:w-[45%] md:w-[20%] shadow-lg hover:scale-105 transition-transform bg-yellow-500">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium opacity-90">New task</h3>
      </div>
      <div className="rounded-xl py-6 px-6 w-[45%] sm:w-[45%] md:w-[20%] shadow-lg hover:scale-105 transition-transform bg-blue-500">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium opacity-90">New task</h3>
      </div>
    </div>
  );
}

export default TasksCount