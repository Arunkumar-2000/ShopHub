import { useSelector } from "react-redux";

import EmptyState from "../components/common/EmptyState";
import WishlistItem from "../components/wishlist/WishlistItem";

const Wishlist = () => {
  const wishlistItems =
    useSelector(
      (state) =>
        state.wishlist.items
    );

  if (
    !wishlistItems ||
    wishlistItems.length === 0
  ) {
    return (
      <EmptyState
        title="Wishlist is Empty"
        description="Save your favorite products here."
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        My Wishlist
      </h1>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
        "
      >
        {wishlistItems.map(
          (product) => (
            <WishlistItem
              key={product.id}
              product={product}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Wishlist;