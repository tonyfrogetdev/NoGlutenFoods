import { useParams } from "react-router-dom";
import foods from "../foods";

const ProductPage = () => {
  const { productId } = useParams();
  const product = foods.find((food) => food.id === parseInt(productId));

  return (
    <div className="max-w-[1600px] mx-auto py-8 px-4">
      <h2>{product.productName}</h2>
      <img src={product.productImage} alt={product.productName} />
      <p>Le prix : {product.price}</p>
    </div>
  );
};

export default ProductPage;
