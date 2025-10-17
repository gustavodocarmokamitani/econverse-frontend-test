import econverseLogo from "../../../assets/econverse-logo.svg";
import box from "../../../assets/navbar-box.svg";
import heart from "../../../assets/navbar-heart.svg";
import user from "../../../assets/navbar-user.svg";
import shop from "../../../assets/navbar-shop.svg";
import search from "../../../assets/navbar-search.svg";
import styles from "./MainNavbar.module.scss";

function MainNavbar() {
  return (
    <div className={styles.mainNavbar}>
      <img
        src={econverseLogo}
        alt="logotipo econverse"
        width={139}
        height={41.3}
      />
      <div className={styles.searchContainer}> 
        <input
          className={styles.searchInput}
          placeholder="O que você está buscando?"
        />
        <img
          src={search}
          alt="Buscar"
          className={styles.searchIcon}  
        />
      </div>
      <div className={styles.options}>
        <img src={box} alt="" width={24} />
        <img src={heart} alt="Favoritos" width={24} />
        <img src={user} alt="Meu Perfil" width={24} />
        <img src={shop} alt="Carrinho" width={24} />
      </div>
    </div>
  );
}

export default MainNavbar;
