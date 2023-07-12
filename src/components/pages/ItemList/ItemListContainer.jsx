import { useEffect, useState } from "react";
import ItemListPresentacional from "./ItemListPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router";
import { ScaleLoader } from "react-spinners";

const objetoLoader = {
  display: "block",
  margin: "0 auto",
  border: "2px solid red",
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(items.length);
  
  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 700);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ScaleLoader cssOverride={objetoLoader} color="#36d7b7" />
      </div>
    );
  }

  return (
    <div>
      <ItemListPresentacional items={items} />
    </div>
  );
};

export default ItemListContainer;
