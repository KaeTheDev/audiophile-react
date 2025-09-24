import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./styles/main.scss";
import './styles/_toast.scss';
import { Toaster } from "react-hot-toast";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
      <Toaster
      toastOptions={{
        className: 'toast',       
        position: 'top-center',
      }}
    />
    </CartProvider>
  </StrictMode>
);
