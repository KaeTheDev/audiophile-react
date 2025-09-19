import styles from "./ProductGallery.module.scss";

export default function ProductGallery({ product }) {

    function getProductSlug(productName) {
        const slugMap = {
          "XX99 Mark I Headphones": "product-xx99-mark-one-headphones",
          "XX99 Mark II Headphones": "product-xx99-mark-two-headphones",
          "XX59 Headphones": "product-xx59-headphones",
          "YX1 Wireless Earphones": "product-yx1-earphones",
          "ZX7 Speaker": "product-zx7-speaker",
          "ZX9 Speaker": "product-zx9-speaker",
        };
        return (
          slugMap[productName] ||
          productName.toLowerCase().replace(/\s+/g, "-")
        );
      }

      const galleryImages = Object.values(product.gallery);

    return (
        <section className={styles["product-gallery"]}>
            {galleryImages.map((img, index) => (
                <div key={index} className={styles["product-gallery__item"]}>
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={img.desktop} />
                        <source media="(min-width: 768px)" srcSet={img.tablet} />
                        <img className={styles["product-gallery__image"]} src={img.mobile} alt={img.alt}/>
                    </picture>
                </div>
            ))}
        </section>
    )
}