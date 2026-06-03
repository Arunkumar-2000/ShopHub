import { createSlice } from "@reduxjs/toolkit";

import productsData from "../../data/products";

const initialState = {
  products: productsData,
  filteredProducts:
    productsData,

  selectedCategory: "All",
  searchTerm: "",
  sortBy: "",
};

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    searchProducts: (
      state,
      action
    ) => {
      state.searchTerm =
        action.payload;

      state.filteredProducts =
        state.products.filter(
          (product) =>
            product.title
              .toLowerCase()
              .includes(
                action.payload.toLowerCase()
              )
        );
    },

    filterByCategory: (
      state,
      action
    ) => {
      state.selectedCategory =
        action.payload;

      if (
        action.payload === "All"
      ) {
        state.filteredProducts =
          state.products;
      } else {
        state.filteredProducts =
          state.products.filter(
            (product) =>
              product.category ===
              action.payload
          );
      }
    },

    sortProducts: (
      state,
      action
    ) => {
      state.sortBy =
        action.payload;

      const products = [
        ...state.filteredProducts,
      ];

      switch (
        action.payload
      ) {
        case "low-high":
          products.sort(
            (a, b) =>
              a.price -
              b.price
          );
          break;

        case "high-low":
          products.sort(
            (a, b) =>
              b.price -
              a.price
          );
          break;

        case "rating":
          products.sort(
            (a, b) =>
              b.rating -
              a.rating
          );
          break;

        default:
          break;
      }

      state.filteredProducts =
        products;
    },

    setProducts: (
      state,
      action
    ) => {
      state.products =
        action.payload;

      state.filteredProducts =
        action.payload;
    },

    addProduct: (
      state,
      action
    ) => {
      state.products.push(
        action.payload
      );

      state.filteredProducts =
        state.products;
    },
  },
});

export const {
  searchProducts,
  filterByCategory,
  sortProducts,
  setProducts,
  addProduct,
} = productSlice.actions;

export default productSlice.reducer;