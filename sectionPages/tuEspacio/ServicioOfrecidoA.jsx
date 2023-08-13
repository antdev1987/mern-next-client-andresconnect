import React from 'react';

export const ServicioOfrecidoA = ({ onChecked }) => {
  return (
    <>
      <h2 className="text-secondary mt-3">Cual es tu genero: </h2>

      <ul className="row list-none p-0 mt-3">
        <li className="col-12 col-sm-6">
          <div className="d-flex gap-2 align-items-center">
            <input
              type="checkbox"
              name="parejas"
              id="parejas"
              onChange={onChecked}
            />
            <label htmlFor="parejas">Parejas</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="hombres"
              id="hombres"
              onChange={onChecked}
            />
            <label htmlFor="hombres">Hombres</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="mujeres"
              id="mujeres"
              onChange={onChecked}
            />
            <label htmlFor="mujeres">Mujeres</label>
          </div>
        </li>
        <li className="col-12 col-sm-6">
          <div className="d-flex gap-2 align-items-center mt-3 mt-sm-0">
            <input type="checkbox" name="gay2" id="gay2" onChange={onChecked} />
            <label htmlFor="gay2">Gay</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="trans2"
              id="trans2"
              onChange={onChecked}
            />
            <label htmlFor="trans2">Trans</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="lesbianas"
              id="lesbianas"
              onChange={onChecked}
            />
            <label htmlFor="lesbianas">Lesbianas</label>
          </div>
        </li>
      </ul>

      <h2 className="text-secondary mt-3">
        Los servicios que llevara tu scurt
      </h2>

      <textarea
        rows="10"
        placeholder="Escriba una descripcion"
        className="w-100"
      ></textarea>
    </>
  );
};
