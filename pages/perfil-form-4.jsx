import Layout from '@/components/Layout/Layout';
import ProcessBarComp from '@/components/ProcessBarComp/ProcessBarComp';
import { context } from '@/context/ContextProvider';
import getError from '@/utils/getError';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { toast } from 'react-toastify';

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

const initialState = {
  termino_condiciones: false,
  politica_privacidad: false,
  politica_uso: false,
  document: null,
  back: null,
  front: null,
  nextTo: null,
};

const PerfilForm4 = () => {
  const { data: session, update: sessionUpdate, status } = useSession();

  // sessionUpdate()

  // console.log(status)
  // console.log(session)

  const { state, dispatch } = useContext(context);

  const router = useRouter();

  const [choose, setChoose] = useState('');
  const [canContinue, setCanContinue] = useState(false);
  const [inputValue, setInputValue] = useState(initialState);

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
    setInputValue({ ...inputValue, [event.target.name]: file });
  };

  useEffect(() => {
    if (!state.direccionInfo?.provincia) {
      router.push('/perfil-form-3');
    }
  }, []);

  useEffect(() => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'isLoading_true' });

    const formInfo = {
      personalInfo: state.personalInfo,
      propiedadInfo: state.propiedadInfo,
      direccionInfo: state.direccionInfo,
    };

    // Crear un nuevo FormData
    const formData = new FormData();
    formData.append('uploadImages', inputValue.document);
    formData.append('uploadImages', inputValue.front);
    formData.append('uploadImages', inputValue.back);
    formData.append('uploadImages', inputValue.nextTo);
    formData.append('formInfo', JSON.stringify(formInfo));

    // formData.append('', JSON.stringify(state));
    // console.log(inputValue);
    try {
      const config = {
        headers: { Authorization: `Bearer ${session.user.token}` },
      };
      const data = await axios.post(
        `${process.env.BASE_URL}/user/userverification/`,
        formData,
        config
      );
      console.log(data);
      dispatch({ type: 'LIMPIAR_INFO' });
      // update({isVerificationProcess:true})
      await sessionUpdate();
      dispatch({ type: 'isLoading_false' });
      toast.success("Formulario enviado exitosamente");

      // console.log(update)
      router.push('/gestionar-cuenta');
    } catch (error) {
      console.log(error);
      getError(error.message);
      console.log(getError(error));
    }
  };
  return (
    <Layout title="informacion personal">
      <ProcessBarComp step="5" />

      <h2 className="py-4">DOCUMENTOS</h2>

      <form action="#" onSubmit={handleSubmit}>
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
                src={URL.createObjectURL(inputValue.document)}
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
                    src={URL.createObjectURL(inputValue.front)}
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
                    src={URL.createObjectURL(inputValue.back)}
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
                      src={URL.createObjectURL(inputValue.nextTo)}
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

PerfilForm4.auth= true

export default PerfilForm4;


// const finalList =[
//   File {
//     name: '4.jpeg',
//     lastModified: 1689725103489,
//     lastModifiedDate: new Date('2023-07-19T00:05:03.000Z'),
//     webkitRelativePath: '',
//     size: 104354,
//     type: 'image/jpeg'
//   }, File {
//     name: '3.jpeg',
//     lastModified: 1689725099673,
//     lastModifiedDate: new Date('2023-07-19T00:04:59.000Z'),
//     webkitRelativePath: '',
//     size: 73271,
//     type: 'image/jpeg'
//   },
  
// ]

// const list1 = [
//   FileList {
//     0: File {
//       name: '4.jpeg',
//       lastModified: 1689725103489,
//       lastModifiedDate: new Date('2023-07-19T00:05:03.000Z'),
//       webkitRelativePath: '',
//       size: 104354,
//       type: 'image/jpeg'
//     },
//     length: 1
//   }, FileList {
//     0: File {
//       name: '3.jpeg',
//       lastModified: 1689725099673,
//       lastModifiedDate: new Date('2023-07-19T00:04:59.000Z'),
//       webkitRelativePath: '',
//       size: 73271,
//       type: 'image/jpeg'
//     },
//     length: 1
//   },
  
// ]