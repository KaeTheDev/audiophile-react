import React from "react";
import styles from "./CartModal.module.scss";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import { useCart, useCartDispatch } from "../../context/CartContext";
import { useCartModal } from "../../context/CartModalContext";

export default function CartModal() {
  const items = useCart();
  const dispatch = useCartDispatch();
  const { setIsCartOpen } = useCartModal();

  const BASE_URL = import.meta.env.BASE_URL || "/";

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalItems = items.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className={`${styles["cart-modal"]} ${styles["is-visible"]}`}>
      {/* Header */}
      <div className={styles["cart-modal__header"]}>
        <h2 className={styles["cart-modal__title"]}>Cart ({totalItems})</h2>
        <button
          className={styles["cart-modal__remove-all"]}
          onClick={() => dispatch({ type: "CLEAR" })}
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
            <a href={`${BASE_URL}index.html`} className={styles["cart-modal__shop-link"]}>
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
              image={`${BASE_URL}assets/product-${item.slug}/desktop/image-product.jpg`}
              onQtyChange={(slug, qty) =>
                dispatch({ type: "UPDATE_QTY", payload: { slug, qty } })
              }
              onRemove={() =>
                dispatch({ type: "REMOVE_ITEM", payload: { slug: item.slug } })
              }
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
        <Button
          label="Checkout"
          variant="primary"
          onClick={() => (window.location.href = `${BASE_URL}checkout`)}
        />
      </div>
    </div>
  );
}
