import chickenNuggetsImg from "../../../assets/products/chicken.svg";
import hamburgerImg from "../../../assets/products/hamburger.svg";
import pizzaSlicesImg from "../../../assets/products/pizza.svg";
import submarineSandwichImg from "../../../assets/products/submarine.svg";
import PlusIconSvg from "../../MySvg/PlusIconSvg";
import Product from "./Product";

export default function ProductContainer() {
  const products = [
    {
      productId: "1",
      productImage: hamburgerImg,
      productTitle: "Hamburger",
      productPrice: 300,
    },
    {
      productId: "2",
      productImage: chickenNuggetsImg,
      productTitle: "Chicken Nuggets",
      productPrice: 300,
    },
    {
      productId: "3",
      productImage: submarineSandwichImg,
      productTitle: "Submarine Sandwich",
      productPrice: 300,
    },
    {
      productId: "4",
      productImage: pizzaSlicesImg,
      productTitle: "Pizza slices",
      productPrice: 300,
    },
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Choose Items</label>
      <div className="items-container">
        {products.map((product) => (
          <Product
            key={product.productId}
            productImage={product.productImage}
            productTitle={product.productTitle}
            productPrice={product.productPrice}
          >
            <PlusIconSvg />
          </Product>
        ))}
      </div>
    </div>
  );
}
