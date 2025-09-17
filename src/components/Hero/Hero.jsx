// import styles from "./Hero.module.scss";
// import Button from "../Button/Button";
// import { Link } from "react-router-dom";

// export default function Hero() {
//     return (
//         <>
//         <div className={styles.hero__content}>
//             <p className={styles.hero__overline}>New Product</p>
//             <h1 className={styles.hero__title}>XX99 Mark II Headphones</h1>
//             <p className={styles.hero__description}>Experience natural, lifelike audio and exceptional
//                 build quality made for the passionate music enthusiast.
//             </p>
//             <Link to="/product/xx99-mark-two-headphones">
//             <Button label="See Product" variant="primary" />
//           </Link>
//         </div>

//         <div className={styles.hero__imageWrapper}>
//             <picture>
//                 <source media="(max-width: 600px)" srcSet="/audiophile-react/assets/home/mobile/image-header.jpg" />
//                 <source media="(max-width: 900px)" srcSet="/audiophile-react/assets/home/tablet/image-header.jpg"/>
//                 <img src="/audiophile-react/assets/home/desktop/image-hero.jpg" alt="XX99 Mark II Headphones" className={styles.hero__image} />
//             </picture>
//         </div>
//         </>
//     )
// }

import styles from "./Hero.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import heroDesktop from "../../assets/home/desktop/image-hero.jpg";
import heroTablet from "../../assets/home/tablet/image-header.jpg";
import heroMobile from "../../assets/home/mobile/image-header.jpg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero__content"]}>
        <p className={styles["hero__overline"]}>New Product</p>
        <h1 className={styles["hero__title"]}>XX99 Mark II Headphones</h1>
        <p className={styles["hero__description"]}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <div className={styles["hero__btn-link"]}>
          <Link to="/product/xx99-mark-two-headphones">
            <Button label="See Product" variant="primary" />
          </Link>
        </div>
      </div>

      <div className={styles["hero__image-wrapper"]}>
        <picture>
          <source media="(max-width: 600px)" srcSet={heroMobile} />
          <source media="(max-width: 900px)" srcSet={heroTablet} />
          <img
            src={heroDesktop}
            alt="XX99 Mark II Headphones"
            className={styles["hero__image"]}
          />
        </picture>
      </div>
    </section>
  );
}
