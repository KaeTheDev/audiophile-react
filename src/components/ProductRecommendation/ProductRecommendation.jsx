import { Link } from "react-router-dom";
import styles from "./ProductRecommendation.module.scss";
import Button from "../Button/Button";

export default function ProductRecommendation({ product }) {

  const basePath = process.env.NODE_ENV === "production" ? "/audiophile-react" : "";
  
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
              src={`${basePath}/${rec.image.mobile}`}
              srcSet={`${basePath}/${rec.image.mobile} 654w, ${basePath}/${rec.image.tablet} 562w, ${basePath}/${rec.image.desktop} 350w`}
              sizes="(min-width: 1200px) 350px, (min-width: 768px) 562w, 654px"
              alt={rec.name}
            />
            <h3 className={styles["product-recommendations__name"]}>
              {rec.name}
            </h3>
            <Link to={`/product/${rec.slug}`}>
              <Button
                className={styles["product-recommendations__button"]}
                label="See Product"
                variant="primary"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}