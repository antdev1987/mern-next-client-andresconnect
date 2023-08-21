import React from 'react';

export const TuGenero = ({ onChecked, values }) => {
  return (
    <>
      <h2 className="text-secondary mt-3">Cual es tu genero: </h2>

      <ul className="row list-none p-0 mt-3">
        <li className="col-12 col-sm-6">
          <div className="d-flex gap-2 align-items-center mt-3 mt-sm-0">
            <input
              type="checkbox"
              name="hombreHetero"
              id="hombreHetero"
              checked={!!values.hombreHetero}
              onChange={onChecked}
            />
            <label htmlFor="hombreHetero">Hombre (Hetero)</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="gay"
              id="gay"
              onChange={onChecked}
              checked={!!values.gay}
            />
            <label htmlFor="gay">Gay</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="trans"
              id="trans"
              checked={!!values.trans}
              onChange={onChecked}
            />
            <label htmlFor="trans">Trans</label>
          </div>
        </li>
        <li className="col-12 col-sm-6">
          <div className="d-flex gap-2 align-items-center mt-3 mt-sm-0">
            <input
              type="checkbox"
              name="mujerHetero"
              id="mujerHetero"
              checked={!!values.mujerHetero}
              onChange={onChecked}
            />
            <label htmlFor="mujerHetero">Mujer (Hetero)</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="lesbiana"
              id="lesbiana"
              checked={!!values.lesbiana}
              onChange={onChecked}
            />
            <label htmlFor="lesbiana">Lesbiana</label>
          </div>
        </li>
      </ul>
    </>
  );
};
