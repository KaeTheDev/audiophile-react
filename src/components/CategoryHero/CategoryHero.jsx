import styles from "./CategoryHero.module.scss";

export default function CategoryHero({ categoryName = "Category" }) {
  return (
    <section className={styles["category-hero"]}>
      <div className={styles["category-hero__content"]}>
        <h1 className={styles["category-hero__title"]}>{categoryName}</h1>
      </div>
    </section>
  );
}