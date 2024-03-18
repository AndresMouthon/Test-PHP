import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../Css/Formulario.module.css";
import img from "../Img/Registrar.png";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { MdLastPage } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { Menu } from "./Menu";
import { CiPhone } from "react-icons/ci";

const endpoint = "http://127.0.0.1:8000/api/persona/";

export default function EditarUsuario() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState(0);
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [codigo_postal, setCodigoPostal] = useState("");
  const [pais, setPais] = useState("");
  const [tipo_documento, setTipoDocumento] = useState("");
  const [fecha_expedicion, setFechaExpedicion] = useState("");
  const [fecha_nacimiento, setFechaNacimiento] = useState("");
  const {id} = useParams()

  const navigate = useNavigate();

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${endpoint}${id}`, {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
      ciudad: ciudad,
      codigo_postal: codigo_postal,
      pais: pais,
      tipo_documento: tipo_documento,
      fecha_expedicion: fecha_expedicion,
      fecha_nacimiento: fecha_nacimiento,
    })
    navigate("/personas")
  }
  useEffect( () => {
    const getPersonaById = async () => {
        const response = await axios.get(`${endpoint}${id}`)
        setNombre(response.data.nombre)
        setApellido(response.data.apellido)
        setEdad(response.data.edad)
        setCorreo(response.data.correo)
        setTelefono(response.data.telefono)
        setDireccion(response.data.direccion)
        setCiudad(response.data.ciudad)
        setCodigoPostal(response.data.codigo_postal)
        setPais(response.data.pais)
        setTipoDocumento(response.data.tipo_documento)
        setFechaExpedicion(response.data.fecha_expedicion)
        setFechaNacimiento(response.data.fecha_nacimiento)
    }
    getPersonaById()
  }, [])
  return( 
    <>
    <Menu />
      <center>
        <div className={styles.formulario_contenedor}>
          <form onSubmit={update} className="needs-validation" novalidate>
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
                  <MdDriveFileRenameOutline /> Direccion
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
                    <MdDriveFileRenameOutline /> Postal
                  </span>
                  <input
                    value={codigo_postal}
                    onChange={(e) => setCodigoPostal(e.target.value)}
                    type="text"
                    placeholder="Codigo Postal..."
                    required
                  />
                </div>
                <div className={styles.estructura2}>
                  <span>
                    <MdDriveFileRenameOutline /> Ciudad
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
                    <MdDriveFileRenameOutline /> Pais
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
                    <MdDriveFileRenameOutline /> T. Documento
                  </span>
                  <input
                    value={tipo_documento}
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
                    value={fecha_expedicion}
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
                    value={fecha_nacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                    type="date"
                    required
                  />
                </div>
            </main><br />
            <div className={styles.contenedor_btn}>
              <button className={styles.button} onClick={update}>
              <FaUserPlus className={styles.icons}/>
                Actualizar usuario
              </button>
            </div>
          </form>
        </div>
      </center>
    </>
  )
}
