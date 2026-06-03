const CategoryCard = ({
  title,
  image,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="
      cursor-pointer
      rounded-xl
      overflow-hidden
      shadow
      bg-white
      hover:shadow-lg
      transition-all
    "
    >
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;