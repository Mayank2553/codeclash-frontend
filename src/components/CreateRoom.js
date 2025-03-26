import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [roomLink, setRoomLink] = useState("");
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    if (!roomName.trim()) {
      alert("Please enter a valid room name!");
      return;
    }

    const generatedRoomLink = `/room/${roomName.replace(/\s+/g, "-")}`;
    alert(`Room Created!\nName: ${roomName}\nLevel: ${level}\nLink: ${window.location.origin}${generatedRoomLink}`);
    console.log("Room Created:", { roomName, level, link: generatedRoomLink });

    // Navigate to the newly created room (for simulation)
    navigate(generatedRoomLink);
  };

  const handleJoinRoom = () => {
    if (!roomLink.trim()) {
      alert("Please enter a valid room link!");
      return;
    }

    // Navigate to the entered room link
    navigate(roomLink);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Create or Join a Room</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-96">
        {/* Room Name Input */}
        <label className="block mb-2 text-lg font-semibold">Room Name:</label>
        <input
          type="text"
          placeholder="Enter room name..."
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Level Selection Dropdown */}
        <label className="block mb-2 text-lg font-semibold">Select Level:</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>

        {/* Create Room Button */}
        <button
          onClick={handleCreateRoom}
          className="w-full px-4 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg text-lg font-semibold mb-6"
        >
          Create Room
        </button>

        {/* Divider */}
        <div className="border-t border-gray-600 my-4"></div>

        {/* Join Room Input */}
        <label className="block mb-2 text-lg font-semibold">Join Room via Link:</label>
        <input
          type="text"
          placeholder="Enter room link..."
          value={roomLink}
          onChange={(e) => setRoomLink(e.target.value)}
          className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Join Room Button */}
        <button
          onClick={handleJoinRoom}
          className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-lg font-semibold"
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default CreateRoom;
