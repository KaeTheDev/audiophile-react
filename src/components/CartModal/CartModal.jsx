import React from "react";
import styles from "./CartModal.module.scss";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button"; // ✅ keep this

// Mock cart items
const mockItems = [
  {
    slug: "xx99-mark-two",
    name: "XX99 Mark II Headphones",
    price: 2999,
    qty: 1,
    image: {
      desktop: "/audiophile-react/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
    },
  },
  {
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    price: 4500,
    qty: 2,
    image: {
      desktop: "/audiophile-react/assets/product-zx9-speaker/desktop/image-product.jpg",
    },
  },
];

export default function CartModal() {
  const [items, setItems] = React.useState(mockItems);

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleRemoveAll = () => {
    console.log("Remove all clicked");
    setItems([]);
  };

  const handleQtyChange = (slug, qty) => {
    if (qty === 0) {
      setItems((prev) => prev.filter((item) => item.slug !== slug));
    } else {
      setItems((prev) =>
        prev.map((item) =>
          item.slug === slug ? { ...item, qty } : item
        )
      );
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      console.log("Your cart is empty. Add something before checking out!");
    } else {
      console.log("Proceed to checkout");
      // window.location.href = "checkout.html"; // Uncomment when real
    }
  };

  return (
    <div className={`${styles["cart-modal"]} ${styles["is-visible"]}`}>
      {/* Header */}
      <div className={styles["cart-modal__header"]}>
        <h2 className={styles["cart-modal__title"]}>Cart ({items.length})</h2>
        {/* Plain button for "Remove All" */}
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
            Your cart is empty.<br />
            Ready to upgrade your sound? 🎧<br />
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
              image={item.image.desktop}
              onQtyChange={handleQtyChange}
              onRemove={(slug) =>
                setItems((prev) => prev.filter((item) => item.slug !== slug))
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

      {/* Checkout Button uses your Button component */}
      <div className={styles["cart-modal__checkout"]}>
        <Button
          label="Checkout"
          variant="primary"
          onClick={handleCheckout}
        />
      </div>
    </div>
  );
}