import { useParams } from "react-router-dom";
import ProductCategory from "../components/ProductCategory/ProductCategory";
import data from "../../public/data.json";

export default function Product() {
  const { slug } = useParams();

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
    <div className="page-product">
      <h1>Product Page: {slug}</h1>
      <ProductCategory categories={uniqueCategories} />
    </div>
  );
}