import { useState } from "react";
import styles from "./NumberPicker.module.scss";

export default function NumberPicker({ value = 1, min = 1, max = 10, onChange }) {
  const [count, setCount] = useState(value);

  const update = (newValue) => {
    if (newValue < min) return;
    if (newValue > max) return;
    setCount(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={`${styles["form-field"]} ${styles["form-field--number"]}`}>
      <button
        className={styles["form-field__number-btn"]}
        onClick={() => update(count - 1)}
        disabled={count <= min}
      >
        -
      </button>
      <div className={styles["form-field__number-value"]}>{count}</div>
      <button
        className={styles["form-field__number-btn"]}
        onClick={() => update(count + 1)}
        disabled={count >= max}
      >
        +
      </button>
    </div>
  );
}