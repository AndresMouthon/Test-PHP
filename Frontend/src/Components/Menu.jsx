import React from "react";
import styles from "../Css/Menu.module.css";
import imgPrincipal from "../Img/FULL STACK.png";
import imgPerfil from "../Img/perfil.png";
import { FaHome } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";

export function Menu() {
  const navegate = useNavigate();
  function goPersona(e) {
    e.preventDefault();
    navegate("/personas");
  }

  return (
    <header className={styles.header}>
      <div className={styles.container_logo}>
        <img className={styles.container_logo} src={imgPrincipal} alt="....." />
      </div>
      <div className={styles.containerPrincipal}>
        <nav className={styles.container_menu}>
          <ul>
            <li>
              <NavLink to="/">
                <FaHome style={{ marginRight: "5px" }} />
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/personas">
                <MdOutlineMiscellaneousServices
                  style={{ marginRight: "5px" }}
                />
                Gestionar Usuarios
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <nav className={styles.user}>
        <div className={styles.img_contenedor}>
          <img src={imgPerfil} alt="" style={{ borderRadius: "50px" }} />
        </div>
        <h2>Andres Mouthon</h2>
      </nav>

      <div className={styles.btn_menu}></div>
    </header>
  );
}
