export const routesKeys = {
  catalog: "catalog",
  cart: "cart",
  about: "about",
  delivery: "delivery",
  goodItem: "goodItem",
  order: "order",
};

export const routesConfig = [
  {
    key: "Catalog",
    path: "/catalog",
    title: "Catalog",
    isNavLink: true,
  },
  {
    key: "Cart",
    path: "/cart",
    title: "Cart",
    isNavLink: true,
  },
  {
    key: "About",
    path: "/about",
    title: "About Us",
    isNavLink: true,
  },
  {
    key: "Delivery",
    path: "/delivery",
    title: "Delivery",
    isNavLink: true,
  },
  { 
    key: "GoodItem",
    path: "/product/:id",
    title: "" 
  },
  { 
    key: "Order", 
    path: "/cart/order", 
    title: "" 
  },
];
