import { UserReducer } from '@/context';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <UserReducer>
      <Component {...pageProps} />
    </UserReducer>
  );
}
