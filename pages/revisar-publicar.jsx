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
    <Layout title="Gestionar tu Espacio">
      <div>
        <h2>Aqui van: </h2>

        <ul>
          <li>El titulo</li>
          <li>El precio</li>
          <li>El boton de google map</li>
          <li>foto de perfil</li>
        </ul>

        <Link href="/tu-espacio2" className="btn btn-primary">
          Guardar Cambios
        </Link>
      </div>
    </Layout>
  );
};

perfil.auth = true;
export default perfil;
