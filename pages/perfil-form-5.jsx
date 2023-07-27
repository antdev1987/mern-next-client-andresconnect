import Layout from '@/components/Layout/Layout';
import ProcessBarComp from '@/components/ProcessBarComp/ProcessBarComp';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const initialState = {
  termino_condiciones: false,
  politica_privacidad: false,
  politica_uso: false,
  document: null,
  back: null,
  front: null,
  nextTo: null,
};

const PerfilForm5 = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const [choose, setChoose] = useState('');
  const [canContinue, setCanContinue] = useState(false);

  const choosing = (e) => {
    setInputValue({
      ...initialState,
      document: inputValue.document,
      termino_condiciones: inputValue.termino_condiciones,
      politica_privacidad: inputValue.politica_privacidad,
      politica_uso: inputValue.politica_uso,
    });
    setChoose(e.target.value);
  };

  const setChecked = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.checked });
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;
    const objectURL = URL.createObjectURL(file);
    setInputValue({ ...inputValue, [event.target.name]: objectURL });
  };

  useEffect(() => {
    // console.log(inputValue);
    if (choose === 'pasaporte') {
      delete inputValue.nextTo;
    }

    const valores = Object?.entries(inputValue);

    for (const valor of valores) {
      if (!valor[1]) {
        setCanContinue(false);
        return;
      }
    }
    setCanContinue(true);
  }, [inputValue]);

  return (
    <Layout title="informacion personal">
      <ProcessBarComp step="6" />

      <h2 className="py-4">DOCUMENTOS</h2>

      <form action="#">
        <div className="pb-3">
          <label htmlFor="documento" className="d-block">
            <span className="fs-4">
              Subir archivo que indique que estas ocupando;
            </span>{' '}
            Contrato de luz, Recivo de luz (Fecha actual), Contrato de alquiler
          </label>
          <div>
            {inputValue.document && (
              <img
                src={inputValue.document}
                alt="Uploaded"
                width={100}
                height={100}
              />
            )}
          </div>
          <input
            type="file"
            onChange={handleImageChange}
            className="d-inline-block mt-3"
            name="document"
            id="documento"
          />
        </div>

        <h3 className="mt-3">Tomar foto de identidad o pasaporte</h3>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="verificar"
            id="pasaporte"
            value="pasaporte"
            onChange={choosing}
          />
          <label className="form-check-label" htmlFor="pasaporte">
            PASAPORTE
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="verificar"
            id="identidad"
            value="identidad"
            onChange={choosing}
          />
          <label className="form-check-label" htmlFor="identidad">
            IDENTIDAD
          </label>
        </div>

        {choose && (
          <>
            <p className="fs-4 pt-2">Subir imagen de:</p>

            <div className="d-flex gap-5">
              <div>
                {inputValue.front && (
                  <img
                    src={inputValue.front}
                    alt="Uploaded"
                    width={100}
                    height={100}
                  />
                )}
                <div className="d-flex align-items-center gap-2 mt-3">
                  <label className="btn btn-outline-danger" htmlFor="front">
                    Enfrente
                  </label>
                  <input
                    type="file"
                    name="front"
                    id="front"
                    className="d-none"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              <div>
                {inputValue.back && (
                  <img
                    src={inputValue.back}
                    alt="Uploaded"
                    width={100}
                    height={100}
                  />
                )}
                <div className="d-flex align-items-center gap-2 mt-3">
                  <label className="btn btn-outline-danger" htmlFor="back">
                    Atras
                  </label>
                  <input
                    type="file"
                    name="back"
                    id="back"
                    className="d-none"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              {choose === 'identidad' && (
                <div>
                  {inputValue.nextTo && (
                    <img
                      src={inputValue.nextTo}
                      alt="Uploaded"
                      width={100}
                      height={100}
                    />
                  )}
                  <div className="d-flex align-items-center gap-2 mt-3">
                    <label className="btn btn-outline-danger" htmlFor="nextTo">
                      Al lado del documento
                    </label>
                    <input
                      type="file"
                      name="nextTo"
                      id="nextTo"
                      className="d-none"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        <div className="mt-3">
          <h3 className="mt-3">Aceptar Condiciones y Terminos</h3>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="termino_condiciones"
              id="termino_condiciones"
              onChange={setChecked}
            />
            <label htmlFor="termino_condiciones">
              Termino y Condiciones <Link href="#">Leer mas</Link>
            </label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="politica_uso"
              id="politica_uso"
              onChange={setChecked}
            />
            <label htmlFor="politica_uso">
              Politica de Uso <Link href="#">Leer mas</Link>
            </label>
          </div>

          <div className="d-flex gap-2 align-items-center mt-3">
            <input
              type="checkbox"
              name="politica_privacidad"
              id="politica_privacidad"
              onChange={setChecked}
            />
            <label htmlFor="politica_privacidad">
              Politica de Privacidad <Link href="#">Leer mas</Link>
            </label>
          </div>
        </div>

        <div className="col-12 mt-3">
          {canContinue && (
            <button type="submit" className="btn btn-primary">
              Salvar y Continuar
            </button>
          )}
        </div>
      </form>
    </Layout>
  );
};

export default PerfilForm5;
