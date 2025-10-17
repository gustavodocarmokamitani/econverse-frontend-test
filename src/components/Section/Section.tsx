import { useState } from "react";
import tecnologia from "../../assets/section-tecnologia.png";
import supermercado from "../../assets/section-supermercado.png";
import bebidas from "../../assets/section-bebidas.png";
import ferramentas from "../../assets/section-ferramentas.png";
import saude from "../../assets/section-saude.png";
import esportesFitness from "../../assets/section-esportes-fitness.png";
import moda from "../../assets/section-moda.png";
import styles from "./Section.module.scss";

const categories = [
  {
    name: "Tecnologia",
    image: tecnologia,
  },
  {
    name: "Supermercado",
    image: supermercado,
  },
  {
    name: "Bebidas",
    image: bebidas,
  },
  {
    name: "Ferramentas",
    image: ferramentas,
  },
  {
    name: "Saúde",
    image: saude,
  },
  {
    name: "Esportes e Fitness",
    image: esportesFitness,
  },
  {
    name: "Moda",
    image: moda,
  },
];

function Section() {
  const [activeCategory, setActiveCategory] = useState("Tecnologia");

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  return (
    <>
      <div className={styles.section}>
        <div className={styles.categoriesContainer}>
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`${styles.categoryItem} ${
                category.name === activeCategory ? styles.highlighted : ""
              }`}
            >
              <div className={styles.imageBox}>
                <img
                  src={category.image}
                  alt={`Ícone de ${category.name}`}
                  className={styles.icon}
                />
              </div>
              <span className={styles.categoryName}>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section;
