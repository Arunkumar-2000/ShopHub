import { useSelector } from "react-redux";
import ProductGrid from "../product/ProductGrid";

const TrendingProducts = () => {
  const products = useSelector(
    (state) => state.products.products
  );

  const trending = products.slice(0, 8);

  return (
    <section className="py-16 bg-slate-50 text-stone-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">
          Trending Products
        </h2>

        <ProductGrid products={trending} />
      </div>
    </section>
  );
};

export default TrendingProducts;