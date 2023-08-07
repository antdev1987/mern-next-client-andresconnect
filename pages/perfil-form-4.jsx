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
import { uploadCloudinary } from '@/utils/upload';

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
  back: null,
  front: null,
  selfie: null,
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
      selfie: inputValue.selfie,
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

  // useEffect(() => {
  //   if (!state.direccionInfo?.provincia) {
  //     router.push('/perfil-form-3');
  //   }
  // }, []);

  useEffect(() => {
    if (choose === 'pasaporte') {
      delete inputValue.back;
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
      images: [],
    };

    const images = [inputValue.document, inputValue.front, inputValue.selfie];

    if (inputValue.back) {
      images.push(inputValue.back);
    }

    console.log(inputValue);
    try {
      const config = {
        headers: { Authorization: `Bearer ${session.user.token}` },
      };

      // AQUI LOS MANDO A CLOUDINARY LAS IMAGENES
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i]);
        formInfo.images.push(data);
      }
      console.log(formInfo.images, 'aqui en earr');
      //////////////////

      // AQUI MANDO DATOS DEL FORMULARIO
      const data = await axios.post(
        `${process.env.BASE_URL}/user/userverification/`,
        formInfo,
        config
      );
      ////////////////////////

      console.log(data);
      dispatch({ type: 'LIMPIAR_INFO' });
      // update({isVerificationProcess:true})
      await sessionUpdate();

      toast.success('Formulario enviado exitosamente');
      // console.log(update)
      router.push('/gestionar-cuenta');
    } catch (error) {
      console.log(error);
      getError(error.message);
      console.log(getError(error));
      toast.warning('Upss vuelve a intentarlo porfavor');
    } finally {
      dispatch({ type: 'isLoading_false' });
    }
  };
  return (
    <Layout title="informacion personal">
      <ProcessBarComp step="5" />

      <h2 className="py-4">DOCUMENTOS</h2>

      <form action="#" onSubmit={handleSubmit}>
        <div className="pb-3">
          <h3 className="d-block">
            <span className="">
              Subir archivo que indique que estas ocupando;
            </span>{' '}
            <span className="fs-6">
              Contrato de luz, Recivo de luz (Fecha actual), Contrato de
              alquiler
            </span>
          </h3>
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
          <div className="d-flex align-items-center gap-2 mt-3">
            <label className="btn btn-outline-danger" htmlFor="document">
              Archivo
            </label>
            <input
              type="file"
              name="document"
              id="document"
              className="d-none"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <h3 className="mt-3">Subir foto de identidad o pasaporte </h3>

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
            {/* <h3 className="fs-4 pt-2 mt-3">Subir foto de identidad:</h3> */}

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
                    value=""
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              {choose === 'identidad' && (
                <>
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
                        value=""
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>{' '}
                </>
              )}
            </div>
          </>
        )}

        <div className="py-3">
          <h3 className="">
            Subir foto del selfie{' '}
            <Link href="" className="btn btn-outline-success">
              NEED HELP? <i className="bi bi-question-circle-fill"></i>
            </Link>
          </h3>{' '}
          <div>
            {inputValue.selfie && (
              <img
                src={URL.createObjectURL(inputValue?.selfie)}
                alt="Uploaded"
                width={100}
                height={100}
              />
            )}
          </div>
          <div className="d-flex align-items-center gap-2 mt-3">
            <label className="btn btn-outline-danger" htmlFor="selfie">
              Selfie
            </label>
            <input
              type="file"
              name="selfie"
              id="selfie"
              className="d-none"
              onChange={handleImageChange}
            />
          </div>
        </div>

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

PerfilForm4.auth = true;

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
