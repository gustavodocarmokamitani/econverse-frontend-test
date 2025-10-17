import Button from "../Button/Button";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.background}>
        <div className={styles.content}>
          <h1>Venha conhecer nossas promoções</h1>
          <h3>
            <span>50% Off</span> nos produtos
          </h3>
          <Button text="Ver produtos" />
        </div>
      </div>
    </div>
  );
}

export default Header;
