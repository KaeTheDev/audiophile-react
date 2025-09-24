import { useState } from "react";
import { useCartDispatch } from "../../context/CartContext";
import styles from "./ProductDetail.module.scss";
import BackButton from "../BackButton/BackButton";
import NumberPicker from "../form-elements/NumberPicker";
import Button from "../Button/Button";

export default function ProductDetail({ product }) {
  // State for quantity picker
  const [quantity, setQuantity] = useState(1);
  const dispatch = useCartDispatch();

  const BASE_URL = import.meta.env.BASE_URL || "/";
  const getProductImageSrc = (breakpoint) =>
    `${BASE_URL}assets/product-${product.slug}/${breakpoint}/image-product.jpg`;
  
  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity}});
  };

  return (
    <div className={styles["product-detail-container"]}>
      <BackButton />
      <section className={styles["product-detail"]}>
        <div className={styles["product-detail__image-container"]}>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={getProductImageSrc("desktop")}
            />
            <source
              media="(min-width: 768px)"
              srcSet={getProductImageSrc("tablet")}
            />
            <img
              className={styles["product-detail__image"]}
              src={getProductImageSrc("mobile")}
              alt={product.name}
            />
          </picture>
        </div>

      {/* Product Info */}
      <div className={styles["product-detail__info"]}>
          {product.new && (
            <p className={`${styles["product-detail__new"]} overline`}>
              NEW PRODUCT
            </p>
          )}
          <h1 className={`${styles["product-detail__name"]} heading-2`}>
            {product.name}
          </h1>
          <p className={`${styles["product-detail__desc"]} body`}>
            {product.description}
          </p>
          <p className={`${styles["product-detail__price"]} heading-6`}>
            ${product.price.toLocaleString()}
          </p>

          {/* Actions */}
          <div className={styles["product-detail__actions"]}>
            <NumberPicker
              value={quantity}
              min={1}
              max={10}
              onChange={(val) => setQuantity(val)}
            />
            <Button label="ADD TO CART" variant="primary" onClick={handleAddToCart} />
          </div>
        </div>
      </section>
    </div>
  );
}