import { useRef } from "react";
import Button from "../../components/Button";
import styles from "./styles.module.scss";

const MiddleGame = (props) => {
  const {
    verifyLetter,
    wrongLetters,
    letters,
    category,
    guessedLetters,
    guesses,
    attempt,
    setAttempt,
    score,
  } = props;

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(attempt);
    setAttempt("");
    inputRef.current.focus();
  };

  return (
    <div className={styles.container}>
      <h1>Adivinhe a palavra!</h1>
      <h3>SCORE : {score}pts</h3>
      <h3>Dica sobre a palavra: {category.toUpperCase()} </h3>
      <h3>Você ainda tem {guesses.toString().padStart(2, "0")} tentativas</h3>
      <div className={styles.word}>
        {letters.map((item, i) => {
          return guessedLetters?.includes(item) ? (
            <span key={i} className={styles.letter}>
              {item}
            </span>
          ) : (
            <span key={i} className={styles.blankSquare} />
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className={styles.guessBox}
          ref={inputRef}
          required
          maxLength={1}
          onChange={(e) => setAttempt(e.target.value.toUpperCase())}
          value={attempt}
        />
        <Button type="submit" text="Jogar" />
      </form>

      <div>
        LETRAS JÁ UTILIZADAS:{" "}
        {wrongLetters?.map((item) => item?.toUpperCase() + " ")}
      </div>
    </div>
  );
};

export default MiddleGame;
