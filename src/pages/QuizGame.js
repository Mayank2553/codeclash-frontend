import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

const QuizGame = ({ username }) => {
  const [question, setQuestion] = useState(null);
  const [timer, setTimer] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    socket.on("newQuestion", (q) => {
      setQuestion(q);
      setTimer(30);
      setSelectedAnswer(null);
    });

    socket.on("countdown", (time) => {
      setTimer(time);
    });

    return () => {
      socket.off("newQuestion");
      socket.off("countdown");
    };
  }, []);

  const submitAnswer = (answer) => {
    setSelectedAnswer(answer);
    socket.emit("submitAnswer", { username, answer });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      {question ? (
        <>
          <h2 className="text-2xl font-bold">{question.text}</h2>
          <p className="text-lg">Time Left: {timer}s</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => submitAnswer(option)}
                className={`px-4 py-2 rounded ${
                  selectedAnswer === option ? "bg-blue-500" : "bg-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <h2>Waiting for question...</h2>
      )}
    </div>
  );
};

export default QuizGame;
