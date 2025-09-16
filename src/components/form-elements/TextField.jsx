import styles from "./TextField.module.scss";

export default function TextField({ label, placeholder, value, onChange, error }) {
  return (
    <div className={`${styles["form-field"]} ${styles["form-field--text"]} ${error ? styles["has-error"] : ""}`}>
      <label className={styles["form-field__label"]}>{label}</label>
      <input
        className={styles["form-field__input"]}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}