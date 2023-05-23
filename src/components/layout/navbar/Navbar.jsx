import { CartWidget } from "../../common/cartwidget/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <h4>Imagen</h4>
      <ul>
        <li>ALL IN ONE</li>
        <li>PORTATILES</li>
        <li>BATERIAS</li>
        <li>CARGADORES</li>
        <li>TECLADOS</li>
        <li>PANTALLAS</li>
        <li>BOARD</li>
        <li>DISCOS DUROS</li>
        <li>MEMORIAS RAM</li>
        <li>SERVICIO TECNICO</li>
      </ul>
      <CartWidget />
    </div>
  );
};
