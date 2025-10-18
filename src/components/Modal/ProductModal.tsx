import React, { useState } from "react";
import { formatPrice } from "../Utils/utils";
import { Product } from "../../types/product";
import Button from "../Button/Button";
import closeIcon from "../../assets/close.svg";
import styles from "./ProductModal.module.scss";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const priceDisplay = formatPrice(product.price);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={closeIcon} alt="Fechar" />
        </button>

        <div className={styles.modalBody}>
          <div className={styles.productImageContainer}>
            <img
              src={product.photo}
              alt={product.productName}
              className={styles.productImage}
            />
          </div>

          <div className={styles.productInfo}>
            <h2 className={styles.productTitle}>
              {product.productName.toUpperCase()}
            </h2>

            <p className={styles.productPrice}>R$ {priceDisplay}</p>

            <p className={styles.productDescription}>
              {product.descriptionShort}
            </p>

            <p className={styles.moreDetailsLink}>
              Veja mais detalhes do produto &gt;
            </p>

            <div className={styles.actionSection}>
              <div className={styles.quantityControl}>
                <button
                  className={styles.qtyButton}
                  onClick={handleDecrease}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <span className={styles.quantityValue}>
                  {String(quantity).padStart(2, "0")}
                </span>
                <button className={styles.qtyButton} onClick={handleIncrease}>
                  +
                </button>
              </div>
              <Button text="COMPRAR" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
