import { Heart, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";

import Button from "../ui/Button";

import {
  addToCart,
} from "../../features/cart/cartSlice";

import {
  removeFromWishlist,
} from "../../features/wishList/wishListSlice";

const WishlistItem = ({
  product,
}) => {
  const dispatch = useDispatch();

  const moveToCart = () => {
    dispatch(addToCart(product));
    dispatch(
      removeFromWishlist(
        product.id
      )
    );
  };

  return (
    <div className="bg-white rounded-xl text-white shadow overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {product.title}
        </h3>

        <p className="text-gray-500 mt-2">
          {product.description}
        </p>

        <h4 className="text-xl font-bold text-blue-600 mt-4">
          ₹{product.price}
        </h4>

        <div className="flex gap-3 mt-5">
          <Button
            onClick={moveToCart}
          >
            <ShoppingCart
              size={18}
            />
            Move To Cart
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              dispatch(
                removeFromWishlist(
                  product.id
                )
              )
            }
          >
            <Heart size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;