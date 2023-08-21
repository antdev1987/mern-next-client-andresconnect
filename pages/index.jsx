import Buscador from '@/components/Home/Buscador';
import FlipCard from '@/components/Home/FlipCard';
import Layout from '@/components/Layout/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [publicacion, setPublicacion] = useState([]);

  // useEffect(() => {
  //   const fetchingPublicacion = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${process.env.BASE_URL}/espacio/publicaciones`
  //       );
  //       console.log(data, ' AQUI');
  //       setPublicacion(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchingPublicacion();
  // }, []);

  console.log(publicacion);
  return (
    <Layout title="Home">
      <div className="sticky py-3">
        <Buscador />
      </div>
      <div className="row">
        {publicacion.map((item) => (
          <div key={item._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <FlipCard {...item}/>
          </div>
        ))}

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
      </div>
    </Layout>
  );
}
