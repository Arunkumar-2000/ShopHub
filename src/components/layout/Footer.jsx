import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold">
              ShopHub
            </h2>

            <p className="text-gray-400 mt-3">
              Modern e-commerce
              platform built with
              React & Redux Toolkit.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <div className="space-y-2">
              <Link
                to="/"
                className="block"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="block"
              >
                Products
              </Link>

              <Link
                to="/cart"
                className="block"
              >
                Cart
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Categories
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>Electronics</p>
              <p>Fashion</p>
              <p>Shoes</p>
              <p>Furniture</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>support@shophub.com</p>
              <p>+91 9600903054</p>
              <p>Tirupur, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
          © {new Date().getFullYear()} ShopHub.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;