import styles from "./OrderSummary.module.scss";
import Button from "../Button/Button";

export default function OrderSummary({ items = [], onSubmit }) {
  // Calculate totals
  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = items.length > 0 ? 50 : 0;
  const vat = total * 0.2; // 20% of product total
  const grandTotal = total + shipping + vat;

  // Helper to get image URL
  const getImageSrc = (img) => {
    if (!img) return "";
    if (typeof img === "string") return img.startsWith("/") ? img : `/${img}`;
    return img.desktop || img.tablet || img.mobile || "";
  };

  const handleSubmit = () => {
    if (items.length === 0) {
      alert("Your cart is empty. Please add items before proceeding.");
      return;
    }
    onSubmit();
  };

  return (
    <aside className={styles["order-summary"]}>
      <h2 className={styles["order-summary__title"]}>Summary</h2>

      {/* Order Items */}
      <div className={styles["order-summary__items"]}>
        {items.length > 0 ? (
          items.map((item, idx) => (
            <div key={idx} className={styles["order-summary__item"]}>
              <img src={getImageSrc(item.image)} alt={item.name} />
              <div className={styles["order-summary__info"]}>
                <p className={styles["order-summary__name"]}>{item.name}</p>
                <p className={styles["order-summary__price"]}>
                  ${item.price.toLocaleString()}
                </p>
              </div>
              <p className={styles["order-summary__quantity"]}>x{item.qty}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      {/* Totals */}
      <div className={styles["order-summary__totals"]}>
        <div>
          <span>Total</span>
          <span>${total.toLocaleString()}</span>
        </div>
        <div>
          <span>Shipping</span>
          <span>${shipping.toLocaleString()}</span>
        </div>
        <div>
          <span>VAT (20%)</span>
          <span>${vat.toLocaleString()}</span>
        </div>
        <div className={styles["order-summary__grand-total"]}>
          <span className={styles["order-summary__grand-total-label"]}>
            Grand Total
          </span>
          <span className={styles["order-summary__grand-total-amount"]}>
            ${grandTotal.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Continue & Pay Button */}
      <Button
        label="Continue & Pay"
        type="button"
        variant="primary"
        fullWidth
        onClick={handleSubmit}
        disabled={items.length === 0}
      >
        Continue & Pay
      </Button>
    </aside>
  );
}