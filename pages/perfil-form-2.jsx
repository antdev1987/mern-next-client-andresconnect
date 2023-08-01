import Layout from '@/components/Layout/Layout';
import ProcessBarComp from '@/components/ProcessBarComp/ProcessBarComp';
import { context } from '@/context/ContextProvider';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session, 'sever side props');
  if (session?.user.isVerificationProcess) {
    return {
      redirect: {
        destination: '/gestionar-cuenta',
        permanent: false,
      },
    };
  }
  return { props: {} };
}

const PerfilForm2 = () => {

  // const { data: session } = useSession();
  const { state, dispatch } = useContext(context);

  const router = useRouter();

  const [canContinue, setCanContinue] = useState(false);

  const [inputValue, setInputValue] = useState({
    estadoPropiedad: state.propiedadInfo?.estadoPropiedad || '',
    tipoPropiedad: state.propiedadInfo?.tipoPropiedad || '',
  });

  const setValues = (e) =>
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });

  useEffect(() => {
    if (!state.personalInfo.nombre) {
      router.push('/perfil-form-1');
    }
  }, []);

  useEffect(() => {
    const valores = Object.entries(inputValue);

    for (const valor of valores) {
      if (
        valor[1] === '' || // Verificar si es una cadena vacía
        !valor[1].trim()
      ) {
        setCanContinue(false);
        return;
      }
    }
    setCanContinue(true);
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: 'PROPIEDAD_INFO', payload: { ...inputValue } });

    console.log(inputValue);
    router.push('/perfil-form-3');
  };

  return (
    <Layout title="informacion de propiedad">
      <ProcessBarComp step="3" />

      <h2 className="py-4">INFORMACION DE LA PROPIEDAD</h2>

      <form onSubmit={handleSubmit} className="row g-3">
        <fieldset>
          <label className="">La propiedad que usted posee es:</label>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="estadoPropiedad"
                id="ALQUILADORADIO"
                value="alquilado"
                onChange={setValues}
                checked={inputValue.estadoPropiedad === 'alquilado'}
              />
              <label className="form-check-label" htmlFor="ALQUILADORADIO">
                ALQUILADO
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="estadoPropiedad"
                id="PROPIORADIO"
                value="propio"
                onChange={setValues}
                checked={inputValue.estadoPropiedad === 'propio'}
              />
              <label className="form-check-label" htmlFor="PROPIORADIO">
                PROPIO
              </label>
            </div>
            <div className="form-check disabled">
              <input
                className="form-check-input"
                type="radio"
                name="estadoPropiedad"
                id="COMPANERORADIO"
                value="companero de casa"
                disabled
                onChange={setValues}
                checked={inputValue.estadoPropiedad === 'companero de casa'}
              />
              <label className="form-check-label" htmlFor="COMPANERORADIO">
                COMPANERO DE CASA
              </label>
            </div>
          </div>
        </fieldset>

        <label className="">
          Que tipo es la propiedad donde resiviras al huesped:
        </label>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="tipoPropiedad"
              id="CASARADIO"
              value="casa"
              onChange={setValues}
              checked={inputValue.tipoPropiedad === 'casa'}
            />
            <label className="form-check-label" htmlFor="CASARADIO">
              CASA
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="tipoPropiedad"
              id="VILLARADIO"
              value="villa"
              onChange={setValues}
              checked={inputValue.tipoPropiedad === 'villa'}
            />
            <label className="form-check-label" htmlFor="VILLARADIO">
              VILLA
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="tipoPropiedad"
              id="APARTAMENTORADIO"
              value="apartamento"
              onChange={setValues}
              checked={inputValue.tipoPropiedad === 'apartamento'}
            />
            <label className="form-check-label" htmlFor="APARTAMENTORADIO">
              APARTAMENTO
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="tipoPropiedad"
              id="APARAESTUDIORADIO"
              value="aparta-estudio"
              onChange={setValues}
              checked={inputValue.tipoPropiedad === 'aparta-estudio'}
            />
            <label className="form-check-label" htmlFor="APARAESTUDIORADIO">
              APARTA-ESTUDIO
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="tipoPropiedad"
              id="OTRORADIO"
              value="otros"
              onChange={setValues}
              checked={inputValue.tipoPropiedad === 'otros'}
            />
            <label className="form-check-label" htmlFor="OTRORADIO">
              OTROS
            </label>
          </div>
        </div>

        <div className="col-12">
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

PerfilForm2.auth = true

export default PerfilForm2;


