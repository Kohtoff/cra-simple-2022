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
    key: "order", 
    path: "/cart/order", 
    title: "" 
  },
];
