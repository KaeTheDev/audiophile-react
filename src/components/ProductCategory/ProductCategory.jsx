import styles from "./ProductCategory.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

import headphonesDesktop from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersDesktop from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesDesktop from "/assets/shared/desktop/image-category-thumbnail-earphones.png";

const categoryImages = {
  headphones: {
    mobile: headphonesDesktop,
    tablet: headphonesDesktop,
    desktop: headphonesDesktop
  },
  speakers: {
    mobile: speakersDesktop,
    tablet: speakersDesktop,
    desktop: speakersDesktop
  },
  earphones: {
    mobile: earphonesDesktop,
    tablet: earphonesDesktop,
    desktop: earphonesDesktop
  }
};

export default function ProductCategory({ categories }) {
  return (
    <section className={styles.categories}>
      {categories.map((category) => {
        const categoryName = category.name.toLowerCase();
        const images = categoryImages[categoryName];

        return (
          <article key={category.name} className={styles.categories__item}>
            <div className={styles.categories__box} />
            <div className={styles.categories__imageWrapper}>
              <picture>
                <source media="(min-width: 1024px)" srcSet={images?.desktop} />
                <source media="(min-width: 768px)" srcSet={images?.tablet} />
                <img
                  src={images?.mobile}
                  alt={category.name}
                  className={styles.categories__image}
                />
              </picture>
            </div>
            <h3 className={styles.categories__name}>{category.name}</h3>
            <Link to={`/${category.link}`} className={styles.categories__link}>
              <Button label="Shop" variant="link" icon="chevron" />
            </Link>
          </article>
        );
      })}
    </section>
  );
}