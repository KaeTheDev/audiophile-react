import styles from "./CategoryHero.module.scss";

export default function CategoryHero({ categoryName }) {
  
  return (
    <section className={styles["category-hero"]}>
      <div className={styles["category-hero__content"]}>
        <h1 className={styles["category-hero__title"]}>
          {typeof categoryName === 'string' ? categoryName : 'Category'}
        </h1>
      </div>
    </section>
  );
}