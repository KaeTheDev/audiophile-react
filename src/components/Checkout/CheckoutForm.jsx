import { useState } from "react";
import styles from "./CheckoutForm.module.scss";
import RadioGroup from "../Form-Elements/RadioGroup";
import TextField from "../Form-Elements/TextField";
import BackButton from "../BackButton/BackButton";
import Button from "../Button/Button";

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
        setFormData((prev) => ({...prev, [name]: value}));
    }

    function handlePaymentChange(value) {
        setFormData((prev) => ({...prev, paymentMethod: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form Submitted: ", formData);
    }

    return (
        <form className={styles["checkout-form"]} onSubmit={handleSubmit}>
            <BackButton />
            <h2 className={styles["checkout-form__title"]}>Checkout</h2>

            <fieldset className={styles["checkout-form__section"]}>
                <legend>Billing Details</legend>
                <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />

                <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                />

                <TextField
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </fieldset>

            <fieldset className={styles["checkout-form__section"]}>
                <legend>Shipping Info</legend>
                <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                />

                <TextField
                    label="ZIP Code"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                />

                <TextField
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />

                <TextField
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                />
            </fieldset>

            <fieldset className={styles["checkout-form__section"]}>
                <legend>Payment Details</legend>
                <RadioGroup
                    name="paymentMethod"
                    options={[
                        {value: "e-money", label: "e-Money"},
                        {value: "cash", label: "Cash on Delivery"}
                    ]}
                    value={formData.paymentMethod}
                    onChange={handlePaymentChange}
                />

                {formData.paymentMethod === "e-money" && (

                    <div className={styles["checkout-form__emoney"]}>
                        <TextField
                        label="e-Money Number"
                        name="eMoneyNumber"
                        value={formData.eMoneyNumber}
                        onChange={handleChange}
                        required
                        />

                        <TextField
                            label="e-Money PIN"
                            name="eMoneyPin"
                            value={formData.eMoneyPin}
                            onChange={handleChange}
                            required
                        />
                    </div>         
                    )}
            </fieldset>

            {/* <Button type="submit" variant="primary" className={styles["checkout-form__submit"]}>
                Continue & Pay
            </Button> */}
        </form>

    )
}