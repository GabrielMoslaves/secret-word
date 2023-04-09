import Button from "../../components/Button";
import styles from "./styles.module.scss";

const EndGame = (props) => {
  const { changeGameStage, score } = props;
  return (
    <div className={styles.container}>
      <h2>Fim do jogo!</h2>
      <h3>
        A sua pontuação foi: <span className={styles.score}>{score}</span>
      </h3>

      <Button
        text="RECOMEÇAR"
        onClick={() => {
          changeGameStage();
        }}
      />
    </div>
  );
};

export default EndGame;
