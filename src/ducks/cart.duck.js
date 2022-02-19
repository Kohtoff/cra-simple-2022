import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartArray: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    pushToCart: (state, action) => {
      const {
        payload: { id },
      } = action;
      const itemIdInCart = state.cartArray.findIndex(
        (item) => item.id === action.payload.id
      );

      itemIdInCart === -1
        ? state.cartArray.push({ id, amount: 1 })
        : (state.cartArray[itemIdInCart].amount += 1);
    },

    removeFromCart: (state, action) => {
      state.cartArray = state.cartArray.filter(
        (item) => item.id !== action.payload.id
      );
    },

    changeAmount: (state, action) => {
      const itemIdInCart = state.cartArray.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartArray[itemIdInCart].amount = action.payload.amount;
    },

    resetCart: (state, action) => {
      let { defaultState } = action.payload;
      defaultState = initialState;
      state.cartArray = defaultState.cartArray;
    },
  },
});


const { reducer, actions } = cartSlice;

export default reducer;

export const {
  pushToCart,
  removeFromCart,
  changeAmount,
  resetCart,
} = actions;

export const selectCart = (rootState) => rootState.cart;
