import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartArray: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    pushToCart: (state, {payload}) => {
      const {cartArray} = state;
      const  { id, title, price } = payload;
      const itemIdInCart = state.cartArray.findIndex(
        (item) => item.id === id
      );

      if(itemIdInCart === -1){
        cartArray.push({id, title, price, amount: 1})
        state.totalPrice += Number(price);
        state.totalQuantity += 1
      } else {
        cartArray[itemIdInCart].amount += 1;
        state.totalQuantity += 1;
        state.totalPrice += Number(price);
      }
    },

  removeFromCart: (state, {payload}) => {
      let {cartArray} = state;
      const itemIdInCart = state.cartArray.findIndex(
        (item) => item.id === payload.id
      );

      const removePrice = Number(cartArray[itemIdInCart].amount) * Number(cartArray[itemIdInCart].price);

      state.totalPrice -= removePrice;
      state.totalQuantity -= Number(cartArray[itemIdInCart].amount);
      state.cartArray.splice(itemIdInCart, 1)
    },

    changeAmount: (state, {payload}) => {
      const itemIdInCart = state.cartArray.findIndex(
        (item) => item.id === payload.id
      );

      const removePrice = Number(state.cartArray[itemIdInCart].amount) * Number(state.cartArray[itemIdInCart].price);

      state.totalPrice -= removePrice;

      state.cartArray[itemIdInCart].amount = Number(payload.amount);
      state.totalQuantity = Number(payload.amount);

      const addPrice = Number(state.cartArray[itemIdInCart].amount) * Number(state.cartArray[itemIdInCart].price)

      state.totalPrice += addPrice;
    },

    resetCart: (state) => {
      for(let key in state) state[key] = initialState[key]
    }
  },


});


const { reducer, actions } = cartSlice;

export default reducer;

export const { pushToCart, removeFromCart, changeAmount, resetCart } = actions;

export const selectCart = (rootState) => rootState.cart;
