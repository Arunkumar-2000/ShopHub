import ProductGrid from "./ProductGrid";

const RelatedProducts = ({
  currentProduct,
  products,
}) => {
  const related = products
    .filter(
      (item) =>
        item.category ===
          currentProduct.category &&
        item.id !== currentProduct.id
    )
    .slice(0, 4);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">
        Related Products
      </h2>

      <ProductGrid products={related} />
    </section>
  );
};

export default RelatedProducts;