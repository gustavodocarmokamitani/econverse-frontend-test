import styles from "./Button.module.scss";

interface ButtonProps {
  text?: string;
}

function Button({ text }: ButtonProps) {
  return <button className={styles.button}>{text}</button>;
}

export default Button;
