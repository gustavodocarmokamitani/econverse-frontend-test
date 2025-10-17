import econverseLogo from "../../assets/econverse-logo.svg";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.contentBrand}>
            <img src={econverseLogo} alt="Econverse Logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className={styles.content}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Institucional</h4>
              <a href="#">Sobre Nós</a>
              <a href="#">Movimento</a>
              <a href="#">Trabalhe conosco</a>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Ajuda</h4>
              <a href="#">Suporte</a>
              <a href="#">Fale Conosco</a>
              <a href="#">Perguntas Frequentes</a>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Termos</h4>
              <a href="#">Termos e Condições</a>
              <a href="#">Política de Privacidade</a>
              <a href="#">Troca e Devolução</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerText}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </>
  );
}

export default Footer;
