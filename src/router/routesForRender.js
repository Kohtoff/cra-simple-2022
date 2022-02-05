import {routesKeys, routesConfig} from './routesConfig'

import GoodsPage from "../pages/GoodsPage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
import DeliveryPage from "../pages/DeliveryPage";
import GoodItemPage from '../pages/GoodItemPage';
import OrderPage from '../pages/OrderPage'
import OrderStepFirst from '../pages/OrderStepFirst';
import OrderStepSecond from '../pages/OrderStepSecond';
import OrderStepThird from '../pages/OrderStepThird';


const renderMap = {
    [routesKeys.catalog]: GoodsPage,
    [routesKeys.about]: AboutPage,
    [routesKeys.cart]: CartPage,
    [routesKeys.delivery]: DeliveryPage,
    [routesKeys.goodItem]: GoodItemPage,
    [routesKeys.orderStepFirst]: OrderStepFirst,
    [routesKeys.orderStepSecond]: OrderStepSecond,
    [routesKeys.orderStepThird]: OrderStepThird,


}

/*solution to avoid cyclic dependency  */
export const routesForRender = routesConfig.map(route => ({
    ...route,
    element: renderMap[route.key]
}))