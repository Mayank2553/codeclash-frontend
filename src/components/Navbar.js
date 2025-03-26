import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav className="flex justify-between items-center p-6 bg-gray-800">
        <h1 className="text-2xl font-bold text-purple-400">CodeClash</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white">Challenge</Link>
          <Link to="/" className="text-gray-300 hover:text-white">Leaderboard</Link>
          <Link to="/" className="text-gray-300 hover:text-white">Practice</Link>
          
          <Link to="/profile" className="px-4 py-2 bg-purple-500 hover:bg-yellow-600 rounded-lg">
            Profile
          </Link>
          <Link to="createroom" className="bg-purple-600 px-4 py-2 rounded-lg text-white hover:bg-purple-500">
            Create Room
          </Link>
          <Link to="/login" className="px-4 py-2 bg-purple-500 hover:bg-blue-600 rounded-lg">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg">
            Register
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar