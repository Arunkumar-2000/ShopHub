import { Heart, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";

import Button from "../ui/Button";

import {
  addToCart,
} from "../../features/cart/cartSlice";

import {
  addToWishlist,
} from "../../features/wishList/wishListSlice";

const ProductInfo = ({
  product,
  quantity,
}) => {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    for (
      let i = 0;
      i < quantity;
      i++
    ) {
      dispatch(addToCart(product));
    }
  };

  return (
    <div>
      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
        {product.category}
      </span>

      <h1 className="text-4xl font-bold mt-4">
        {product.title}
      </h1>

      <p className="mt-4 text-gray-600">
        {product.description}
      </p>

      <div className="mt-6">
        <h2 className="text-3xl font-bold text-blue-600">
          ₹{product.price}
        </h2>
      </div>

      <div className="mt-4">
        <p>
          Rating:
          <span className="font-medium ml-2">
            {product.rating}
          </span>
        </p>
      </div>

      <div className="mt-4">
        <p>
          Stock:
          <span className="font-medium ml-2">
            {product.stock}
          </span>
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        <Button
          onClick={addProductToCart}
        >
          <ShoppingCart size={18} />
          Add To Cart
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            dispatch(
              addToWishlist(product)
            )
          }
        >
          <Heart size={18} />
          Wishlist
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;