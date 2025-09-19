import styles from "./ProductRecommendation.module.scss";
import Button from "../Button/Button";

export default function ProductRecommendations({ product }) {
  return (
    <section className={styles["product-recommendations"]}>
      <h2 className={styles["product-recommendations__title"]}>
        You may also like
      </h2>

      <div className={styles["product-recommendations__list"]}>
        {product.others.map((rec, index) => (
          <div
            key={index}
            className={styles["product-recommendations__card"]}
          >
            <img
              className={styles["product-recommendations__image"]}
              src={rec.image.mobile}
              srcSet={`${rec.image.mobile} 654w, ${rec.image.tablet} 562w, ${rec.image.desktop} 350w`}
              sizes="(min-width: 1200px) 350px, (min-width: 768px) 562px, 654px"
              alt={rec.name}
            />
            <h3 className={styles["product-recommendations__name"]}>
              {rec.name}
            </h3>
            <a href={`/audiophile-react/product/${rec.slug}`}>
              <Button
                className={styles["product-recommendations__button"]}
                label="See Product"
                variant="primary"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}