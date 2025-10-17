import brandsImages from "../../assets/econverse-logo.svg";
import styles from "./Brands.module.scss";

function Brands() {
  return (
    <div className={styles.brands}>
      <h1>Navegue por marcas</h1>

      <div className={styles.container}>
        <div className={styles.content}>
          <img
            src={brandsImages}
            alt="Logotipo da Econverse"
            width={211}
            height={50}
          />
        </div>
        <div className={styles.content}>
          <img
            src={brandsImages}
            alt="Logotipo da Econverse"
            width={211}
            height={50}
          />
        </div>
        <div className={styles.content}>
          <img
            src={brandsImages}
            alt="Logotipo da Econverse"
            width={211}
            height={50}
          />
        </div>
        <div className={styles.content}>
          <img
            src={brandsImages}
            alt="Logotipo da Econverse"
            width={211}
            height={50}
          />
        </div>
        <div className={styles.content}>
          <img
            src={brandsImages}
            alt="Logotipo da Econverse"
            width={211}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}

export default Brands;
