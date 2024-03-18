import React, { Component } from 'react'
import EditarUsuario from '../Components/EditarUsuario'
import { Menu } from '../Components/Menu'

export default class EditarUsuarioView extends Component {
  render() {
    return (
      <>
      <Menu/>
      <EditarUsuario />
      </>
    )
  }
}
