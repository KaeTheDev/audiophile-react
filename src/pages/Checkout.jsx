import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart, useCartDispatch } from "../context/CartContext";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import OrderSummary from "../components/Checkout/OrderSummary";
import OrderConfirmation from "../components/Checkout/OrderConfirmation";
import styles from "./Checkout.module.scss";

export default function Checkout() {
  const items = useCart();
  const dispatch = useCartDispatch();
  const navigate = useNavigate();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [formErrors, setFormErrors] = useState({});

  // total can be zero — we still render the page (no early return)
  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleFormChange = (newFormData) => {
    setFormData(newFormData);
    setFormErrors({});
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = ["name", "email", "phone", "address", "zip", "city", "country"];

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (formData.paymentMethod === "e-money") {
      if (!formData.eMoneyNumber?.trim()) errors.eMoneyNumber = "e-Money Number is required";
      if (!formData.eMoneyPin?.trim()) errors.eMoneyPin = "e-Money PIN is required";
    }

    return errors;
  };

  const handlePaymentSubmit = () => {
    // block if cart empty
    if (!items || items.length === 0) {
      setFormErrors((prev) => ({ ...prev, cart: "Your cart is empty. Add items before checkout." }));
      return;
    }

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Snapshot cart into order BEFORE clearing it (we will clear only after confirmation is closed)
    const itemsSnapshot = JSON.parse(JSON.stringify(items));

    const order = {
      ...formData,
      items: itemsSnapshot,
      subtotal: total,
      shipping: itemsSnapshot.length > 0 ? 50 : 0,
      vat: Math.round((total * 0.2) * 100) / 100, // 20% of product total, rounded
      total: Math.round((total + (itemsSnapshot.length > 0 ? 50 : 0) + total * 0.2) * 100) / 100,
      timestamp: new Date().toISOString(),
    };

    setOrderData(order);
    setShowConfirmation(true);

    // DO NOT clear the cart here — clearing happens after user closes confirmation
  };

  const handleCloseConfirmation = () => {
    // clear cart now that order is done and user closed confirmation
    dispatch({ type: "CLEAR" });

    // hide modal & redirect home
    setShowConfirmation(false);
    setOrderData(null);

    // navigate to home route
    navigate("/");
  };

  return (
    <main className={styles["checkout-page"]}>
      <div className={styles["checkout-page__wrapper"]}>
        {/* Checkout form */}
        <section className={styles["checkout-page__form"]}>
          <CheckoutForm
            formData={formData}
            formErrors={formErrors}
            onFormChange={handleFormChange}
          />
        </section>

        {/* Order summary (uses live cart items) */}
        <aside className={styles["checkout-page__summary"]}>
          <OrderSummary items={items} total={total} onSubmit={handlePaymentSubmit} />
        </aside>
      </div>

      {/* Confirmation Modal Overlay (renders on top, uses orderData snapshot) */}
      {showConfirmation && orderData && (
        <div className={styles["confirmation-overlay"]}>
          <div className={styles["confirmation-modal"]}>
            <OrderConfirmation order={orderData} onClose={handleCloseConfirmation} />
          </div>
        </div>
      )}
    </main>
  );
}