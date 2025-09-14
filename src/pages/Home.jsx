import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-home">
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/headphones">Headphones</Link> |{" "}
          </li>
          <li>
            <Link to="/speakers">Speakers</Link> |{" "}
          </li>
          <li>
            <Link to="/earphones">Earphones</Link> |{" "}
          </li>
          <li>
            <Link to="/checkout">Checkout</Link> |{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}