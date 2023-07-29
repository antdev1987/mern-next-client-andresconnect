import Layout from '@/components/Layout/Layout';
import ProcessBarComp from '@/components/ProcessBarComp/ProcessBarComp';
import { context } from '@/context/ContextProvider';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session, 'sever side props');
  if (session.user.isVerificationProcess) {
    return {
      redirect: {
        destination: '/perfil',
        permanent: false,
      },
    };
  }
  return { props: session };
}

const PerfilForm3 = () => {
  const { state, dispatch } = useContext(context);

  const router = useRouter();

  const [canContinue, setCanContinue] = useState(false);

  const [inputValue, setInputValue] = useState({
    calle: state.direccionInfo?.calle || '',
    numero: state.direccionInfo?.numero || '',
    piso: state.direccionInfo?.piso || '',
    barrio: state.direccionInfo?.barrio || '',
    sector: state.direccionInfo?.sector || '',
    municipio: state.direccionInfo?.municipio || '',
    provincia: state.direccionInfo?.provincia || '',
  });

  const setValues = (e) =>
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });

  useEffect(() => {
    if (!state.propiedadInfo?.estadoPropiedad) {
      router.push('/perfil-form-2');
    }
  }, []);

  useEffect(() => {
    const valores = Object.entries(inputValue);
    console.log(valores);

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

    dispatch({ type: 'DIRECCION_INFO', payload: { ...inputValue } });

    router.push('/perfil-form-4');
  };

  const chooseOnMap = () => {
    router.push('/mapScreen');
  };

  return (
    <Layout title="informacion de lugar">
      <div className=" d-none d-sm-block">
        <ProcessBarComp step="4" />
      </div>

      <h2 className="py-4">INFORMACION DIRECCION DONDE VIVE ACTUALMENTE</h2>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <label htmlFor="INPUTCALLE" className="form-label">
            CALLE
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTCALLE"
            name="calle"
            value={inputValue.calle}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTNUMERO" className="form-label">
            NUMERO
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTNUMERO"
            name="numero"
            value={inputValue.numero}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTSECTOR" className="form-label">
            PISO
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTSECTOR"
            name="piso"
            value={inputValue.piso}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTPISO" className="form-label">
            BARRIO, URBANIZACION, RESIDENCIAL
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTPISO"
            name="barrio"
            value={inputValue.barrio}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTMUNICIPIO" className="form-label">
            SECTOR
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTMUNICIPIO"
            name="sector"
            value={inputValue.sector}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTPROVINCIA" className="form-label">
            MUNICIPIO
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTPROVINCIA"
            name="municipio"
            value={inputValue.municipio}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTURREBA" className="form-label">
            PROVINCIA
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTURREBA"
            name="provincia"
            value={inputValue.provincia}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={chooseOnMap}>
          map
        </button>

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

export default PerfilForm3;
