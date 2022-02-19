import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../ducks/cart.duck'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    devTools: true 
})