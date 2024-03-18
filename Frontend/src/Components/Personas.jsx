import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Tabla.css";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa6";

const endpoint = "http://127.0.0.1:8000/api";
const Personas = () => {
  const [personas, setPersonas] = useState([]);
  useEffect(() => {
    getAllPersonas();
  }, []);
  const getAllPersonas = async () => {
    const response = await axios.get(`${endpoint}/personas`);
    setPersonas(response.data);
  };
  const deletePersonas = async (id) => {
    await axios.delete(`${endpoint}/persona/${id}`);
    getAllPersonas();
  };
  return (
    <div className="personas_contenedor">
      <div className="d-grid gep-2">
        <Link
          to="/crearUsuario"
          className="btn btn-success btn-lg mt-2 mb-2 text-black"
        >
          + Crear Persona
        </Link>
      </div>
      <table className="tabla">
        <thead className="encabezado">
          <tr>
            <th>Personas registradas</th>
          </tr>
        </thead>
        <tbody className="contenido">
          {personas.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.nombre} {persona.apellido}</td>
              <td>{persona.edad}</td>|
              <td>{persona.correo}</td>|
              <td>{persona.telefono}</td>| 
              <td>{persona.direccion}</td>|
              <td>{persona.ciudad}</td>|
              <td>{persona.fecha_nacimiento}</td>|
              <td>
                <Link to={`/edit/${persona.id}`} className="btn btn-warning">
                  <FaUserEdit className="icons3" />
                  Edit
                </Link>
                <button
                  onClick={() => deletePersonas(persona.id)}
                  className="btn btn-danger"
                >
                  <FaUserMinus className="icons4" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Personas;
