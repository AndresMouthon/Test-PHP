import React from "react";
import { Bienvenida } from "../Components/Bienvenida";
import { Menu } from "../Components/Menu";

export function Inicio() {
  return (
    <>
      <Menu />
      <Bienvenida />
    </>
  );
}
