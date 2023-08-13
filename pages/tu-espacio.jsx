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
const perfil = () => {
  const { data: session } = useSession();
  const { dispatch } = useContext(context);
  const router = useRouter();

  const [inputValue, setInputValue] = useState({
    invitados: 0,
    cantidadHabitaciones: 0,
    cantidadParqueo: 0,
    cantidadBathrooms: 0,
  });

  const onChangeInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value.trim() });
  };

  const onChecked = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.checked });
  };

  return (
    <Layout title="Gestionar tu Espacio">
      <section className="py-3">
        <h1>Gestionar tu Espacio</h1>

        <form action="#" className="d-flex flex-column flex-sm-row gap-5">
          <div className="flex-1">
            <Fotos sobre="propiedad" />

            <DetallesMueble onChangeInputValue={onChangeInputValue} />

            <OfreceAlojamiento onChecked={onChecked} otros={inputValue.otros} />

            <AmenidadesZona
              onChecked={onChecked}
              otrosLugares={inputValue.otrosLugares}
            />

            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </div>
          <div className="flex-1">
            <Fotos sobre="scurt" />

            <TuGenero onChecked={onChecked} />

            <ServicioOfrecidoA onChecked={onChecked} />

            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

perfil.auth = true;
export default perfil;
