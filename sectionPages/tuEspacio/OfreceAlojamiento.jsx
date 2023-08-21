import React, { useRef } from 'react';

export const OfreceAlojamiento = ({
  values,
  onChecked,
  otros,
  setOtros,
  listOtros,
  onDeleteOtros,
}) => {
  const input = useRef();

  const onAgregar = () => {
    const value = input.current.value.trim();
    if (!value) return;
    console.log(input.current.value, 'consoliado');
    setOtros(value, 'alojamiento');
    input.current.value = '';
  };

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
              checked={!!values.cocina}
              onChange={onChecked}
            />
            <label htmlFor="cocina">Cocina</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="sala"
              id="sala"
              onChange={onChecked}
              checked={!!values.sala}
            />
            <label htmlFor="sala">Sala</label>
          </div>
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="comedor"
              id="comedor"
              checked={!!values.comedor}
              onChange={onChecked}
            />
            <label htmlFor="comedor">Comedor</label>
          </div>
          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="galeria"
              id="galeria"
              checked={!!values.galeria}
              onChange={onChecked}
            />
            <label htmlFor="galeria">Galeria</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="terraza"
              id="terraza"
              checked={!!values.terraza}
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
              checked={!!values.balcon}
              onChange={onChecked}
            />
            <label htmlFor="balcon">Balcon</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="gacebo"
              id="gacebo"
              checked={!!values.gacebo}
              onChange={onChecked}
            />
            <label htmlFor="gacebo">Gacebo</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="patio"
              id="patio"
              checked={!!values.patio}
              onChange={onChecked}
            />
            <label htmlFor="patio">Patio</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="otros"
              id="otros"
              checked={!!values.otros}
              onChange={onChecked}
            />
            <label htmlFor="otros">Otros</label>
          </div>

          {otros && (
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
                <h4 className="m-0">Otros</h4>{' '}
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  style={{
                    '--bs-btn-padding-x': '0.3rem',
                  }}
                  onClick={() => onDeleteOtros('alojamiento')}
                >
                  {' '}
                  Limpiar Listado
                </button>
              </div>
              <ul>
                {listOtros.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </li>
      </ul>
    </>
  );
};
