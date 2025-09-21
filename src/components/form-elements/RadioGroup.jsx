import styles from "./RadioGroup.module.scss";

export default function RadioGroup({ legend, name, options, value, onChange }) {
  return (
    <fieldset className={`${styles["form-field"]} ${styles["form-field--radio"]}`}>
      <legend className={styles["form-field__legend"]}>{legend}</legend>
      {options.map((option) => (
        <label key={option.value} className={styles["radio-option"]}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange && onChange(option.value)}
            className={styles["radio-input"]}
          />
          <span className={styles["radio-mark"]}></span>
          <span className={styles["radio-label"]}>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}