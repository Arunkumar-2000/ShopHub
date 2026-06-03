import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ items = [] }) => {
  return (
    <div className="flex items-center flex-wrap gap-2 text-sm text-gray-500 mb-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2"
        >
          {index !== 0 && (
            <ChevronRight size={14} />
          )}

          {item.link ? (
            <Link
              to={item.link}
              className="hover:text-blue-600"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-gray-800">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;