import { PackageSearch } from "lucide-react";

const EmptyState = ({
  title = "No Data Found",
  description = "Nothing to display right now.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <PackageSearch
        size={70}
        className="text-gray-400"
      />

      <h2 className="mt-4 text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;