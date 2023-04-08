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
    success,
    setProceed,
    tip,
    showTip,
    setShowTip,
  } = props;

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    if (success) {
      setProceed(true);
      e.preventDefault();
    } else {
      e.preventDefault();
      verifyLetter(attempt);
      setAttempt("");
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.container}>
      <h1>Adivinhe a palavra!</h1>
      <h3>SCORE : {score}pts</h3>
      <h3>
        Categoria: <span className={styles.hint}>{category.toUpperCase()}</span>
      </h3>
      {showTip ? (
        <h3 onClick={() => setShowTip(true)}>{tip} </h3>
      ) : (
        <button
          className={styles.tipButton}
          cursor="pointer"
          onClick={() => setShowTip(true)}
        >
          Revelar dica
        </button>
      )}

      <h3>
        Você ainda tem{" "}
        <span className={styles.hint}>
          {guesses.toString().padStart(2, "0")}
        </span>{" "}
        tentativas
      </h3>
      <div className={styles.word}>
        {letters.map((item, i) => {
          return guessedLetters?.includes(item) ? (
            <span key={i} className={success ? styles.success : styles.letter}>
              {item}
            </span>
          ) : (
            <span key={i} className={styles.blankSquare}>
              A
            </span>
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className={styles.guessBox}
          ref={inputRef}
          required={success ? false : true}
          maxLength={1}
          onChange={(e) => setAttempt(e.target.value.toUpperCase())}
          value={attempt}
        />
        <Button type="submit" text={success ? "Próxima" : "Jogar"} />
      </form>

      <div className={styles.wrongLetters}>
        <p>LETRAS JÁ UTILIZADAS: </p>
        <span>{wrongLetters?.map((item) => item?.toUpperCase() + " - ")}</span>
      </div>
    </div>
  );
};

export default MiddleGame;
