import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, CategoryView, ItemDetailView, CartView} from "../pages";

const Navigation = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/category/:idCategory",
      element: <CategoryView />,
    },
    {
      path: "/item/:idItem",
      element: <ItemDetailView/>,
    },
    {
      path: "/cart",
      element: <CartView/>
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Navigation;
