import Button from "../Button/Button";
import styles from "./Newsletter.module.scss";

function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.contentText}>
          <h1>Inscreva-se na nossa newsletter</h1>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <div className={styles.containerSubscription}>
          <div className={styles.content}>
            <div className={styles.inputContainer}>
              <input
                className={styles.newsletterInput}
                type="text"
                placeholder="Digite seu nome"
              />
              <input
                className={styles.newsletterInput}
                type="email"
                placeholder="Digite seu e-mail"
              />
              <Button text="INSCREVER" />
            </div>
            <div className={styles.terms}>
              <input type="checkbox" name="termos" />
              <label htmlFor="termos">Aceito os termos e condições</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
