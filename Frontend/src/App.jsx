import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./Views/Inicio";
import PersonasViews from "./Views/PersonasViews";
import CrearUsuario from "./Views/CrearUsuario";
import EditarUsuario from "./Components/EditarUsuario";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/personas" element={<PersonasViews />} />
          <Route path="/crearUsuario" element={<CrearUsuario />} />
          <Route path="/edit/:id" element={<EditarUsuario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
