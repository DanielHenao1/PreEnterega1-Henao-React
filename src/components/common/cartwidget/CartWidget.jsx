import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
  const cantidadItems = 5;

  return (
    <div>
      <FaShoppingCart color="blue" size="60px" />
      <span style={{ fontSize: "30px", fontWeight: "bold", color: "red" }}>
        {cantidadItems}
      </span>
    </div>
  );
};
