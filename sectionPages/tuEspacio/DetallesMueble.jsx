import React from 'react';
import { Form } from 'react-bootstrap';

export const DetallesMueble = ({onChangeInputValue}) => {
  return (
    <>
      <h2 className="text-secondary mt-3">Detalles del mueble</h2>

      <ul className="row p-0 list-none mt-3">
        <li className="col-12">
          <label htmlFor="cantidadHabitaciones">Cantidad de habitaciones</label>
          <Form.Control
            className="mt-2"
            type="number"
            id="cantidadHabitaciones"
            name="cantidadHabitaciones"
            onChange={onChangeInputValue}
          />
        </li>

        <li className="col-12 mt-3">
          <label htmlFor="cantidadParqueo">Cantidad de Parqueos</label>
          <Form.Control
            className="mt-2"
            type="number"
            id="cantidadParqueo"
            name="cantidadParqueo"
            onChange={onChangeInputValue}
          />
        </li>

        <li className="col-12 mt-3">
          <label htmlFor="cantidadBathrooms">Cantidad de Baños</label>
          <Form.Control
            className="mt-2"
            type="number"
            id="cantidadBathrooms"
            name="cantidadBathrooms"
            onChange={onChangeInputValue}
          />
        </li>

        <li className="col-12 mt-3">
          <label htmlFor="TipoCama">Tipo de Cama</label>
          <Form.Control
            className="mt-2"
            type="text"
            id="TipoCama"
            name="TipoCama"
            onChange={onChangeInputValue}
          />
        </li>
      </ul>
    </>
  );
};
