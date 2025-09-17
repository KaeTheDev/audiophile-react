import styles from "./FeaturedProduct.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

import zx9Desktop from "../../assets/home/desktop/image-speaker-zx9.png";
import zx7Desktop from "../../assets/home/desktop/image-speaker-zx7.jpg";
import zx7Tablet from "../../assets/home/tablet/image-speaker-zx7.jpg";
import zx7Mobile from "../../assets/home/mobile/image-speaker-zx7.jpg";
import yx1Desktop from "../../assets/home/desktop/image-earphones-yx1.jpg";

export default function FeaturedProduct() {
    return (
      <section className={styles["featured-products"]}>
        {/* ZX9 Speaker */}
        <article
  className={`${styles["featured-products__banner"]} ${styles["featured-products__banner--zx9"]}`}
>
  <div className={styles["featured-products__banner--zx9-inner"]}>
    <div className={styles["featured-products__banner--zx9-image"]}>
      <img src={zx9Desktop} alt="ZX9 Speaker" />
    </div>

    <div className={styles["featured-products__banner--zx9-content"]}>
      <h2 className={styles["featured-products__banner--zx9-title"]}>
        ZX9 Speaker
      </h2>
      <p className={styles["featured-products__banner--zx9-description"]}>
        Upgrade to premium speakers that are phenomenally built to deliver
        truly remarkable sound.
      </p>

      <Link to="/product/product-zx9-speaker" className={styles["zx9-btn-link"]}>
        <Button label="See Product" variant="outline" type="button" />
      </Link>
    </div>
  </div>
</article>

  
        {/* ZX7 Speaker */}
        <article
          className={`${styles["featured-products__banner"]} ${styles["featured-products__banner--zx7"]}`}
        >
          <div className={styles["featured-products__banner--zx7-content"]}>
            <h2
              className={styles["featured-products__banner--zx7-content-title"]}
            >
              ZX7 Speaker
            </h2>
            <Link
              to="/product/product-zx7-speaker"
              className={styles["featured-products__banner--zx7-content-link"]}
            >
              <Button label="See Product" variant="outline" type="button" />
            </Link>
          </div>
          <picture
            className={styles["featured-products__banner--zx7-image-wrapper"]}
          >
            <source media="(max-width: 600px)" srcSet={zx7Mobile} />
            <source media="(max-width: 900px)" srcSet={zx7Tablet} />
            <img src={zx7Desktop} alt="ZX7 Speaker" />
          </picture>
        </article>
  
        {/* YX1 Earphones */}
        <div className={styles["featured-products__yx1"]}>
          <div className={styles["featured-products__yx1-image-box"]}>
            <img src={yx1Desktop} alt="YX1 Earphones" />
          </div>
  
          <div className={styles["featured-products__yx1-content-box"]}>
            <h2 className={styles["product-banner__title"]}>YX1 Earphones</h2>
            <Link
              to="/product/product-yx1-earphones"
              className={styles["yx1-btn-link"]}
            >
              <Button label="See Product" variant="outline" type="button" />
            </Link>
          </div>
        </div>
      </section>
    );
  }