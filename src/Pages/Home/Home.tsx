import Brands from "../../components/Brands/Brands";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Product from "../../components/Product/Product";
import Section from "../../components/Section/Section";
import styles from "./Home.module.scss";

function Home() {
  return (
    <>
      <div className={styles.home}>
        <Navbar />
        <Header />
        <Section />
        <Product navbar />
        <div className={styles.cardContainer}>
          <Card
            title="Parceiros"
            subTitle="Lorem ipsum dolor sit amet, consectetur"
          />
          <Card
            title="Parceiros"
            subTitle="Lorem ipsum dolor sit amet, consectetur"
          />
        </div>
        <Product />
        <div className={styles.cardContainer}>
          <Card
            title="Parceiros"
            subTitle="Lorem ipsum dolor sit amet, consectetur"
          />
          <Card
            title="Parceiros"
            subTitle="Lorem ipsum dolor sit amet, consectetur"
          />
        </div>
        <Brands />
        <Product />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
