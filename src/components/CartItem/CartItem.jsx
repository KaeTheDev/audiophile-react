// import React from "react";
// import NumberPicker from "../form-elements/NumberPicker"; 
// import styles from "./CartItem.module.scss";

// export default function CartItem({ slug, name, price, qty = 1, image, onQtyChange, onRemove }) {
//   const BASE_URL = import.meta.env.BASE_URL || "/";

//   // Ensure image URL is correct with BASE_URL
//   const imageSrc = typeof image === "string"
//     ? `${BASE_URL}${image.replace(/^\/+/, "")}`
//     : image?.desktop
//     ? `${BASE_URL}${image.desktop.replace(/^\/+/, "")}`
//     : "";

//   const handleQtyChange = (newQty) => {
//     if (newQty === 0) {
//       if (typeof onRemove === "function") onRemove(slug);
//     } else if (typeof onQtyChange === "function") {
//       onQtyChange(slug, newQty);
//     }
//   };

//   return (
//     <div className={styles["cart-item"]} data-slug={slug}>
//       <img 
//         src={imageSrc} 
//         alt={name} 
//         className={styles["cart-item__image"]} 
//       />
//       <div className={styles["cart-item__details"]}>
//         <p className={styles["cart-item__name"]}>{name}</p>
//         <p className={styles["cart-item__price"]}>${Number(price).toLocaleString()}</p>
//       </div>
//       <div className={styles["cart-item__quantity-selector"]}>
//         <NumberPicker 
//           value={qty} 
//           min={0} 
//           max={10} 
//           onChange={handleQtyChange} 
//         />
//       </div>
//     </div>
//   );
// }

import React from "react";
import NumberPicker from "../form-elements/NumberPicker"; 
import styles from "./CartItem.module.scss";

export default function CartItem({ slug, name, price, qty = 1, onQtyChange, onRemove }) {
  const BASE_URL = import.meta.env.BASE_URL || "/";

  // Build the product image path dynamically using BASE_URL + slug
  const imageSrc = `${BASE_URL}assets/product-${slug}/desktop/image-product.jpg`;

  const handleQtyChange = (newQty) => {
    if (newQty === 0) {
      if (typeof onRemove === "function") onRemove(slug);
    } else if (typeof onQtyChange === "function") {
      onQtyChange(slug, newQty);
    }
  };

  return (
    <div className={styles["cart-item"]} data-slug={slug}>
      <img 
        src={imageSrc} 
        alt={name} 
        className={styles["cart-item__image"]} 
      />
      <div className={styles["cart-item__details"]}>
        <p className={styles["cart-item__name"]}>{name}</p>
        <p className={styles["cart-item__price"]}>${Number(price).toLocaleString()}</p>
      </div>
      <div className={styles["cart-item__quantity-selector"]}>
        <NumberPicker 
          value={qty} 
          min={0} 
          max={10} 
          onChange={handleQtyChange} 
        />
      </div>
    </div>
  );
}