import BottomNavbar from "./BottomNavbar/BottomNavbar";
import MainNavbar from "./MainNavbar/MainNavbar";
import TopNavbar from "./TopNavbar/TopNavbar";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.topNavbar}>
        <TopNavbar />
      </div>
      <div>
        <MainNavbar />
      </div>
      <div>
        <BottomNavbar />
      </div>
    </div>
  );
}

export default Navbar;
