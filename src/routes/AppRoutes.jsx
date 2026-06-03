import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/common/Loader";
import ProtectedRoute from "../components/layout/ProtectedRoute";

/*
|--------------------------------------------------------------------------
| Lazy Loaded Pages
|--------------------------------------------------------------------------
*/

const Home = lazy(() =>
  import("../pages/Home")
);

const Products = lazy(() =>
  import("../pages/Products")
);

const ProductDetails = lazy(() =>
  import("../pages/ProductDetails")
);

const Cart = lazy(() =>
  import("../pages/Cart")
);

const Wishlist = lazy(() =>
  import("../pages/Wishlist")
);

const Login = lazy(() =>
  import("../pages/Login")
);

const Register = lazy(() =>
  import("../pages/Register")
);

const ForgotPassword = lazy(() =>
  import("../pages/ForgetPassword")
);

const Profile = lazy(() =>
  import("../pages/Profile")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:id"
          element={
            <ProductDetails />
          }
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={
            <ForgotPassword />
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <div className="container mx-auto py-20 text-center">
              <h1 className="text-4xl font-bold">
                404
              </h1>

              <p className="mt-3 text-gray-500">
                Page Not Found
              </p>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;