import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

// Base URL for GitHub Pages / Vite
const BASE_URL = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Link to="/" className={styles.footer__logo}>
          <img
            src={`${BASE_URL}assets/shared/desktop/logo.svg`}
            alt="Audiophile"
          />
        </Link>

        <nav className={styles.footer__nav}>
          <Link to="/" className={styles["footer__nav-link"]}>
            HOME
          </Link>
          <Link to="/headphones" className={styles["footer__nav-link"]}>
            HEADPHONES
          </Link>
          <Link to="/speakers" className={styles["footer__nav-link"]}>
            SPEAKERS
          </Link>
          <Link to="/earphones" className={styles["footer__nav-link"]}>
            EARPHONES
          </Link>
        </nav>

        <p className={styles.footer__text}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>

        <p className={styles.footer__copyright}>
          Copyright 2021. All Rights Reserved
        </p>

        <div className={styles.footer__social}>
          <a href="#" className={styles["footer__social-link"]}>
            <img
              src={`${BASE_URL}assets/shared/desktop/icon-facebook.svg`}
              alt="Facebook"
            />
          </a>
          <a href="#" className={styles["footer__social-link"]}>
            <img
              src={`${BASE_URL}assets/shared/desktop/icon-twitter.svg`}
              alt="Twitter"
            />
          </a>
          <a href="#" className={styles["footer__social-link"]}>
            <img
              src={`${BASE_URL}assets/shared/desktop/icon-instagram.svg`}
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}