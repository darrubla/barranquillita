import React, { Component } from 'react';
import { test } from '../backend/procedures';
//import { withRouter } from 'react-router-dom';

class Produccion extends Component {
    render() {
      return (
        <div className="produccion">
          <h1>Producción</h1>
          <p>Selecciona el area de trabajo del empleado</p>
          <select name="idarea">
            <option value="2">Lavado</option>
            <option value="3">Aglutinado</option> 
            <option value="4">Peletizado</option>
            <option value="5">Extrusión</option>
            <option value="6">Sellado</option>
          </select>
          <p>Selecciona el empleado</p>
          <select name="iduser">
            <option value="2">Lavado</option>
            <option value="3">Aglutinado</option> 
            <option value="4">Peletizado</option>
            <option value="5">Extrusión</option>
            <option value="6">Sellado</option>
          </select>
          <button onClick={test()}>Click</button>
        </div>
      );
    }
}

//export default withRouter(Produccion);
export default Produccion