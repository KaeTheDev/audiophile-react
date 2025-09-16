import styles from "./Button.module.scss";

export default function Button({
  label,
  variant = "primary",
  type = "button",
  icon = null,
  onClick,
}) {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${variant}`]}`}
      type={type}
      onClick={onClick}
    >
      <span className={styles["btn__label"]}>{label}</span>
      {icon && <span className={styles["btn__icon"]}>{icon}</span>}
    </button>
  );
}
