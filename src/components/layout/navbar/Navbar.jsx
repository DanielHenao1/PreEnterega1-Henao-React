import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dlt3opmth/image/upload/v1687216994/logoipsum-288_2_kbmjwf.svg"
            alt="Descripción de la imagen"
          />
        </Link>
        <ul className={styles.categories}>
          <Link to="/">Inicio</Link>
          <Link to="/category/Baterias-Laptop">Baterias</Link>
          <Link to="/category/Board-Laptop">Boards</Link>
          <Link to="/category/Teclados-Laptop">Teclados</Link>
          <Link to="/category/Pantallas-Laptop">Pantallas</Link>
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={4} color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
