import { useSelector } from "react-redux";
import { selectOrder } from "../ducks/order.duck";

export const useOrder = () => useSelector(selectOrder)
