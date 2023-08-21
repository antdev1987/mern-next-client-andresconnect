import React from 'react';

export const ServicioOfrecidoA = ({
  inputValues,
  values,
  onChecked,
  onChangeInputValue,
}) => {
  return (
    <>
      <h2 className="text-secondary mt-3">Tu servicio es ofredcido a: </h2>

      <ul className="row list-none p-0 mt-3">
        <li className="col-12 col-sm-6">
          <div className="d-flex gap-2 align-items-center">
            <input
              type="checkbox"
              name="parejas"
              id="parejas"
              checked={!!values.parejas}
              onChange={onChecked}
            />
            <label htmlFor="parejas">Parejas</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="hombres"
              id="hombres"
              checked={!!values.hombres}
              onChange={onChecked}
            />
            <label htmlFor="hombres">Hombres</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="mujeres"
              id="mujeres"
              checked={!!values.mujeres}
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
              checked={!!values.trans2}
              onChange={onChecked}
            />
            <label htmlFor="trans2">Trans</label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="lesbianas"
              id="lesbianas"
              checked={!!values.lesbianas}
              onChange={onChecked}
            />
            <label htmlFor="lesbianas">Lesbianas</label>
          </div>
        </li>
      </ul>

      <h2 className="text-secondary mt-3">
        Los servicios que llevara tu scort
      </h2>

      <textarea
        rows="10"
        placeholder="Habla de los servicios sexuales que vas a ofrecer"
        className="w-100"
        name="scortDescripcion"
        value={inputValues.scortDescripcion}
        onChange={onChangeInputValue}
      ></textarea>

      <h2 className="text-secondary mt-3">
        Habla de la experiencia que contara tu alojamiento
      </h2>

      <textarea
        rows="10"
        placeholder={`Escort guia creando experiencias \nAquí escribirás o expresaras; tu cómo  Escort anfitrión,  crearas  experiencias que  ofrecerás a los huésped  que se hospedarán contigo. Harás una guía expresando a cuáles lugares o zonas de tu ciudad o país lo Llevarás, hacer  distintas actividades en el exterior o interior del hospedaje para hacer su estadías sea más amenas o emocionante, con esto busca hacer más emocionante tu hospedaje.\nTu servicio de escort anfitrion es único piensa fuera de la caja, ofrece cosas unica y emocionante, has que ese huésped vuelve de nuevo a tu hospedaje.`}
        className="w-100"
        name="experienciaScort"
        value={inputValues.experienciaScort}
        onChange={onChangeInputValue}
      ></textarea>
    </>
  );
};
