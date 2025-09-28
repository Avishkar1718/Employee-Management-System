
import React from 'react'
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState("")
  const  [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    // <div className="flex h-screen w-screen items-center justify-center">
    //   <div className="border-2 rounded-xl border-emerald-600 p-20">
    //     <form
    //       onSubmit={(e) => {
    //         handleSubmit(e);
    //         console.log(`Email:${email} and Password:${password}`);
    //         setEmail("")
    //         setPassword("")

    //       }}
    //       className="flex flex-col items-center justify-center"
    //     >
    //       <input
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //         className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full text-white placeholder:text-gray-400"
    //         type="email"
    //         placeholder="enter your email"
    //       />
    //       <input
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //         className="outline-none bg-transparent border-2 mt-3 border-emerald-600 font-medium text-lg text-white py-2 px-6 rounded-full placeholder:text-gray-400"
    //         type="password"
    //         placeholder="Enter your password"
    //       />
    //       <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full ">
    //         Log in{" "}
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="bg-white/10 backdrop-blur-lg border border-emerald-400 p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Employee Management
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-white/20 border border-emerald-400 text-white placeholder:text-gray-300 rounded-xl py-3 px-5 text-lg focus:ring-2 focus:ring-emerald-300"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-white/20 border border-emerald-400 text-white placeholder:text-gray-300 rounded-xl py-3 px-5 text-lg focus:ring-2 focus:ring-emerald-300"
            type="password"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="mt-3 bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-md"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-sm text-gray-200 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-emerald-300 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login