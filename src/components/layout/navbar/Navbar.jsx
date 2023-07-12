import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";
import { menuNavigate } from "../../../routes/menuNavigate";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

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
          {menuNavigate.map(({ id, path, title }) => (
            <Link key={id} to={path}>
              {title}
            </Link>
          ))}
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={totalItems} showZero color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
