import styles from "./BackButton.module.scss";

export default function BackButton() {
    const handleClick = () => {
        window.history.back(); 
      };

    return (
        <button onClick={handleClick} className={styles["go-back-button"]}>Go Back</button>
    )
}