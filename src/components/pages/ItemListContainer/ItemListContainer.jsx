import { Counter } from "../../common/counter/Counter";

export const ItemListContainer = ({ nombre, apellido }) => {
  return (
    <>
      <h3 style={{ color: "blue", fontSize: "20px" }}>
        Hola mi nombre:{" "}
        <i style={{ color: "green", fontSize: "30px" }}>
          {nombre} {apellido}
        </i>
      </h3>
      <Counter />
    </>
  );
};
