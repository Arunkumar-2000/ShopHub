import { memo } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";

import RatingStars from "./RatingStars";

import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "../../features/wishList/wishListSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-60 w-full object-cover"
        />
      </Link>

      <div className="p-4">
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
          {product.category}
        </span>

        <h3 className="font-semibold text-lg mt-2">
          {product.title}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {product.description}
        </p>

        <div className="mt-3">
          <RatingStars rating={product.rating} />
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <h4 className="text-xl font-bold">
              ₹{product.price}
            </h4>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() =>
                dispatch(addToWishlist(product))
              }
              className="p-2 rounded-lg border hover:bg-red-50"
            >
              <Heart size={18} />
            </button>

            <button
              onClick={() =>
                dispatch(addToCart(product))
              }
              className="p-2 rounded-lg bg-blue-600 text-white"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);