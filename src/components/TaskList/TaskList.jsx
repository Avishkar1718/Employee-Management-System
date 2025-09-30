import React from 'react'

function TaskList() {
  return (
    // <div
    //   id="tasklist"
    //   className="h-[55%] overflow-x-auto  p-3 mt-10  flex items-center justify-start gap-8 flex-nowrap text-white"
    // >
    //   <div className="flex-shrink-0 h-[290px] w-[300px] rounded-xl bg-red-500 p-5">
    //     <div className="flex justify-between items-center">
    //       <h3 className="text-sm px-3 py-1 rounded-xl bg-red-800">High</h3>
    //       <h4 className="text-sm">1 jan 2025</h4>
    //     </div>
    //     <h2 className="mt-5 text-2xl  font-semibold">Make Video</h2>
    //     <p className="text-sm mt-2">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
    //       provident nisi. Non recusandae sint eius? Blanditiis quidem atque et
    //       ducimus, deleniti aliquid, aliquam ipsum at neque iure quis ipsam
    //       sapiente?
    //     </p>
    //   </div>
    //   <div className="flex-shrink-0 h-[290px] w-[300px] rounded-xl bg-blue-500 p-5">
    //     <div className="flex justify-between items-center">
    //       <h3 className="text-sm px-3 py-1 rounded-xl bg-red-800">High</h3>
    //       <h4 className="text-sm">1 jan 2025</h4>
    //     </div>
    //     <h2 className="mt-5 text-2xl  font-semibold">Make Video</h2>
    //     <p className="text-sm mt-2">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
    //       provident nisi. Non recusandae sint eius? Blanditiis quidem atque et
    //       ducimus, deleniti aliquid, aliquam ipsum at neque iure quis ipsam
    //       sapiente?
    //     </p>
    //   </div>
    //   <div className="flex-shrink-0 h-[290px] w-[300px] rounded-xl bg-yellow-500 p-5">
    //     <div className="flex justify-between items-center">
    //       <h3 className="text-sm px-3 py-1 rounded-xl bg-red-800">High</h3>
    //       <h4 className="text-sm">1 jan 2025</h4>
    //     </div>
    //     <h2 className="mt-5 text-2xl  font-semibold">Make Video</h2>
    //     <p className="text-sm mt-2">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
    //       provident nisi. Non recusandae sint eius? Blanditiis quidem atque et
    //       ducimus, deleniti aliquid, aliquam ipsum at neque iure quis ipsam
    //       sapiente?
    //     </p>
    //   </div>
    //   <div className="flex-shrink-0 h-[290px] w-[300px] rounded-xl bg-green-500 p-5">
    //     <div className="flex justify-between items-center">
    //       <h3 className="text-sm px-3 py-1 rounded-xl bg-red-800">High</h3>
    //       <h4 className="text-sm">1 jan 2025</h4>
    //     </div>
    //     <h2 className="mt-5 text-2xl  font-semibold">Make Video</h2>
    //     <p className="text-sm mt-2">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
    //       provident nisi. Non recusandae sint eius? Blanditiis quidem atque et
    //       ducimus, deleniti aliquid, aliquam ipsum at neque iure quis ipsam
    //       sapiente?
    //     </p>
    //   </div>

    // </div>
    // <div
    //   id="tasklist"
    //   className="h-[55%] overflow-x-auto p-3 mt-10 flex items-start justify-start gap-6 flex-nowrap text-white scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
    // >
    //   <div className="flex-shrink-0 h-[290px] w-[300px] rounded-xl bg-red-500 p-5 shadow-lg hover:shadow-2xl transition-all">
    //     <div className="flex justify-between items-center">
    //       <h3 className="text-sm px-3 py-1 rounded-full bg-red-800 ">High</h3>
    //       <h4 className="text-sm">1 jan 2025</h4>
    //     </div>
    //     <h2 className="mt-5 text-2xl font-semibold">Make Video</h2>
    //     <p className="text-sm mt-2 opacity-90">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
    //       provident nisi. Non recusandae sint eius? Blanditiis quidem atque et
    //       ducimus, deleniti aliquid, aliquam ipsum at neque iure quis ipsam
    //       sapiente?
    //     </p>
    //   </div>

    // </div>
    <div
      id="tasklist"
      className="mt-10 flex justify-between flex-col  sm:flex-row sm:overflow-x-auto gap-6 py-2  text-white scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
    >
      <div className="flex-shrink-0 h-[290px] w-full sm:w-[300px] rounded-xl bg-red-500 p-5 shadow-lg hover:shadow-2xl transition-all">
        <div className="flex justify-between items-center">
          <h3 className="text-sm px-3 py-1 rounded-full bg-red-800">High</h3>
          <h4 className="text-sm">1 Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make Video</h2>
        <p className="text-sm mt-2 opacity-90">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
          provident nisi. Non recusandae sint eius? Blanditiis quidem atque et
          ducimus, deleniti aliquid, aliquam ipsum at neque iure quis ipsam
          sapiente?
        </p>
      </div>

      <div className="flex-shrink-0 h-[290px] w-full sm:w-[300px] rounded-xl bg-blue-500 p-5 shadow-lg hover:shadow-2xl transition-all">
        <div className="flex justify-between items-center">
          <h3 className="text-sm px-3 py-1 rounded-full bg-red-800 ">High</h3>
          <h4 className="text-sm">1 Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make Video</h2>
        <p className="text-sm mt-2 opacity-90">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
          provident nisi. Non recusandae sint eius? Blanditiis quidem atque et
          ducimus, deleniti aliquid, aliquam ipsum at neque iure quis ipsam
          sapiente?
        </p>
      </div>
      <div className="flex-shrink-0 h-[290px] w-full sm:w-[300px] rounded-xl bg-yellow-500 p-5 shadow-lg hover:shadow-2xl transition-all">
        <div className="flex justify-between items-center">
          <h3 className="text-sm px-3 py-1 rounded-full bg-red-800 ">High</h3>
          <h4 className="text-sm">1 Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make Video</h2>
        <p className="text-sm mt-2 opacity-90">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
          provident nisi. Non recusandae sint eius? Blanditiis quidem atque et
          ducimus, deleniti aliquid, aliquam ipsum at neque iure quis ipsam
          sapiente?
        </p>
      </div>
      <div className="flex-shrink-0 h-[290px] w-full sm:w-[300px] rounded-xl bg-green-500 p-5 shadow-lg hover:shadow-2xl transition-all">
        <div className="flex justify-between items-center">
          <h3 className="text-sm px-3 py-1 rounded-full bg-red-800 ">High</h3>
          <h4 className="text-sm">1 Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make Video</h2>
        <p className="text-sm mt-2 opacity-90">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
          provident nisi. Non recusandae sint eius? Blanditiis quidem atque et
          ducimus, deleniti aliquid, aliquam ipsum at neque iure quis ipsam
          sapiente?
        </p>
      </div>
    </div>
  );
}

export default TaskList