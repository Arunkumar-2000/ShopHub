import { Star } from "lucide-react";

const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={
            star <= Math.round(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }
        />
      ))}

      <span className="text-sm text-gray-500 ml-1">
        ({rating})
      </span>
    </div>
  );
};

export default RatingStars;