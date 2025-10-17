import Button from "../Button/Button";
import styles from "./Card.module.scss";

interface CardProps {
  title?: string;
  subTitle?: string;
}

function Card({ title, subTitle }: CardProps) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <Button text="CONFIRA" />
    </div>
  );
}

export default Card;
