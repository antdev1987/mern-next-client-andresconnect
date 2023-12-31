import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout/Layout';
import { ToastContainer, toast } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';

import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from '@/context/ContextProvider';
import SpinnerCustom from '@/components/SpinnerCustom/SpinnerCustom';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ContextProvider>
      <SpinnerCustom />
      <GoogleOAuthProvider clientId={`${process.env.GOOGLE_ID}`}>
        <SessionProvider session={session}>
          {/* <StoreProvider> */}
          <ToastContainer />

          {Component.auth ? (
            <Auth adminOnly={Component.auth.adminOnly}>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
          {/* </StoreProvider> */}
        </SessionProvider>
      </GoogleOAuthProvider>
    </ContextProvider>
  );
}

//this is for protected routes
function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { query } = router;

  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      toast.error('you are not Logged in');
      router.push('/login');
    },
  });

  if (status === 'loading') {
    return (
      <Layout>
        <div>Loading</div>
      </Layout>
    );
  }

  if (adminOnly && !session.user.isAdmin) {
    toast.warning('you are not admin');
    router.push('/cart');
  }

  return children;
}
