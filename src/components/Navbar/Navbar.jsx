import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import CartModal from "../CartModal/CartModal";
import { useCartModal } from "../../context/CartModalContext";

const BASE_URL = import.meta.env.BASE_URL;

export default function Navbar() {
  // Mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Cart modal context
  const { isCartOpen, setIsCartOpen } = useCartModal();

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar__container}>
        <Link to="/" className={styles.navbar__logo}>
          <img src={`${BASE_URL}assets/shared/desktop/logo.svg`} alt="audiophile logo" />
        </Link>
        <button
          className={styles.navbar__toggle}
          aria-label="Open Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={`${BASE_URL}assets/shared/tablet/icon-hamburger.svg`} alt="menu toggle" />
        </button>
        <ul className={`${styles.navbar__links} ${isOpen ? styles.isOpen : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/headphones">Headphones</Link></li>
          <li><Link to="/speakers">Speakers</Link></li>
          <li><Link to="/earphones">Earphones</Link></li>
        </ul>
        <button
          id="cart-toggle"
          className={styles.navbar__cart}
          onClick={toggleCart}
        >
          <img src={`${BASE_URL}assets/shared/desktop/icon-cart.svg`} alt="cart icon" />
        </button>
        {isCartOpen && <CartModal />}
      </nav>
    </header>
  );
}