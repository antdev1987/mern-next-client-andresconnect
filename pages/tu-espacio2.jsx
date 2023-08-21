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
import Link from 'next/link';

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
      toast.success('Cambios realizados');
    } catch (error) {
      toast.error(getError(error));
    }
  };

  console.log(inputValue);

  return (
    <Layout title="Espacio 2">
      <div>
        <div className="p-3 text-center bg-warning">
          <h4>
            En estos momentos tu solicitud esta siendo revisada, este proceso
            podria tardar hasta 72 horas
          </h4>
        </div>

        <h1 className="text-center mt-5 text-secondary">
          Configuracion de tu Espacio
        </h1>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className=" border border-3 mx-auto mt-5 shadow">
              <div className="text-center bg-warning px-3">
                <p className="fs-5 text-uppercase py-2 fw-bold">
                  Estas opciones estaran desabilitadas hasta que su cuenta sea
                  verificada
                </p>
              </div>
              <div className="text-center">
                <button disabled className="btn btn-primary">
                  Editar
                </button>
                <button disabled className="btn btn-info  mx-3">
                  Pausar
                </button>
                <button disabled className="btn btn-danger">
                  Elimnar
                </button>
                {/* <button  className='btn btn-danger'>Elimnar</button> */}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className=" border border-3 mx-auto mt-5 shadow">
              <div className="text-center px-3">
                <p className="fs-5 text-uppercase py-2 fw-bold">
                  No tienes ninguna orden
                </p>
              </div>


              <div className="text-center">
                <button disabled className="btn btn-primary">
                  Pendientes
                </button>
                <button disabled className="btn btn-info  mx-3">
                  Realizados
                </button>
                <button disabled className="btn btn-danger">
                  Cancelados
                </button>
                {/* <button  className='btn btn-danger'>Elimnar</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

perfil.auth = true;
export default perfil;