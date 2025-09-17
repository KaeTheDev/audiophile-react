import Hero from "../components/Hero/Hero";
import ProductCategory from "../components/ProductCategory/ProductCategory";
import data from "../../public/data.json";
import FeaturedProduct from "../components/FeaturedProduct/FeaturedProduct";

export default function Home() {
  // Categories for ProductCategory
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

  return (
    <div className="page-home">
      <Hero />
      <ProductCategory categories={uniqueCategories} />
      <FeaturedProduct />
    </div>
  );
}
