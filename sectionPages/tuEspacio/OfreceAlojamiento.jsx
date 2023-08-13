import React from 'react';

export const OfreceAlojamiento = ({ onChecked, otros }) => {
  return (
    <>
      <h2 className="text-secondary mt-3">Lo que ofrece el alojamiento</h2>

      <ul className="row list-none p-0 mt-6">
        <li className="col-12 col-sm-6">
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="cocina"
              id="cocina"
              onChange={onChecked}
            />
            <label htmlFor="cocina">Cocina</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input type="checkbox" name="sala" id="sala" onChange={onChecked} />
            <label htmlFor="sala">Sala</label>
          </div>
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="comedor"
              id="comedor"
              onChange={onChecked}
            />
            <label htmlFor="comedor">Comedor</label>
          </div>
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="galeria"
              id="galeria"
              onChange={onChecked}
            />
            <label htmlFor="galeria">Galeria</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="terraza"
              id="terraza"
              onChange={onChecked}
            />
            <label htmlFor="terraza">Terraza</label>
          </div>
        </li>
        <li className="col-12 col-sm-6">
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="balcon"
              id="balcon"
              onChange={onChecked}
            />
            <label htmlFor="balcon">Balcon</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="gacebo"
              id="gacebo"
              onChange={onChecked}
            />
            <label htmlFor="gacebo">Gacebo</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="patio"
              id="patio"
              onChange={onChecked}
            />
            <label htmlFor="patio">Patio</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="otros"
              id="otros"
              onChange={onChecked}
            />
            <label htmlFor="otros">Otros</label>
          </div>

          {otros && (
            <div className="mt-3">
              <input type="text" name="otrosInfo" id="otros"/>
            </div>
          )}
        </li>
      </ul>
    </>
  );
};