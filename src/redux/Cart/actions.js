import * as types from "./types";

export const pushToCart = (item) => ({
  type: types.PUSH_TO_CART,
  payload: item,
});

export const removeFromCart = (id) => ({
  type: types.REMOVE_FROM_CART,
  payload: { id },
});

export const changeAmount = (id, amount) => ({
  type: types.CHANGE_AMOUNT,
  payload: { id, amount },
});


export const getTotals = () => ({
  type: types.GET_TOTALS,
});
