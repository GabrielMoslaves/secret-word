import styles from "./styles.module.scss";

const Button = ({ text, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {text}
    </button>
  );
};

export default Button;
