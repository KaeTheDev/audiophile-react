import styles from "./Button.module.scss";

const ChevronIcon = () => (
  <svg 
    width="8" 
    height="12" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ 
      display: 'inline-block', 
      verticalAlign: 'middle',
      marginLeft: '8px'
    }}
  >
    <path
      d="m1.322 1 5 5-5 5"
      stroke="#D87D4A"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

export default function Button({
  label,
  variant = "primary",
  type = "button",
  icon = null,
  onClick,
  fullWidth = false
}) {

  // Render the appropriate icon based on the icon prop
  const renderIcon = () => {
    if (!icon) return null;
    
    switch (icon) {
      case "chevron":
        return <ChevronIcon />;
      default:
        return icon; // fallback for custom icons
    }
  };

  return (
    <button
    className={`${styles.btn} ${styles[`btn--${variant}`]} ${fullWidth ? styles['btn--full-width'] : ''}`}
      type={type}
      onClick={onClick}
    >
      <span className={styles["btn__label"]}>{label}</span>
      {icon && (
        <span className={styles["btn__icon"]}>
          {renderIcon()}
        </span>
      )}
    </button>
  );
}