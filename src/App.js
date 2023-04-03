import { useState } from "react";
import "./App.css";
import EndGame from "./screens/EndGame";
import MiddleGame from "./screens/MiddleGame";
import StartGame from "./screens/StartGame";

function App() {
  const [currentStage, setCurrentStage] = useState("start");

  const changeGameStage = () => {
    if (currentStage === "start") {
      setCurrentStage("game");
    }
    if (currentStage === "game") {
      setCurrentStage("end");
    }
    if (currentStage === "end") {
      setCurrentStage("start");
    }
  };

  return (
    <div className="App">
      {currentStage === "start" && (
        <StartGame
          currentStage={currentStage}
          changeGameStage={changeGameStage}
        />
      )}
      {currentStage === "game" && (
        <MiddleGame
          currentStage={currentStage}
          changeGameStage={changeGameStage}
        />
      )}
      {currentStage === "end" && (
        <EndGame
          currentStage={currentStage}
          changeGameStage={changeGameStage}
        />
      )}
    </div>
  );
}

export default App;
