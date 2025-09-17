import ProductCategory from "../components/ProductCategory/ProductCategory";
import data from "../../public/data.json";

export default function Category({ category }) {
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
    <div className="page-category">
      <h1>{category} Category</h1>
      <ProductCategory categories={uniqueCategories} />
    </div>
  );
}