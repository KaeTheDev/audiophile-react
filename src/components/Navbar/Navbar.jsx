import React, { useState } from "react";
import { Link } from "react-router-dom"; // For client-side navigation
import styles from "./Navbar.module.scss";

// Store base URL for public assets
const BASE_URL = import.meta.env.BASE_URL;

export default function Navbar() {
  // React state to handle mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar__container}>
        {/* Logo */}
        <Link to="/" className={styles.navbar__logo}>
        <img src={`${BASE_URL}/assets/shared/desktop/logo.svg`} alt="audiophile logo" />
        </Link>

        {/* Hamburger button for mobile */}
        <button
          className={styles.navbar__toggle}
          aria-label="Open Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
        
            <img src={`${BASE_URL}/assets/shared/tablet/icon-hamburger.svg`} alt="menu toggle" />
         
        </button>

        {/* Nav links */}
        <ul
          className={`${styles.navbar__links} ${isOpen ? styles.isOpen : ""}`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/headphones">Headphones</Link>
          </li>
          <li>
            <Link to="/speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/earphones">Earphones</Link>
          </li>
        </ul>

        {/* Cart button */}
        <button id="cart-toggle" className={styles.navbar__cart}>
          <img src={`${BASE_URL}/assets/shared/desktop/icon-cart.svg`} alt="cart icon" />
        </button>
      </nav>
    </header>
  );
}