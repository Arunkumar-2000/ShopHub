import { createSlice } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
  try {
    const user =
      localStorage.getItem("user");

    return user
      ? JSON.parse(user)
      : null;
  } catch {
    return null;
  }
};

const saveUserToStorage = (
  user
) => {
  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
};

const removeUserFromStorage =
  () => {
    localStorage.removeItem(
      "user"
    );
  };

const initialState = {
  user: getUserFromStorage(),
  isAuthenticated:
    !!getUserFromStorage(),
};

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    login: (state, action) => {
      state.user =
        action.payload;

      state.isAuthenticated =
        true;

      saveUserToStorage(
        action.payload
      );
    },

    logout: (state) => {
      state.user = null;

      state.isAuthenticated =
        false;

      removeUserFromStorage();
    },

    updateProfile: (
      state,
      action
    ) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };

      saveUserToStorage(
        state.user
      );
    },
  },
});

export const {
  login,
  logout,
  updateProfile,
} = userSlice.actions;

export default userSlice.reducer;