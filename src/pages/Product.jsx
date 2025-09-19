import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import ProductCategory from "../components/ProductCategory/ProductCategory";
import ProductSpecs from "../components/ProductSpecs/ProductSpecs";
import data from "../../src/data.json";

export default function Product() {
  const { slug } = useParams();
  const product = data.find(item => item.slug === slug);

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

  // Handle bad slugs (404-style fallback)
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="page-product">
      {/* Dynamic product detail */}
      <ProductDetail product={product} />

      <ProductSpecs product={product} />

      {/* Always show categories below */}
      <ProductCategory categories={uniqueCategories} />
    </div>
  );
}