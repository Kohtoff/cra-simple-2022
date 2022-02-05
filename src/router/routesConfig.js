export const routesKeys = {
  catalog: "catalog",
  cart: "cart",
  about: "about",
  delivery: "delivery",
  goodItem: "goodItem",
  orderStepFirst: "orderStepFirst",
  orderStepSecond: "orderStepSecond",
  orderStepThird: "orderStepThird",


};

export const routesConfig = [
  {
    key: "catalog",
    path: "/catalog",
    title: "Catalog",
    isNavLink: true,
  },
  {
    key: "cart",
    path: "/cart",
    title: "Cart",
    isNavLink: true,
  },
  {
    key: "about",
    path: "/about",
    title: "About Us",
    isNavLink: true,
  },
  {
    key: "delivery",
    path: "/delivery",
    title: "Delivery",
    isNavLink: true,
  },
  { 
    key: "goodItem",
    path: "/product/:id",
    title: "" 
  },
  {
    key: "orderStepFirst", 
    path: "/cart/order/1", 
    title: "" 
  },
  {
    key: "orderStepSecond", 
    path: "/cart/order/2", 
    title: "" 
  },
  {
    key: "orderStepThird", 
    path: "/cart/order/3", 
    title: "" 
  },
];
