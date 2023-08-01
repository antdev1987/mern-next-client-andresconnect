import Layout from "@/components/Layout/Layout";
import React, { useContext, useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { context } from "@/context/ContextProvider";
import Link from "next/link";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session, "sever side props");

  if (session == null) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (!session.user.isVerificationProcess) {
    return {
      redirect: {
        destination: "/perfil-form-1",
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

  useEffect(() => {
    if (!session?.user) return;

    // console.log(session, 'useffect');

    if (!session?.user?.isVerificationProcess) {
      router.push("/perfil-form-1");
    }
    console.log("verificando loop");
  }, [session]);

  // console.log(session, '1');

  const chooseOnMap = () => {
    router.push("/mapScreen");
  };

  return (
    <Layout>
      <section className="py-3">
        <h1>Gestionar tu Espacio</h1>

        <div className="card">
          <h5 className="card-header">
            Elige tu Ubicacion <i className="bi bi-globe-americas"></i>
          </h5>

          <div className="card-body">
            <h5 className="card-title">Tu ubicacion en google maps</h5>
            <p className="card-text">
              Este botón solo estará habilitado una vez, así que asegúrate de
              tener tiempo disponible para hacerlo correctamente, es fácil y
              rápido,.
            </p>
            <Link href="/mapScreen" className="btn btn-primary">
              Mapa
            </Link>
          </div>
        </div>

        <div className="card mt-3">
          <h5 className="card-header">
            Gestiona tu Propiedad <i className="bi bi-building-fill-gear"></i>
          </h5>

          <div className="card-body">
            <h5 className="card-title">Describe tu Propiedad</h5>
            <p className="card-text">
              Aquí es donde puedes tener el control total sobre tu propiedad. Al hacer clic en este botón, podrás acceder a un
              formulario completo de opciones para describir tu
              inmueble de manera fácil y efectiva.
            </p>
            <Link href="#" className="btn btn-primary">
              Propiedad
            </Link>
          </div>
        </div>

        <div className="card mt-3">
          <h5 className="card-header">
            Gestiona mi Imagen <i className="bi bi-person-fill-lock"></i></h5>

          <div className="card-body">
            <h5 className="card-title">Describe tu Personalidad</h5>
            <p className="card-text">
            Descríbete, comparte tus intereses y pasiones. ¡Sé único(a)! Carga tus fotos favoritas y muestra tu estilo. ¡Conéctate! Somos diferentes y eso nos hace especiales. Únete y sé tú.
            </p>
            <Link href="#" className="btn btn-primary">
              Scort
            </Link>
          </div>
        </div>



      </section>



    </Layout>
  );
};

perfil.auth = true;
export default perfil;
