import SafePurchase from "../../../assets/navbar-safe-purchase.svg";
import FreeShipping from "../../../assets/navbar-free-shipping.svg";
import InstallmentPurchase from "../../../assets/navbar-intallment-purchase.svg";
import styles from "./TopNavbar.module.scss";

function TopNavbar() {
  return (
    <div className={styles.topNavbar}>
      <div className={styles.content}>
        <img
          src={SafePurchase}
          alt="Compra 100% segura"
          width={13.75}
          height={14.35}
          style={{ marginRight: "12px" }}
        />
        Compra
        <span style={{ color: "#3442B5", fontWeight: "600", margin: "0 4px" }}>
          100% segura
        </span>
      </div>
      <div className={styles.content}>
        <img
          src={FreeShipping}
          alt="Frete grátis acima de R$ 200"
          width={17.5}
          height={11.88}
          style={{ marginRight: "12px" }}
        />
        <span
          style={{ color: "#3442B5", fontWeight: "600", marginRight: "4px" }}
        >
          Frete grátis
        </span>
        <span>acima de R$ 200</span>
      </div>
      <div className={styles.content}>
        <img
          src={InstallmentPurchase}
          alt="Parcele suas compras"
          width={16.25}
          height={11.25}
          style={{ marginRight: "12px" }}
        />
        <span
          style={{ color: "#3442B5", fontWeight: "600", marginRight: "4px" }}
        >
          Parcele
        </span>
        <span>suas compras</span>
      </div>
    </div>
  );
}

export default TopNavbar;
