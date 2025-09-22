import { useState } from "react";
import styles from "./CheckoutForm.module.scss";
import RadioGroup from "../Form-Elements/RadioGroup";
import TextField from "../Form-Elements/TextField";
import BackButton from "../BackButton/BackButton";
import codIcon from "../../assets/checkout/icon-cash-on-delivery.svg";

export default function CheckoutForm() {
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

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handlePaymentChange(value) {
    setFormData((prev) => ({ ...prev, paymentMethod: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  }

  return (
    <form className={styles["checkout-form"]} onSubmit={handleSubmit}>
      <BackButton />
      <h2 className={styles["checkout-form__title"]}>Checkout</h2>

      {/* Billing */}
      <fieldset className={styles["checkout-form__section"]}>
        <legend>Billing Details</legend>
        <div className={styles["checkout-form__row"]}>
          <TextField
            label="Name"
            name="name"
            placeholder="Alexei Ward"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            placeholder="alexei@mail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles["checkout-form__row"]}>
          <TextField
            label="Phone Number"
            name="phone"
            placeholder="+1 202-555-0136"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <div style={{ flex: 1 }} />
        </div>
      </fieldset>

      {/* Shipping */}
      <fieldset className={styles["checkout-form__section"]}>
        <legend>Shipping Info</legend>
        <TextField
          label="Address"
          name="address"
          placeholder="1137 Williams Avenue"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <div className={styles["checkout-form__row"]}>
          <TextField
            label="ZIP Code"
            name="zip"
            placeholder="10001"
            value={formData.zip}
            onChange={handleChange}
            required
          />
          <TextField
            label="City"
            name="city"
            placeholder="New York"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles["checkout-form__row"]}>
          <TextField
            label="Country"
            name="country"
            placeholder="United States"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <div style={{ flex: 1 }} />
        </div>
      </fieldset>

      {/* Payment */}
      <fieldset className={styles["checkout-form__section"]}>
        <legend>Payment Details</legend>

        <div className={styles["checkout-form__row"]}>
          <div style={{ flex: "1 1 0", alignSelf: "center" }}>
            <label
              htmlFor="paymentMethod"
              style={{ fontWeight: "700", marginBottom: "0.5rem", display: "block" }}
            >
              Payment Method
            </label>
          </div>
          <div style={{ flex: "2 1 0" }}>
            <RadioGroup
              name="paymentMethod"
              options={[
                { value: "e-money", label: "e-Money" },
                { value: "cash", label: "Cash on Delivery" },
              ]}
              value={formData.paymentMethod}
              onChange={handlePaymentChange}
            />
          </div>
        </div>

        {formData.paymentMethod === "e-money" && (
          <div className={styles["checkout-form__row"]}>
            <TextField
              label="e-Money Number"
              name="eMoneyNumber"
              placeholder="238521993"
              value={formData.eMoneyNumber}
              onChange={handleChange}
              required
            />
            <TextField
              label="e-Money PIN"
              name="eMoneyPin"
              placeholder="6891"
              value={formData.eMoneyPin}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {formData.paymentMethod === "cash" && (
          <div className={styles["cod-message"]}>
            <div className={styles["cod-message__icon"]}>
              <img src={codIcon} alt="Cash on Delivery" />
            </div>
            <div className={styles["cod-message__text"]}>
              <p>
                The "Cash on Delivery" option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be cancelled.
              </p>
            </div>
          </div>
        )}
      </fieldset>
    </form>
  );
}
