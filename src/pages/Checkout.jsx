import CheckoutForm from "../components/Checkout/CheckoutForm";
import OrderSummary from "../components/Checkout/OrderSummary";
import styles from "./Checkout.module.scss";

export default function Checkout() {
  return (
    <main className={styles["checkout-page"]}>
      <div className={styles["checkout-page__wrapper"]}>
        <section className={styles["checkout-page__form"]}>
          <CheckoutForm />
        </section>
        <aside className={styles["checkout-page__summary"]}>
          <OrderSummary />
        </aside>
      </div>
    </main>
  );
}