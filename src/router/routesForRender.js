import {routesKeys, routesConfig} from './routesConfig'

import GoodsPage from "../pages/GoodsPage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
import DeliveryPage from "../pages/DeliveryPage";
import GoodItemPage from '../pages/GoodItemPage';
import OrderPage from '../pages/OrderPage';



const renderMap = {
    [routesKeys.catalog]: GoodsPage,
    [routesKeys.about]: AboutPage,
    [routesKeys.cart]: CartPage,
    [routesKeys.delivery]: DeliveryPage,
    [routesKeys.goodItem]: GoodItemPage,
    [routesKeys.order]: OrderPage,
}

/*solution to avoid cyclic dependency  */
export const routesForRender = routesConfig.map(route => ({
    ...route,
    element: renderMap[route.key]
}))
