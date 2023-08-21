import React, { useRef } from 'react';

export const AmenidadesZona = ({
  values,
  onChecked,
  otrosLugares,
  setOtros,
  listOtros,
  onChangeInputValue,
  inputValues,
  onDeleteOtros,
}) => {
  const input = useRef();

  const onAgregar = () => {
    const value = input.current.value.trim();
    if (!value) return;
    console.log(input.current.value, 'consoliado');
    setOtros(value, 'amenidades');
    input.current.value = '';
  };

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
              checked={values.restaurantes || false}
              onChange={onChecked}
            />
            <label htmlFor="restaurantes">Restaurantes</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="piscinaBalnerarios"
              id="piscinaBalnerarios"
              checked={values.piscinaBalnerarios || false}
              onChange={onChecked}
            />
            <label htmlFor="piscinaBalnerarios">Piscina o Balnerarios</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="restaurantesComida"
              id="restaurantesComida"
              checked={!!values.restaurantesComida}
              onChange={onChecked}
            />
            <label htmlFor="restaurantesComida">Restaurantes de Comida</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="playas"
              id="playas"
              checked={!!values.playas}
              onChange={onChecked}
            />
            <label htmlFor="playas">Playas</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="rios"
              id="rios"
              checked={!!values.rios}
              onChange={onChecked}
            />
            <label htmlFor="rios">Rios</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="ecologico"
              id="ecologico"
              checked={!!values.ecologico}
              onChange={onChecked}
            />
            <label htmlFor="ecologico">Ecologico</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="cine"
              id="cine"
              onChange={onChecked}
              checked={!!values.cine}
            />
            <label htmlFor="cine">Cine</label>
          </div>
        </li>

        <li className="col-12 col-sm-6">
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="discotecas"
              id="discotecas"
              checked={!!values.discotecas}
              onChange={onChecked}
            />
            <label htmlFor="discotecas">Discotecas</label>
          </div>
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="malecona"
              id="malecona"
              checked={!!values.melacona}
              onChange={onChecked}
            />
            <label htmlFor="malecona">Malecona</label>
          </div>
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="bares"
              id="bares"
              checked={!!values.bares}
              onChange={onChecked}
            />
            <label htmlFor="bares">Bares</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="centroComerciales"
              id="centroComerciales"
              checked={!!values.centroComerciales}
              onChange={onChecked}
            />
            <label htmlFor="centroComerciales">Centro Comerciales</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="otrosLugares"
              id="otrosLugares"
              checked={!!values.otrosLugares}
              onChange={onChecked}
            />
            <label htmlFor="otrosLugares">Otros Lugares Recreativos</label>
          </div>

          {otrosLugares && (
            <div className="d-flex mt-3">
              <input type="text" name="otrosInfo" id="otros" ref={input} />

              <button type="button" onClick={onAgregar}>
                Agregar
              </button>
            </div>
          )}

          {listOtros.length ? (
            <div className="border border-2 mt-2 rounded px-1 pb-2">
              <div className="d-flex align-items-center gap-2 mb-3">
                <h4 className='m-0'>Otros</h4>{' '}
                <button
                  type="button"
                  className='btn btn-outline-danger'
                  style={{
                    '--bs-btn-padding-x': '0.3rem'
                  }}
                  onClick={() => onDeleteOtros('amenidades')}
                >
                  {' '}
                  Limpiar Listado
                </button>
              </div>
              <ul>
                {listOtros.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </li>
      </ul>

      <h2 className="text-secondary mt-3">Habla sobre tu alojamiento</h2>

      <textarea
        rows="10"
        placeholder="Habla de tu propiedad"
        className="w-100"
        name="alojamientoDescripcion"
        value={inputValues.alojamientoDescripcion}
        onChange={onChangeInputValue}
      ></textarea>
    </>
  );
};
