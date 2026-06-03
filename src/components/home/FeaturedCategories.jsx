import CategoryCard from "../product/CategoryCard";

const categories = [
  {
    title: "Electronics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    title: "Fashion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  },
  {
    title: "Furniture",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-stone-950">
        <h2 className="text-3xl font-bold mb-10 text-white">
          Featured Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;