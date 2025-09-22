import styles from "./OrderSummary.module.scss";
import Button from "../Button/Button";

export default function OrderSummary({ items = [], total = 0, shipping = 0, vat = 0, grandTotal = 0, onSubmit,   className = "", }) {
  return (
    <aside className={styles["order-summary"]}>
      <h2 className={styles["order-summary__title"]}>Summary</h2>

      {/* Order Items */}
      <div className={styles["order-summary__items"]}>
        {items.length > 0 ? (
          items.map((item, idx) => (
            <div key={idx} className={styles["order-summary__item"]}>
              <img src={item.image} alt={item.name} />
              <div className={styles["order-summary__info"]}>
                <p className={styles["order-summary__name"]}>{item.name}</p>
                <p className={styles["order-summary__price"]}>${item.price.toLocaleString()}</p>
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
          <span>VAT (Included)</span>
          <span>${vat.toFixed(1)}</span>
        </div>
        <div className={styles["order-summary__grand-total"]}>
          <span className={styles["order-summary__grand-total-label"]}>Grand Total</span>
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
        fullWidth={true} 
        onClick={onSubmit ? onSubmit : () => console.log("Submit clicked")}
      >
        Continue & Pay
      </Button>
    </aside>
  );
}