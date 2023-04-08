import Button from "../../components/Button";

import styles from "./styles.module.scss";

const StartGame = (props) => {
  const { startGame } = props;

  return (
    <div className={styles.container}>
      <h1>SECRET WORD</h1>
      <h3>Clique no botão abaixo para começar!</h3>
      <Button
        text="começar o jogo"
        onClick={() => {
          startGame();
        }}
      />
    </div>
  );
};

export default StartGame;
