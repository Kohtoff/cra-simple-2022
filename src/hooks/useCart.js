import { useSelector } from "react-redux";
import { selectCart } from "../ducks/cart.duck";

export const useCart = () => useSelector(selectCart)