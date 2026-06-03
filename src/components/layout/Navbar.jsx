import {Heart,Menu,ShoppingCart,User,X} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import DarkModeToggle from "./DarkModeToggle";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  const cartItems =
    useSelector(
      (state) => state.cart.items
    );

  const wishlistItems =
    useSelector(
      (state) =>
        state.wishlist.items
    );

  const isAuthenticated =
    useSelector(
      (state) =>
        state.user.isAuthenticated
    );

  const cartCount =
    cartItems.reduce(
      (acc, item) =>
        acc + item.quantity,
      0
    );

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600"
            >
              ShopHub💙
            </Link>

            <nav className="hidden md:flex gap-8  text-white text-lg">
              <Link to="/">
                Home
              </Link>

              <Link to="/products">
                Products
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              {/* <DarkModeToggle /> */}

              <Link
                to="/wishlist"
                className="relative"
              >
                <Heart size={22} />

                {wishlistItems.length >
                  0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center">
                    {
                      wishlistItems.length
                    }
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                className="relative"
              >
                <ShoppingCart
                  size={22}
                />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link to="/profile">
                <User size={22} />
              </Link>

              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Login
                </Link>
              )}

              <button
                className="md:hidden"
                onClick={() =>
                  setIsOpen(
                    !isOpen
                  )
                }
              >
                {isOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </header>
    </>
  );
};

export default Navbar;