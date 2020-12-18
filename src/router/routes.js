import ProductsPage from "../views/products";
import ProductPage from "../views/product";

const routes = [
  {
    path: "/products",
    component: ProductsPage,
  },
  {
    path: "/product/:id",
    component: ProductPage,
  },
];

export default routes;
