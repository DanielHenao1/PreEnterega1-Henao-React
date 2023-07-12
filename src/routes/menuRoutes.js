import CartContainer from "../components/pages/Cart/CartContainer";
import Form from "../components/pages/Form/Form";
import ItemListContainer from "../components/pages/ItemList/ItemListContainer";

import FormFormik from "../components/pages/formFormik/FormFormik";
import ItemDetailContainer from "../components/pages/itemListDetail/ItemDetailContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "form",
    path: "/form",
    Element: Form,
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormFormik,
  },
];
