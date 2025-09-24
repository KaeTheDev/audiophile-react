import styles from "./CheckoutForm.module.scss";
import RadioGroup from "../Form-Elements/RadioGroup";
import TextField from "../Form-Elements/TextField";
import BackButton from "../BackButton/BackButton";
import codIcon from "../../assets/checkout/icon-cash-on-delivery.svg";

export default function CheckoutForm({ formData, formErrors, onFormChange }) {
  function handleChange(e) {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    onFormChange(newFormData);
  }

  function handlePaymentChange(value) {
    const newFormData = { ...formData, paymentMethod: value };
    onFormChange(newFormData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Form submission is now handled by the parent component
  }

  const hasErrors = Object.keys(formErrors).length > 0;

  return (
    <form className={styles["checkout-form"]} onSubmit={handleSubmit}>
      <BackButton />
      <h2 className={styles["checkout-form__title"]}>Checkout</h2>

      {/* Form Validation Message */}
      {hasErrors && (
        <div
          className={styles["validation-message"]}
          role="alert"
          aria-live="assertive"
        >
          <p>Please fill in all required fields before proceeding.</p>
        </div>
      )}

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
            error={formErrors.name}
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            placeholder="alexei@mail.com"
            value={formData.email}
            onChange={handleChange}
            required
            error={formErrors.email}
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
            error={formErrors.phone}
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
          error={formErrors.address}
        />
        <div className={styles["checkout-form__row"]}>
          <TextField
            label="ZIP Code"
            name="zip"
            placeholder="10001"
            value={formData.zip}
            onChange={handleChange}
            required
            error={formErrors.zip}
          />
          <TextField
            label="City"
            name="city"
            placeholder="New York"
            value={formData.city}
            onChange={handleChange}
            required
            error={formErrors.city}
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
            error={formErrors.country}
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
              style={{
                fontWeight: "700",
                marginBottom: "0.5rem",
                display: "block",
              }}
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
              error={formErrors.eMoneyNumber}
            />
            <TextField
              label="e-Money PIN"
              name="eMoneyPin"
              placeholder="6891"
              value={formData.eMoneyPin}
              onChange={handleChange}
              required
              error={formErrors.eMoneyPin}
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
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          </div>
        )}
      </fieldset>
    </form>
  );
}
