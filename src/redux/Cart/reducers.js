import * as types from "./types";

const { PUSH_TO_CART, REMOVE_FROM_CART, CHANGE_AMOUNT, GET_CURRENT_ITEM, GET_TOTALS } =
  types;

const INITIAL_STATE = {
  productsArray: [],
  cartArray: [],
  currentItem: null,
  totals: null
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case PUSH_TO_CART:
     console.log('!!!! ',action)
      const targetItem = state.productsArray.find(
        (item) => item.id === action.payload.id
      );
      console.log(targetItem);
      const isInCart =
        state.cartArray.findIndex((item) => item.id === action.payload.id) === -1
          ? false
          : true;
        console.log(isInCart)
      return {
        ...state,
        cartArray: isInCart

          ? state.cartArray.map((item) =>
              item.id === action.payload.id
                ? { ...item, amount: item.amount + 1 }
                : item
            )

          : [...state.cartArray, { ...action.payload, amount: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartArray: state.cartArray.filter((item) => item.id !== action.payload.id),
      };

    case CHANGE_AMOUNT:
      return {
        ...state,
        cartArray: state.cartArray.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: action.payload.amount }
            : item
        ),
      };

    // case GET_TOTALS:
    //   return {
    //     ...state,
    //     totals: state.cartArray.reduce((prev, curr) => prev += curr.price * curr.amount)
    //   }

    

    default:
      return state;
  }
};

export default cartReducer;
