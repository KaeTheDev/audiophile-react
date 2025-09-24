import React from "react";
import Button from "../Button/Button";
import styles from "./OrderConfirmation.module.scss";

export default function OrderConfirmation({ order, onClose }) {

  // ✅ Calculate grand total if not provided (same logic as OrderSummary)
  const subtotal = order?.subtotal || order?.total || 0;
  const shipping = order?.shipping || (order?.items?.length > 0 ? 50 : 0);
  const vat = order?.vat || (subtotal * 0.2);
  const calculatedGrandTotal = subtotal + shipping + vat;

  const safeOrder = {
    items: order?.items || [],
    grandTotal: order?.grandTotal || calculatedGrandTotal,
    subtotal: subtotal,
    vat: vat,
    shipping: shipping,
  };

  const formatPrice = (price) => {
    const numPrice = Number(price) || 0;
    return numPrice.toLocaleString();
  };

  const handleBackToHome = () => {
    if (onClose) onClose();
    window.location.href = import.meta.env.BASE_URL;
  };
  
  // ✅ Fixed: Use the same image logic as OrderSummary
  const getImageSrc = (img) => {
    console.log("Processing image:", img); // Debug log
    if (!img) return "";
    if (typeof img === "string") {
      const result = img.startsWith("/") ? img : `/${img}`;
      console.log("String image result:", result); // Debug log
      return result;
    }
    const result = img.desktop || img.tablet || img.mobile || "";
    console.log("Object image result:", result); // Debug log
    return result;
  };

  return (
    <div className={styles["order-confirmation"]}>
      <img
        className={styles["order-confirmation__icon"]}
        src={new URL("../../assets/checkout/icon-order-confirmation.svg", import.meta.url).href}
        alt="Order Confirmed"
      />
      <h2 className={styles["order-confirmation__title"]}>Thank you for your order</h2>
      <p className={styles["order-confirmation__message"]}>
        You will receive an email confirmation shortly.
      </p>

      <div className={styles["order-confirmation__summary"]}>
        <div className={styles["order-confirmation__summary-left"]}>
          {safeOrder.items.length > 0 && (
            <div className={styles["order-confirmation__item"]}>
              <div className={styles["order-confirmation__item-left"]}>
                <img
                  src={getImageSrc(safeOrder.items[0].image)}
                  alt={safeOrder.items[0].name || "Product"}
                  className={styles["order-confirmation__item-img"]}
                  onError={(e) => {
                    console.log("Image failed to load:", e.target.src);
                    e.target.style.display = 'none'; // Hide broken images
                  }}
                />
                <div className={styles["order-confirmation__item-details"]}>
                  <p className={styles["order-confirmation__item-name"]}>
                    {safeOrder.items[0].name || "Unknown Product"}
                  </p>
                  <p className={styles["order-confirmation__item-price"]}>
                    ${formatPrice(safeOrder.items[0].price)}
                  </p>
                </div>
              </div>
              <p className={styles["order-confirmation__item-qty"]}>
                x{safeOrder.items[0].qty || 1}
              </p>
            </div>
          )}

          {safeOrder.items.length > 1 && (
            <>
              <hr className={styles["order-confirmation__divider"]} />
              <p className={styles["order-confirmation__more"]}>
                and {safeOrder.items.length - 1} other item(s)
              </p>
            </>
          )}
        </div>

        <div className={styles["order-confirmation__summary-right"]}>
          <p className={styles["order-confirmation__grand-label"]}>Grand Total</p>
          <p className={styles["order-confirmation__grand-amount"]}>
            ${formatPrice(safeOrder.grandTotal)}
          </p>
        </div>
      </div>

      <div className={styles["order-confirmation__button-container"]}>
        <Button label="Back to Home" variant="primary" onClick={handleBackToHome} />
      </div>
    </div>
  );
}