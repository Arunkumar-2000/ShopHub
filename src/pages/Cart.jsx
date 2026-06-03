import { useSelector } from "react-redux";

import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyState from "../components/common/EmptyState";

const Cart = () => {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const subtotal =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );

  const totalItems =
    cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  if (
    !cartItems ||
    cartItems.length === 0
  ) {
    return (
      <EmptyState
        title="Your Cart is Empty"
        description="Looks like you haven't added any products yet."
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <div>
          <CartSummary
            totalItems={
              totalItems
            }
            subtotal={subtotal}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;