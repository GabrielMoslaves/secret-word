import { useEffect, useState } from "react";
import "./App.css";
import EndGame from "./screens/EndGame";
import MiddleGame from "./screens/MiddleGame";
import StartGame from "./screens/StartGame";
import { words } from "./words";

function App() {
  const [currentStage, setCurrentStage] = useState("start");
  const [word, setWord] = useState();
  const [category, setCategory] = useState();
  const [letters, setLetters] = useState();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [attempt, setAttempt] = useState();
  const [wrongLetters, setWrongLetters] = useState([]);
  const [score, setScore] = useState(0);

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
    setGuesses(3);
    setGuessedLetters([]);
    setWrongLetters([]);
    setScore(0);
  };

  const randomizer = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word =
      words[category][
        Math.floor(Math.random() * words[category].length)
      ].toUpperCase();

    return { category, word };
  };

  const startGame = () => {
    const { category, word } = randomizer();
    const letters = word.split("");

    setCategory(category);
    setWord(word);
    setLetters(letters);

    if (currentStage === "start") {
      changeGameStage();
    }
  };

  const verifyLetter = (letter) => {
    const letters = word.split("");
    if (letters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setGuesses(guesses - 1);
      setWrongLetters([...wrongLetters, letter]);
    }
  };

  useEffect(() => {
    const uniqueLetters = (letters || []).filter((letter, index, array) => {
      return array.indexOf(letter) === index;
    });

    console.log({ uniqueLetters });
    if (
      uniqueLetters.length > 0 &&
      guessedLetters.length > 0 &&
      uniqueLetters.length === guessedLetters.length
    ) {
      debugger;
      setGuesses(3);
      setWrongLetters([]);
      setGuessedLetters([]);
      startGame();
      setScore(score + 100);
    }

    if (guesses <= 0) {
      changeGameStage();
    }
  }, [guessedLetters, guesses]);

  return (
    <div className="App">
      {currentStage === "start" && (
        <StartGame
          startGame={startGame}
          currentStage={currentStage}
          changeGameStage={changeGameStage}
        />
      )}
      {currentStage === "game" && (
        <MiddleGame
          score={score}
          verifyLetter={verifyLetter}
          wrongLetters={wrongLetters}
          setAttempt={setAttempt}
          attempt={attempt}
          guesses={guesses}
          guessedLetters={guessedLetters}
          letters={letters}
          category={category}
          currentStage={currentStage}
        />
      )}
      {currentStage === "end" && (
        <EndGame
          score={score}
          currentStage={currentStage}
          changeGameStage={changeGameStage}
        />
      )}
    </div>
  );
}

export default App;
