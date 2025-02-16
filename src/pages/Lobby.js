import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

const Lobby = ({ username, onStartGame }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.emit("joinLobby", username);
    
    socket.on("updatePlayers", (playerList) => {
      setPlayers(playerList);
    });

    socket.on("gameStarting", () => {
      onStartGame();
    });

    return () => socket.off("updatePlayers");
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h2 className="text-2xl font-bold">Waiting for players...</h2>
      <ul className="mt-4">
        {players.map((player, idx) => (
          <li key={idx} className="text-lg">{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lobby;
