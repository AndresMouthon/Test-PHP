import React from "react";
import styles from "../Css/Inicio.module.css";
import imgBienvenido from "../Img/Carrusel_img1.png";
import imgEnlace from "../Img/Carrusel_img2.png";
import imgGestion from "../Img/Carrusel_img3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaUserCheck } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa6";

export function Bienvenida() {
  return (
    <section className={styles.inicio}>
      <article className={styles.contenedor_bienvenida}>
        <main className={styles.bienvenida}>
          <h1>¡Bienvenido!</h1>
        </main>
        <center>
        <main className={styles.contenido}>
            <h2>Gestionar usuarios</h2>
        </main>
        </center><br />
        <main className={styles.contenido_icons}>
        <FaUserCheck className="Icons"/>
        <FaUserPlus className="icons2"/>
        <FaUserEdit className="icons3"/>
        <FaUserMinus className="icons4"/>
        </main>
      </article>
      <div className={styles.img_container}>
        <center>
          <Carousel
            showStatus={false}
            autoPlay={true}
            interval={2000}
            infiniteLoop={true}
            showArrows={false}
          >
            <div className={styles.img}>
              <img src={imgBienvenido} alt="..." />
            </div>
            <div className={styles.img}>
              <img src={imgEnlace} alt="..." />
            </div>
            <div className={styles.img}>
              <img src={imgGestion} alt="..." />
            </div>
          </Carousel>
        </center>
      </div>
    </section>
  );
}
