import React from 'react';

export const AmenidadesZona = ({ onChecked, otrosLugares }) => {
  return (
    <>
      <h2 className="text-secondary mt-3">Amenidades de la Zona de la Pro.</h2>

      <ul className="row list-none p-0 mt-3">
        <li className="col-12 col-sm-6">
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="restaurantes"
              id="restaurantes"
              onChange={onChecked}
            />
            <label htmlFor="restaurantes">Restaurantes</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="piscinaBalnerarios"
              id="piscinaBalnerarios"
              onChange={onChecked}
            />
            <label htmlFor="piscinaBalnerarios">Piscina o Balnerarios</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="restaurantesComida"
              id="restaurantesComida"
              onChange={onChecked}
            />
            <label htmlFor="restaurantesComida">Restaurantes de Comida</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="playas"
              id="playas"
              onChange={onChecked}
            />
            <label htmlFor="playas">Playas</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input type="checkbox" name="rios" id="rios" onChange={onChecked} />
            <label htmlFor="rios">Rios</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="ecologico"
              id="ecologico"
              onChange={onChecked}
            />
            <label htmlFor="ecologico">Ecologico</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input type="checkbox" name="cine" id="cine" onChange={onChecked} />
            <label htmlFor="cine">Cine</label>
          </div>
        </li>

        <li className="col-12 col-sm-6">
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="discotecas"
              id="discotecas"
              onChange={onChecked}
            />
            <label htmlFor="discotecas">Discotecas</label>
          </div>
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="malecona"
              id="malecona"
              onChange={onChecked}
            />
            <label htmlFor="malecona">Malecona</label>
          </div>
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="bares"
              id="bares"
              onChange={onChecked}
            />
            <label htmlFor="bares">Bares</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="centroComerciales"
              id="centroComerciales"
              onChange={onChecked}
            />
            <label htmlFor="centroComerciales">Centro Comerciales</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="otrosLugares"
              id="otrosLugares"
              onChange={onChecked}
            />
            <label htmlFor="otrosLugares">Otros Lugares Recreativos</label>
          </div>

          {otrosLugares && (
            <div className="mt-3">
              <input type="text" name="otrosInfo" />
            </div>
          )}
        </li>
      </ul>

      <h2 className="text-secondary mt-3">Habla sobre tu alojamiento</h2>

      <textarea
        rows="10"
        placeholder="Escriba una descripcion"
        className='w-100'
      ></textarea>
    </>
  );
};
