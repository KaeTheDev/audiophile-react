import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

// Components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router basename="/audiophile-react/">
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        {/* Category Pages */}
        <Route path="/headphones" element={<Category category="headphones" />} />
        <Route path="/speakers" element={<Category category="speakers" />} />
        <Route path="/earphones" element={<Category category="earphones" />} />

        {/* Product Pages (dynamic) */}
        <Route path="/product/:slug" element={<Product />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;