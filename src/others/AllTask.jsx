import React from 'react'

function AllTask() {
  return (
    <div className="bg-[#1e293b] p-6 rounded-xl mt-5 shadow-lg h-53 overflow-y-auto border border-[#334155]">
      <h2 className="text-lg font-semibold mb-4 text-gray-100">All Tasks</h2>

      <div className="space-y-3">
        {/* Pending */}
        <div className="bg-red-500/20 border border-red-500/40 hover:bg-red-500/30 transition p-3 flex justify-between items-center rounded-md shadow-sm">
          <h2 className="font-medium text-gray-200">Sarthak</h2>
          <h3 className="text-sm text-gray-300">Make UI design</h3>
          <span className="text-xs font-semibold text-red-300 bg-red-900/50 px-2 py-1 rounded">
            Pending
          </span>
        </div>

        {/* In Progress */}
        <div className="bg-yellow-500/20 border border-yellow-500/40 hover:bg-yellow-500/30 transition p-3 flex justify-between items-center rounded-md shadow-sm">
          <h2 className="font-medium text-gray-200">Rahul</h2>
          <h3 className="text-sm text-gray-300">API Integration</h3>
          <span className="text-xs font-semibold text-yellow-300 bg-yellow-900/50 px-2 py-1 rounded">
            In Progress
          </span>
        </div>

        {/* Completed */}
        <div className="bg-green-500/20 border border-green-500/40 hover:bg-green-500/30 transition p-3 flex justify-between items-center rounded-md shadow-sm">
          <h2 className="font-medium text-gray-200">Anjali</h2>
          <h3 className="text-sm text-gray-300">Testing</h3>
          <span className="text-xs font-semibold text-green-300 bg-green-900/50 px-2 py-1 rounded">
            Completed
          </span>
        </div>
        <div className="bg-green-500/20 border border-green-500/40 hover:bg-green-500/30 transition p-3 flex justify-between items-center rounded-md shadow-sm">
          <h2 className="font-medium text-gray-200">Anjali</h2>
          <h3 className="text-sm text-gray-300">Testing</h3>
          <span className="text-xs font-semibold text-green-300 bg-green-900/50 px-2 py-1 rounded">
            Completed
          </span>
        </div>
      </div>
    </div>
  );
}

export default AllTask