import { useDispatch } from "react-redux";

import {
  filterByCategory,
  sortProducts,
} from "../../features/products/productSlice";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Shoes",
  "Furniture",
  "Accessories",
];

const FilterSidebar = () => {
  const dispatch = useDispatch();

  return (
    <aside className="bg-white p-5 rounded-xl shadow text-stone-950">
      <h3 className="font-bold text-lg mb-4">
        Filters
      </h3>

      <div>
        <h4 className="font-medium mb-2">
          Categories
        </h4>

        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                dispatch(
                  filterByCategory(category)
                )
              }
              className="
                block
                w-full
                text-left
                px-3
                py-2
                rounded
                hover:bg-slate-100
              "
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-medium mb-2">
          Sort By
        </h4>

        <select
          onChange={(e) =>
            dispatch(
              sortProducts(e.target.value)
            )
          }
          className="
            w-full
            border
            rounded-lg
            p-2
          "
        >
          <option value="">
            Select
          </option>

          <option value="low-high">
            Price: Low to High
          </option>

          <option value="high-low">
            Price: High to Low
          </option>

          <option value="rating">
            Rating
          </option>
        </select>
      </div>
    </aside>
  );
};

export default FilterSidebar;