import { Link } from "react-router-dom";

const MobileMenu = ({
  isOpen,
  setIsOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-slate-900 border-t">
      <div className="flex flex-col p-4 space-y-4">
        <Link
          to="/"
          onClick={() =>
            setIsOpen(false)
          }
        >
          Home
        </Link>

        <Link
          to="/products"
          onClick={() =>
            setIsOpen(false)
          }
        >
          Products
        </Link>

        <Link
          to="/wishlist"
          onClick={() =>
            setIsOpen(false)
          }
        >
          Wishlist
        </Link>

        <Link
          to="/cart"
          onClick={() =>
            setIsOpen(false)
          }
        >
          Cart
        </Link>

        <Link
          to="/profile"
          onClick={() =>
            setIsOpen(false)
          }
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;