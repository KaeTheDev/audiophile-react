import { useParams } from "react-router-dom";

export default function Product() {
    const { slug } = useParams();

    return (
        <div className="page-product">
            <h1>Product Page: {slug}</h1>
        </div>
    );
}