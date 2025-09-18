import ProductCategory from "../components/ProductCategory/ProductCategory";
import CategoryHero from "../components/CategoryHero/CategoryHero";
import ProductCard from "../components/ProductCard/ProductCard";
import data from "../../public/data.json";

export default function Category({ category }) {
  // Capitalize first letter for display
  const displayName = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : undefined;

  const uniqueCategories = [
    {
      name: "Headphones",
      link: "headphones",
      image: data.find(item => item.slug === "xx99-mark-one-headphones").categoryImage
    },
    {
      name: "Speakers",
      link: "speakers",
      image: data.find(item => item.slug === "zx9-speaker").categoryImage
    },
    {
      name: "Earphones",
      link: "earphones",
      image: data.find(item => item.slug === "yx1-earphones").categoryImage
    }
  ];

  // Filter products for this category
  const categoryProducts = data.filter(
    (product) => product.category.toLowerCase() === category
  );

  return (
    <div className="page-category">
       <CategoryHero categoryName={displayName} />
            {/* Render all products for this category */}
            {categoryProducts.map((product, index) => (
        <ProductCard key={product.slug} product={product} index={index} />
      ))}
      <ProductCategory categories={uniqueCategories} />
    </div>
  );
}