import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    socket.on("updateScores", (scoreData) => {
      setScores(scoreData);
    });

    return () => socket.off("updateScores");
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h2 className="text-2xl font-bold">Leaderboard</h2>
      <ul className="mt-4">
        {scores.map((player, idx) => (
          <li key={idx} className="text-lg">
            {player.name}: {player.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
