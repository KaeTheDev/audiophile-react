import styles from "./ProductSpecs.module.scss";

export default function ProductSpecs({ product }) {
  return (
    <section className={styles["product-specs"]}>
      <div className={styles["product-specs__text"]}>
        <h2>Features</h2>
        {product.features.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className={styles["product-specs__box"]}>
        <h2>In The Box</h2>
        <ul>
          {product.includes.map((item, i) => (
            <li key={i} className={styles["product-specs__item"]}>
              <span className={styles["product-specs__quantity"]}>
                {item.quantity}x
              </span>
              <span className={styles["product-specs__item-name"]}>
                {item.item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}