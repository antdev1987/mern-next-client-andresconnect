import Layout from '@/components/Layout/Layout';
import React, { useContext, useEffect, useState } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { context } from '@/context/ContextProvider';

import {
  AmenidadesZona,
  DetallesMueble,
  Fotos,
  OfreceAlojamiento,
  ServicioOfrecidoA,
  TuGenero,
} from '@/sectionPages/tuEspacio';
import axios from 'axios';
import { toast } from 'react-toastify';
import getError from '@/utils/getError';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session == null) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (!session.user.isVerificationProcess) {
    return {
      redirect: {
        destination: '/perfil-form-1',
        permanent: false,
      },
    };
  }
  return { props: session };
}

const initialState = {
  experienciaScort: '',
  cantidadHabitaciones: '',
  cantidadParqueo: '',
  cantidadBathrooms: '',
  TipoCama: '',
  alojamientoDescripcion: '',
  scortDescripcion: '',
  amenidadesPropiedad: {},
  alojamientoPropiedad: {},
  generoScort: {},
  ofrecidoScort: {},
};

const initialOtros = { alojamiento: [], amenidades: [] };

const images = { propiedad: [], scort: [] };

const perfil = () => {
  const { data: session } = useSession();
  const { dispatch } = useContext(context);
  const router = useRouter();

  const config = {
    headers: { Authorization: `Bearer ${session.user.token}` },
  };

  const [inputValue, setInputValue] = useState(initialState);

  const [otros, setOtros] = useState(initialOtros);

  const onChangeInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  // Alojamiento
  const onCheckedAlojamiento = (e) => {
    console.log(inputValue);

    setInputValue({
      ...inputValue,
      alojamientoPropiedad: {
        ...inputValue.alojamientoPropiedad,
        [e.target.name]: e.target.checked,
      },
    });
  };

  // Amenidades
  const onCheckedAmenidades = (e) => {
    console.log(inputValue);

    setInputValue({
      ...inputValue,
      amenidadesPropiedad: {
        ...inputValue.amenidadesPropiedad,
        [e.target.name]: e.target.checked,
      },
    });
  };

  // Genero
  const onCheckedGenero = (e) => {
    console.log(inputValue);

    setInputValue({
      ...inputValue,
      generoScort: {
        ...inputValue.generoScort,
        [e.target.name]: e.target.checked,
      },
    });
  };

  // Ofrecido
  const onCheckedOfrecido = (e) => {
    console.log(inputValue);

    setInputValue({
      ...inputValue,
      ofrecidoScort: {
        ...inputValue.ofrecidoScort,
        [e.target.name]: e.target.checked,
      },
    });
  };

  // Lista de Otros
  const onSaveOtros = (value, place) => {
    setOtros({ ...otros, [place]: [...otros[place], value] });
  };

  const onDeleteOtros = (place) => {
    if (!confirm('Seguro que deseas limpiar la lista?')) return;
    setOtros({ ...otros, [place]: [] });
  };

  const submitPropiedad = async (e) => {
    e.preventDefault();
    const formInfo = { ...inputValue, otros };

    for (const objeto in inputValue) {
      const propiedadesVerdaderas = [];
      console.log(typeof inputValue[objeto], 'test');
      if (typeof inputValue[objeto] === 'object') {
        for (const propiedad in inputValue[objeto]) {
          if (inputValue[objeto][propiedad]) {
            propiedadesVerdaderas.push(propiedad);
          }
        }
        formInfo[objeto] = propiedadesVerdaderas;
      }
    }

    try {
      const { data } = await axios.post(
        `${process.env.BASE_URL}/espacio/publicar`,
        { formInfo },
        config
      );

      console.log(data, 'DATOS DEL BACK');
      console.log(formInfo, 'Form data');
      // toast.success("Cambios realizados")
      router.push('/revisar-publicar');
    } catch (error) {
      toast.error(getError(error));
    }
  };

  // Fetchea los checkbox y inputs y los coloca
  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.BASE_URL}/espacio/publicar`,
      config
    );

    if (!data.espacioInfo) return;

    const { espacioInfo } = data;

    console.log('me estoy ejecutando');
    setOtros(espacioInfo?.otros || initialOtros);

    // Convierte los arrays a objetos
    function convertArraysToObjects(data) {
      const result = {};

      for (const key in data) {
        if (Array.isArray(data[key])) {
          const convertedObject = {};
          data[key].forEach((item) => {
            convertedObject[item] = true;
          });
          result[key] = convertedObject;
        } else {
          result[key] = data[key];
        }
      }

      return result;
    }

    const convertido = convertArraysToObjects(espacioInfo);

    // Elimino otros para guardar en el inputValue
    delete convertido.otros;

    console.log(convertido);
    setInputValue(convertido);
  };

  // Fetchea en la primera carga
  useEffect(() => {
    fetchData();
  }, []);

  // Fetchea cuando se le da focus a la pagina carga
  useEffect(() => {
    // Agrega un controlador de eventos para el evento de foco
    window.addEventListener('focus', () => fetchData());
    // console.log('Fui focusiado');

    // Elimina el controlador de eventos cuando el componente se desmonte
    return () => {
      window.removeEventListener('focus', () => fetchData());
      // console.log('Fui focusiado');
    };
  }, []);

  console.log(inputValue);

  return (
    <Layout title="Gestionar tu Espacio">
      <section className="py-3">
        <h1>Gestionar tu Espacio</h1>

        <form action="#" className="row" onSubmit={submitPropiedad}>
          <div className="col-12 col-md-6">
            <div className="border border-2 border-danger p-2 rounded">
              <Fotos sobre="propiedad" limite={10} />

              <DetallesMueble
                inputValues={inputValue}
                onChangeInputValue={onChangeInputValue}
              />

              <OfreceAlojamiento
                values={inputValue.alojamientoPropiedad}
                onChecked={onCheckedAlojamiento}
                otros={inputValue.alojamientoPropiedad?.otros}
                listOtros={otros.alojamiento}
                setOtros={onSaveOtros}
                onDeleteOtros={onDeleteOtros}
                onChangeInputValue={onChangeInputValue}
              />

              <AmenidadesZona
                values={inputValue.amenidadesPropiedad}
                onChecked={onCheckedAmenidades}
                otrosLugares={inputValue.amenidadesPropiedad?.otrosLugares}
                listOtros={otros.amenidades}
                setOtros={onSaveOtros}
                onDeleteOtros={onDeleteOtros}
                onChangeInputValue={onChangeInputValue}
                inputValues={inputValue}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="border border-2 border-danger p-2 rounded">
              <Fotos sobre="scort" limite={5} />
              <TuGenero
                onChecked={onCheckedGenero}
                values={inputValue.generoScort}
              />
              <ServicioOfrecidoA
                onChecked={onCheckedOfrecido}
                onChangeInputValue={onChangeInputValue}
                inputValues={inputValue}
                values={inputValue?.ofrecidoScort}
              />

              <button type="submit" className="btn btn-primary">
                Salvar y Continuar
              </button>
            </div>
          </div>
        </form>
      </section>
    </Layout>
  );
};

perfil.auth = true;
export default perfil;
