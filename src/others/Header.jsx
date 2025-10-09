import React from "react";

function Header({ name,changeUser }) {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");

    changeUser("")
    // localStorage.clear();
  };
  return (
    // <div className="flex items-end justify-between">
    //   <h1 className="text-2xl font-medium text-white">
    //     Hello
    //     <br />
    //     <span className="text-3xl font-semibold text-white">Sarthak 👋</span>
    //   </h1>
    //   <button className='bg-red-500 text-lg font-medium text-white px-3 py-2 rounded-sm'>
    //     Log Out
    //   </button>
    // </div>
    <div
      className="flex items-center justify-between border-b border-gray-700 pb-5 mb-5
"
    >
      <h1 className="text-2xl font-medium text-gray-200">
        Hello,
        <br />
        <span className="text-3xl font-bold text-white">{name}👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 hover:bg-red-600 transition-all text-lg font-semibold text-white px-5 py-2 rounded-lg shadow-md"
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
