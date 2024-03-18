import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../Css/Formulario.module.css";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { MdLastPage } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import img from "../Img/Registrar.png";
import { CiPhone } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaCity } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { HiMiniIdentification } from "react-icons/hi2";

const endpoint = "http://127.0.0.1:8000/api/persona";

export default function FormularioCrear() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState(0);
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [pais, setPais] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [fechaExpedicion, setFechaExpedicion] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
      ciudad: ciudad,
      codigo_postal: codigoPostal,
      pais: pais,
      tipo_documento: tipoDocumento,
      fecha_expedicion: fechaExpedicion,
      fecha_nacimiento: fechaNacimiento,
    });
    navigate("/personas");
  };

  return (
    <>
      <center>
        <div className={styles.formulario_contenedor}>
          <form onSubmit={store} className="needs-validation" novalidate>
            <div className={styles.encabezado}>
              <main className={styles.contenedorTitulo}>
                <h1>
                  Registrar un usuario
                </h1>
              </main>
              <div className={styles.contenedorImg}>
              <img className={styles.container_logo} src={img} alt="....." />
              </div>
            </div>
            <main className={styles.nombres}>
              <div className={styles.nombre}>
                <span>
                  <MdDriveFileRenameOutline /> Nombres
                </span>
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  type="text"
                  placeholder="Nombres..."
                  required
                />
              </div>
              <div className={styles.apellido}>
                <span>
                  <MdDriveFileRenameOutline /> Apellidos
                </span>
                <input
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  type="text"
                  placeholder="Apellidos..."
                  required
                />
              </div>
            </main>
            <main className={styles.datos2}>
              <div className={styles.edad}>
                <span>
                <MdLastPage /> Edad
                </span>
                <input
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                  type="number"
                  placeholder="Edad..."
                  required
                /> 
              </div>
              <div className={styles.correo}>
                <span>
                  <CiMail /> Correo
                </span>
                <input
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  type="text"
                  placeholder="Correo..."
                  required
                />
              </div>
            </main>
            <main className={styles.nombres}>
              <div className={styles.nombre}>
                <span>
                <CiPhone /> Telefono
                </span>
                <input
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  type="number"
                  placeholder="Telefono..."
                  required
                />
              </div>
              <div className={styles.apellido}>
                <span>
                <IoLocationOutline /> Direccion
                </span>
                <input
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  type="text"
                  placeholder="Direccion..."
                  required
                />
              </div>
            </main>
            <main className={styles.datos3}>
              <div className={styles.estructura1}>
                  <span>
                  <CiLocationArrow1 /> Postal
                  </span>
                  <input
                    value={codigoPostal}
                    onChange={(e) => setCodigoPostal(e.target.value)}
                    type="text"
                    placeholder="Codigo Postal..."
                    required
                  />
                </div>
                <div className={styles.estructura2}>
                  <span>
                  <FaCity /> Ciudad
                  </span>
                  <input
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    type="text"
                    placeholder="Ciudad..."
                    required
                  />
                </div>
                <div className={styles.estructura3}>
                  <span>
                  <MdAccountBalance /> Pais
                  </span>
                  <input
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                    type="text"
                    placeholder="Pais..."
                    required
                  />
                </div>
            </main>
            <main className={styles.datos4}>
              <div className={styles.estructura1}>
                  <span>
                  <HiMiniIdentification /> T. Documento
                  </span>
                  <input
                    value={tipoDocumento}
                    onChange={(e) => setTipoDocumento(e.target.value)}
                    type="text"
                    placeholder="C.C"
                    required
                  />
                </div>
                <div className={styles.estructura2}>
                  <span>
                    Expedicion
                  </span>
                  <input
                    value={fechaExpedicion}
                    onChange={(e) => setFechaExpedicion(e.target.value)}
                    type="date"
                    required
                  />
                </div>
                <div className={styles.estructura3}>
                  <span>
                    <MdDriveFileRenameOutline /> Nacimiento
                  </span>
                  <input
                    value={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                    type="date"
                    required
                  />
                </div>
            </main><br />
            <div className={styles.contenedor_btn}>
              <button className={styles.button} onClick={store}>
              <FaUserPlus className={styles.icons}/>
                Registrar usuario
              </button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
}
