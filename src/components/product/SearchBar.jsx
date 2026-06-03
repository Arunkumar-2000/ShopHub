import { Search } from "lucide-react";
import { useDispatch } from "react-redux";

import { searchProducts } from "../../features/products/productSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="absolute left-3 top-3 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) =>
          dispatch(searchProducts(e.target.value))
        }
        className="
          w-full
          border
          rounded-lg
          pl-10
          pr-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />
    </div>
  );
};

export default SearchBar;