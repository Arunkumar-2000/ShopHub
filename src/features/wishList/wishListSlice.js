import { createSlice } from "@reduxjs/toolkit";

const getWishlistFromStorage =
  () => {
    try {
      const wishlist =
        localStorage.getItem(
          "wishlist"
        );

      return wishlist
        ? JSON.parse(wishlist)
        : [];
    } catch {
      return [];
    }
  };

const saveWishlistToStorage = (
  wishlist
) => {
  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
  );
};

const initialState = {
  items: getWishlistFromStorage(),
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    addToWishlist: (
      state,
      action
    ) => {
      const exists =
        state.items.find(
          (item) =>
            item.id ===
            action.payload.id
        );

      if (!exists) {
        state.items.push(
          action.payload
        );
      }

      saveWishlistToStorage(
        state.items
      );
    },

    removeFromWishlist: (
      state,
      action
    ) => {
      state.items =
        state.items.filter(
          (item) =>
            item.id !== action.payload
        );

      saveWishlistToStorage(
        state.items
      );
    },

    clearWishlist: (state) => {
      state.items = [];

      saveWishlistToStorage([]);
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;