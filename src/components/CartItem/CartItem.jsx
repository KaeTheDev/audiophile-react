import React from "react";
import NumberPicker from "../form-elements/NumberPicker"; 
import styles from "./CartItem.module.scss";

/*
 * Note: cart store integration is intentionally left out for now.
 */
export default function CartItem({ slug, name, price, qty = 1, image, onQtyChange, onRemove }) {
  // Handler passed to NumberPicker. It delegates to optional callbacks (or logs).
  const handleQtyChange = (newQty) => {
    // If the parent provided a handler, call it. Otherwise just console.log for testing.
    if (typeof onQtyChange === "function") {
      if (newQty === 0) {
        // if there's a remove handler, call it; otherwise treat as update -> remove
        if (typeof onRemove === "function") onRemove(slug);
        else console.log("[CartItem] remove requested for", slug);
      } else {
        onQtyChange(slug, newQty);
      }
    } else {
      // No handler: local test behaviour (log only)
      if (newQty === 0) {
        console.log("[CartItem] would remove", slug);
      } else {
        console.log("[CartItem] qty change", slug, newQty);
      }
    }
  };

  return (
    <div className={styles["cart-item"]} data-slug={slug}>
      <img src={image} alt={name} className={styles["cart-item__image"]} />

      <div className={styles["cart-item__details"]}>
        <p className={styles["cart-item__name"]}>{name}</p>
        <p className={styles["cart-item__price"]}>${Number(price).toLocaleString()}</p>
      </div>

      <div className={styles["cart-item__quantity-selector"]}>
        {/* NumberPicker is responsible for UI & calling onChange (we wire to handleQtyChange) */}
        <NumberPicker value={qty} min={0} max={10} onChange={handleQtyChange} />
      </div>
    </div>
  );
}