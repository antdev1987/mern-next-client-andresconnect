import Layout from '@/components/Layout/Layout';
import React, { useContext, useEffect } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { context } from '@/context/ContextProvider';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session, 'sever side props');

  if(session == null){
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

  useEffect(() => {
    if (!session?.user) return;

    console.log(session, 'useffect');

    if (!session?.user?.isVerificationProcess) {
      router.push('/perfil-form-1');
    }
    console.log('verificando loop');
  }, [session]);

  console.log(session, '1');
  return (
    <Layout>
      <h1>perfil</h1>
    </Layout>
  );
};


perfil.auth = true
export default perfil;
