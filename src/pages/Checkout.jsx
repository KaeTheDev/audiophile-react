import CheckoutForm from "../components/Checkout/CheckoutForm";
import OrderSummary from "../components/Checkout/OrderSummary";

export default function Checkout() {
    return (
        
        <div className="page-checkout">
            <CheckoutForm />
            <OrderSummary />
        </div>
    );
    
}