import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import Button from "../Button/Button";

// list of slugs that use PNG previews; if none, JPG
const PNG_PRODUCTS = [
  "xx99-mark-one-headphones",
  "yx1-earphones",
  "zx9-speaker",
];

export default function ProductCard({ product, index = 0 }) {
  const isReversed = index % 2 !== 0;
  const ext = PNG_PRODUCTS.includes(product.slug) ? "png" : "jpg";

  // Base URL for public assets; this respects Vite's BASE_URL (good for GitHub Pages)
  const BASE_URL = import.meta.env.BASE_URL || "/";

  // Build public URLs for the three responsive images
  const basePath = `${BASE_URL}/assets/product-${product.slug}`;
  const desktopImage = `${basePath}/desktop/image-category-page-preview.${ext}`;
  const tabletImage = `${basePath}/tablet/image-category-page-preview.${ext}`;
  const mobileImage = `${basePath}/mobile/image-category-page-preview.${ext}`;

  const articleClass = `${styles["product-card"]} ${
    isReversed ? styles["product-card--reverse"] : ""
  }`;

  return (
    <article className={articleClass}>
      <div className={styles["product-card__image-container"]}>
        <picture className={styles["product-card__picture"]}>
          <source media="(min-width: 1025px)" srcSet={desktopImage} />
          <source media="(min-width: 769px)" srcSet={tabletImage} />
          <img
            src={mobileImage}
            alt={product.name}
            className={styles["product-card__image"]}
            onError={handleImgError}
          />
        </picture>
      </div>

      <div className={styles["product-card__content"]}>
        {product.new && (
          <p className={styles["product-card__overline"]}>New Product</p>
        )}
        <h2 className={styles["product-card__name"]}>{product.name}</h2>
        <p className={styles["product-card__desc"]}>{product.description}</p>

        {/* Link to product page (App route: /product/:slug) */}
        <Link to={`/product/${product.slug}`}>
          <Button label="See Product" variant="primary" />
        </Link>
      </div>
    </article>
  );
}