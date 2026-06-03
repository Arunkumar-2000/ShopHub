import RatingStars from "./RatingStars";

const reviews = [
  {
    id: 1,
    name: "Rahul",
    rating: 5,
    comment:
      "Excellent quality product. Highly recommended.",
  },
  {
    id: 2,
    name: "Priya",
    rating: 4,
    comment:
      "Good value for money. Delivery was quick.",
  },
  {
    id: 3,
    name: "Arjun",
    rating: 5,
    comment:
      "Amazing experience. Will buy again.",
  },
];

const ProductReviews = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">
        Customer Reviews
      </h2>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h4 className="font-semibold">
              {review.name}
            </h4>

            <div className="mt-2">
              <RatingStars
                rating={review.rating}
              />
            </div>

            <p className="mt-3 text-gray-600">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;