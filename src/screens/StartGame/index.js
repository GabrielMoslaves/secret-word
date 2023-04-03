import styles from "./styles.module.scss";

const StartGame = () => {
  return (
    <div className={styles.container}>
      <h3>SecretWord</h3>
      <h1>Clique no botão abaixo para começar!</h1>
      <button>Começar!</button>
    </div>
  );
};

export default StartGame;
