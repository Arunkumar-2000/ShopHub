import Button from "../ui/Button";
import Toast from "../ui/Toast";
import { useNavigate } from "react-router-dom";

const CartSummary = ({ totalItems, subtotal }) => {
  const shipping = subtotal > 5000 ? 0 : 199;

  const total = subtotal + shipping;
  const navigate = useNavigate();
const handleCheckout = () => {
  Toast.success("Proceeding to checkout...");

  // setTimeout(() => {navigate("/checkout")}, 1000);
};


  return (
    <div className="bg-white rounded-xl text-gray-800 shadow p-6">
      <h2 className="text-xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? "Free" : `₹${shipping}`}
          </span>
        </div>

        <hr />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <Button
        type="button"
        onClick={handleCheckout}
        className="w-full mt-6"
      >
        Proceed To Checkout
      </Button>
    </div>
  );
};

export default CartSummary;