import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";

import RatingStars from "./RatingStars";
import Toast from "../ui/Toast";

import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "../../features/wishList/wishListSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToCart(product));
    Toast.success(`${product.title} added to cart`);
    navigate("/cart");
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToWishlist(product));
    Toast.success(`${product.title} added to wishlist`);
    navigate("/wishlist");
  };

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

        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mt-2 hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
        </Link>

        <p className="text-gray-500 text-sm mt-1">
          {product.description}
        </p>

        <div className="mt-3">
          <RatingStars rating={product.rating} />
        </div>

        <div className="flex justify-between items-center mt-4">
          <h4 className="text-xl font-bold">₹{product.price}</h4>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleAddToWishlist}
              aria-label="Add to wishlist"
              className="p-2 rounded-lg border hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <Heart size={18} />
            </button>

            <button
              type="button"
              onClick={handleAddToCart}
              aria-label="Add to cart"
              className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
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
