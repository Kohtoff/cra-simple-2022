import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../ducks/cart.duck'
import orderReducer from '../ducks/order.duck'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        order: orderReducer,
    },
    devTools: true
})
