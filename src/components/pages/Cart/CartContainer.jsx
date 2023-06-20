import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const navigate = useNavigate();

  const realizarCompra = () => {
    console.log("se compraron los productos");
    // Navegar
    navigate("/");
  };

  return (
    <div>
      <h1>Carrito</h1>
      <button onClick={realizarCompra}>Comprar</button>
    </div>
  );
};

export default CartContainer;
