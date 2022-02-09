import { combineReducers } from "redux";
import cartReducer from './Cart/reducers'

export const rootReducer = combineReducers({
    cart: cartReducer
})