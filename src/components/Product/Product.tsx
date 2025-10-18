import { useRef, useState } from "react";
import { Product as ProductType, ApiResponse } from "../../types/product";
import { formatPrice } from "../Utils/utils";
import rawData from "../../data/products.json";
import line from "../../assets/product-line.svg";
import arrowRight from "../../assets/product-arrow-right.svg";
import arrowLeft from "../../assets/product-arrow-left.svg";
import styles from "./Product.module.scss";
import ProductModal from "../Modal/ProductModal";

const products: ProductType[] = (rawData as ApiResponse).products || [];

interface ProductProps {
  navbar?: boolean;
}

function Product({ navbar }: ProductProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollDistance = 377;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount =
        direction === "left" ? -scrollDistance : scrollDistance;

      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleOpenModal = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (products.length === 0) {
    return <div>Nenhum produto encontrado. Verifique seu products.json.</div>;
  }

  return (
    <>
      <div className={styles.product}>
        <div className={styles.productTitle}>
          <img src={line} alt="linha decorativa" width={450} />
          <h2 className={styles.title}>Produtos relacionados</h2>
          <img src={line} alt="linha decorativa" width={450} />
        </div>

        {navbar ? (
          <div className={styles.tabsContainer}>
            <p className={styles.tabActive}>CELULAR</p>
            <p className={styles.tab}>ACESSÓRIOS</p>
            <p className={styles.tab}>TABLETS</p>
            <p className={styles.tab}>NOTEBOOKS</p>
            <p className={styles.tab}>TVS</p>
            <p className={styles.tab}>VER TODOS</p>
          </div>
        ) : (
          <>
            <p className={styles.viewAll}>Ver todos</p>
          </>
        )}
        <div className={styles.containerGrid}>
          <img
            src={arrowLeft}
            alt="seta para a esquerda"
            className={styles.arrowLeft}
            onClick={() => scrollCarousel("left")}
          />
          <img
            src={arrowRight}
            alt="seta para a direita"
            className={styles.arrowRight}
            onClick={() => scrollCarousel("right")}
          />
          <div className={styles.listGrid} ref={carouselRef}>
            {products.map((product) => (
              <div key={product.productName} className={styles.card}>
                <img
                  src={product.photo}
                  alt={product.productName}
                  className={styles.productImage}
                />

                <div className={styles.contentCard}>
                  <p className={styles.description}>
                    {product.descriptionShort}
                  </p>

                  <p className={styles.oldPrice}>
                    R$ {formatPrice(product.price * 1.2)}
                  </p>
                  <p className={styles.currentPrice}>
                    R$ {formatPrice(product.price)}
                  </p>

                  <p className={styles.installments}>
                    ou 2x de R$ {formatPrice(product.price / 2)} sem juros
                  </p>

                  <p className={styles.shipping}>Frete grátis</p>

                  <button
                    className={styles.buyButton}
                    onClick={() => handleOpenModal(product)}
                  >
                    COMPRAR
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Product;
