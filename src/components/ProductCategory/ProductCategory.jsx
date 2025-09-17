import styles from "./ProductCategory.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function ProductCategory({ categories }) {
  const base = import.meta.env.BASE_URL || '/';
  
  return (
    <section className={styles.categories}>
      {categories.map((category) => (
        <article key={category.name} className={styles.categories__item}>
          {/* White box background */}
          <div className={styles.categories__box} />
          
          {/* Image wrapper */}
          <div className={styles.categories__imageWrapper}>
            <picture>
              <source media="(min-width: 1024px)" srcSet={category.image.desktop} />
              <source media="(min-width: 768px)" srcSet={category.image.tablet} />
              <img
                src={category.image.mobile}
                alt={category.name}
                className={styles.categories__image}
              />
            </picture>
          </div>
          
          {/* Category name */}
          <h3 className={styles.categories__name}>{category.name}</h3>
          
          {/* Shop link/button */}
          <Link to={`/${category.link}`} className={styles.categories__link}>
            <Button label="Shop" variant="link" icon="chevron" />
          </Link>
        </article>
      ))}
    </section>
  );
}