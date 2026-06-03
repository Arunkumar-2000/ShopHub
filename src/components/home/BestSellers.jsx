import { useSelector } from "react-redux";
import ProductGrid from "../product/ProductGrid";

const BestSellers = () => {
  const products = useSelector(
    (state) => state.products.products
  );

  const bestSellers = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">
          Best Sellers
        </h2>

        <ProductGrid products={bestSellers} />
      </div>
    </section>
  );
};

export default BestSellers;