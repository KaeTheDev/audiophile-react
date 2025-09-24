import React from "react";
import styles from "./CartModal.module.scss";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import { useCart, useCartDispatch } from "../../context/CartContext";

export default function CartModal() {
  const items = useCart();
  const dispatch = useCartDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  const totalItems = items.reduce((acc, item) => acc + item.qty, 0);

  const handleRemoveAll = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleQtyChange = (slug, qty) => {
    dispatch({ type: "UPDATE_QTY", payload: { slug, qty } });
  };

  const handleRemove = (slug) => {
    dispatch({ type: "REMOVE_ITEM", payload: { slug } });
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      console.log("Your cart is empty. Add something before checking out!");
    } else {
      console.log("Proceed to checkout");
      window.location.href = "/checkout"; // or your checkout route
    }
  };

  return (
    <div className={`${styles["cart-modal"]} ${styles["is-visible"]}`}>
      {/* Header */}
      <div className={styles["cart-modal__header"]}>
        <h2 className={styles["cart-modal__title"]}>Cart ({totalItems})</h2>
        <button
          className={styles["cart-modal__remove-all"]}
          onClick={handleRemoveAll}
        >
          Remove All
        </button>
      </div>

      {/* Items */}
      <div className={styles["cart-modal__items"]}>
        {items.length === 0 ? (
          <p className={styles["cart-modal__empty"]}>
            Your cart is empty.
            <br />
            Ready to upgrade your sound? 🎧
            <br />
            <a href="/index.html" className={styles["cart-modal__shop-link"]}>
              Continue Shopping
            </a>
          </p>
        ) : (
          items.map((item) => (
            <CartItem
              key={item.slug}
              slug={item.slug}
              name={item.name}
              price={item.price}
              qty={item.qty}
              image={item.image.desktop || item.image} 
              onQtyChange={handleQtyChange}
              onRemove={() => handleRemove(item.slug)}
            />
          ))
        )}
      </div>

      {/* Total */}
      <div className={styles["cart-modal__total"]}>
        <span>Total</span>
        <span className={styles["cart-modal__total-price"]}>
          ${total.toLocaleString()}
        </span>
      </div>

      {/* Checkout */}
      <div className={styles["cart-modal__checkout"]}>
        <Button label="Checkout" variant="primary" onClick={handleCheckout} />
      </div>
    </div>
  );
}
