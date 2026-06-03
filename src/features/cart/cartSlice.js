import { createSlice } from "@reduxjs/toolkit";

const getCartFromStorage = () => {
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (cart) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
};

const initialState = {
  items: getCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem =
        state.items.find(
          (item) =>
            item.id === product.id
        );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      saveCartToStorage(state.items);
    },

    removeFromCart: (
      state,
      action
    ) => {
      state.items =
        state.items.filter(
          (item) =>
            item.id !== action.payload
        );

      saveCartToStorage(state.items);
    },

    updateQuantity: (
      state,
      action
    ) => {
      const { id, quantity } =
        action.payload;

      const item =
        state.items.find(
          (item) => item.id === id
        );

      if (item) {
        item.quantity = quantity;
      }

      saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToStorage([]);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;