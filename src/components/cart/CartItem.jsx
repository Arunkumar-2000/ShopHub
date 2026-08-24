import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  updateQuantity,
} from "../../features/cart/cartSlice";
import Toast from "../ui/Toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (value) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: Number(value),
      })
    );
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    Toast.success(`${item.title} removed from cart`);
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row text-gray-800 gap-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-32 h-32 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.title}</h3>

        <p className="text-gray-500 mt-1">
          {item.category}
        </p>

        <p className="text-blue-600 font-bold text-xl mt-3">
          ₹{item.price}
        </p>
      </div>

      <div className="flex flex-col justify-between gap-3">
        <select
          value={item.quantity}
          onChange={(e) =>
            handleQuantityChange(e.target.value)
          }
          className="border rounded-lg p-2"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
            (qty) => (
              <option key={qty} value={qty}>
                {qty}
              </option>
            )
          )}
        </select>

        <button
          type="button"
          onClick={handleRemove}
          className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors"
        >
          <Trash2 size={18} />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;