import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

// Components
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  const basename = process.env.NODE_ENV === "production" ? "/audiophile-react/" : "/";
  
  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
            </>
          }
        />
        <Route path="/home" element={<Navigate replace to="/" />} />

        {/* Category Pages */}
        <Route
          path="/headphones"
          element={
            <>
              <Category category="headphones" />
              <About />
            </>
          }
        />
        <Route
          path="/speakers"
          element={
            <>
              <Category category="speakers" />
              <About />
            </>
          }
        />
        <Route
          path="/earphones"
          element={
            <>
              <Category category="earphones" />
              <About />
            </>
          }
        />

        {/* Product Pages (dynamic) */}
        <Route
          path="/product/:slug"
          element={
            <>
              <Product />
              <About />
            </>
          }
        />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;