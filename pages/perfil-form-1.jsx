import Layout from '@/components/Layout/Layout';
import ProcessBarComp from '@/components/ProcessBarComp/ProcessBarComp';
import { context } from '@/context/ContextProvider';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session, 'sever side props');

  if (session?.user?.isVerificationProcess) {
    return {
      redirect: {
        destination: '/gestionar-cuenta',
        permanent: false,
      },
    };
  }
  return { props: {} };
}
const PerfilForm1 = ()=>  {
  const { state, dispatch } = useContext(context);

  const router = useRouter();

  const [canContinue, setCanContinue] = useState(false);

  const [inputValue, setInputValue] = useState({
    nombre: state.personalInfo?.nombre || '',
    apellidos: state.personalInfo?.apellidos || '',
    genero: state.personalInfo?.genero || '',
    nacionalidad: state.personalInfo?.nacionalidad || '',
    tel: state.personalInfo?.tel || '',
    edad: state.personalInfo?.edad || '',
    fecha: state.personalInfo?.fecha || '',
  });

  const setValues = (e) =>
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });

  useEffect(() => {
    const valores = Object?.entries(inputValue);

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

    dispatch({ type: 'PERSONAL_INFO', payload: { ...inputValue } });

    router.push('/perfil-form-2');
  };
  return (
    <Layout title="informacion personal">
      <ProcessBarComp step="2" />

      <h2 className="py-4">INFORMACION PERSONAL</h2>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control border-dark"
            onChange={setValues}
            id="inputName"
            name="nombre"
            value={inputValue.nombre}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputApellidos" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control border-dark"
            onChange={setValues}
            id="inputApellidos"
            name="apellidos"
            value={inputValue.apellidos}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputNacionalidad" className="form-label">
            Nacionalidad
          </label>
          <input
            type="text"
            className="form-control border-dark"
            onChange={setValues}
            id="inputNacionalidad"
            name="nacionalidad"
            value={inputValue.nacionalidad}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputtelefono" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            className="form-control border-dark"
            onChange={setValues}
            id="inputtelefono"
            name="tel"
            value={inputValue.tel}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputEdad" className="form-label">
            Edad
          </label>
          <input
            type="text"
            className="form-control border-dark"
            onChange={setValues}
            id="inputEdad"
            name="edad"
            value={inputValue.edad}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputSexo" className="form-label">
            Sexo
          </label>
          <select
            id="inputSexo"
            className="form-select border-dark"
            name="genero"
            value={inputValue.genero}
            onChange={setValues}
          >
            <option value="" hidden>
              Seleccione una opcion
            </option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenido</option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="inputEdad" className="form-label">
            Fecha de Nacimiento
          </label>
          <div>
            <input
              className="p-1  rounded-2"
              type="date"
              onChange={setValues}
              name="fecha"
              value={inputValue.fecha}
            />
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

 PerfilForm1.auth = true

export default PerfilForm1