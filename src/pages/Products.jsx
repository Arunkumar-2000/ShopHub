import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/product/SearchBar";
import FilterSidebar from "../components/product/FilterSidebar";
import ProductGrid from "../components/product/ProductGrid";
import Pagination from "../components/common/Pagination";

const Products = () => {
  const products = useSelector(
    (state) =>
      state.products.filteredProducts
  );

  const [currentPage, setCurrentPage] =
    useState(1);

  const productsPerPage = 8;

  const lastIndex =
    currentPage * productsPerPage;

  const firstIndex =
    lastIndex - productsPerPage;

  const currentProducts =
    products.slice(
      firstIndex,
      lastIndex
    );

  const totalPages = Math.ceil(
    products.length / productsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Products
      </h1>

      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div>
          <FilterSidebar />
        </div>

        <div className="lg:col-span-3">
          <ProductGrid
            products={currentProducts}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={
              setCurrentPage
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Products;