import styles from "./About.module.scss";

export default function About() {

    // Base URL for GitHub Pages / Vite
const BASE_URL = import.meta.env.BASE_URL;

return (
    <section className={styles.about}>
    <div className={styles.about__container}>
        <div className={styles.about__content}>
            <h2 className={styles.about__title}>
                Bringing you the <span>best</span> audio gear
            </h2>
            <p className={styles.about__description}>
                Located at the heart of New York City, Audiophile is the 
                premier store for high end headphones, earphones, speakers,
                and audio accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of our 
                products. Stop by out store to meet some of the fantastic people who
                make Audiophile the best place to buy your portable audio equipment.
            </p>
        </div>

        <picture className={styles.about__image}>
            <source media="(min-width: 1024px)" srcSet={`${BASE_URL}/assets/shared/desktop/image-best-gear.jpg`} />
            <source media="(min-width: 768px)" srcSet={`${BASE_URL}/assets/shared/tablet/image-best-gear.jpg`} />
            <img src={`${BASE_URL}/assets/shared/mobile/image-best-gear.jpg`} alt="Man enjoying audio gear" />
        </picture>
    </div>
</section>
)
}