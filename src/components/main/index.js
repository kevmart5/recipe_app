import React, { Component } from 'react'

class LoginForm extends Component {
  render() {
    return (
      <div>
        <label>Nombre</label>
        <input type="text" name="userName" />
        <label>Contraseña</label>
        <input type="text" password="userPassword" />
      </div>
    )
  };
}

export default LoginForm;
