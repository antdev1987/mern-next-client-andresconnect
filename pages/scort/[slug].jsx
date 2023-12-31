import Layout from '@/components/Layout/Layout';
import Carusel from '@/components/scort/Carusel';
import Content from '@/components/scort/Content';
import Reservar from '@/components/scort/Reservar';

import { useEffect, useState } from 'react';

const urls = [
  'https://a0.muscache.com/im/pictures/8100433b-35ec-41c7-a4b1-ca32fb219071.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/miso/Hosting-15915358/original/681d5791-f60b-4923-9963-519584a364d1.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/018c4a84-17c0-4983-8c41-b845f06c5cc0.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/76c5abf1-b573-4e00-9fcc-053f92c990e4.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/6991811e-2f71-46cd-89e5-a3d53943ac7c.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/d398077e-9f4a-49ce-9d9d-fce5e2d0b73e.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-15915358/original/c6ead0ce-6d54-407d-9c2e-b53bce3eefe5.png?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-15915358/original/9adbd166-1c0c-4e05-9309-763238aab5f5.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/9b914e68-cce2-48a7-a4e8-7a16c6e9d685.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/7b5ad0a6-c581-494d-bb3e-58109b143846.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/217d22f2-ce61-4807-a1a2-c0863b4c5592.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-15915358/original/8067a1a6-1fd4-4691-8b52-4a2382552efe.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/291ee091-bab1-4262-8bdb-d71aa520296c.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/e859f006-5aab-4c58-acd7-15b9987c38b9.jpg?im_w=1200',
];

const urlsMujeres = [
  'https://images.unsplash.com/photo-1593800026384-910bd6ad5c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
  'https://images.unsplash.com/photo-1594252134118-59777a4657ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80',
  'https://images.unsplash.com/photo-1620840167767-b11a4c8ca62a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1608915812295-417351ccf39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1537881483598-4fe07a1ad68a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1601474348599-ed21570e9118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1612621616353-a0d6396113e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',
  'https://images.unsplash.com/photo-1657414323167-ae4a5813202b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80',
];

const Scort = () => {
  const [imgs, setImgs] = useState({ isMujerImgsActive: false, urls: [] });

  const changeImgToMujeres = () => {
    setImgs({ isMujerImgsActive: true, urls: urlsMujeres });
  };

  const changeImgToHogar = () => {
    setImgs({ isMujerImgsActive: false, urls: urls });
  };

  useEffect(() => {
    setImgs({ ...imgs, urls });
  }, []);
  return (
    <Layout title="Scort">
      <section className="scort">
        <div className="py-3">
          {imgs.isMujerImgsActive ? (
            <button
              className="btn btn-outline-danger py-1"
              onClick={changeImgToHogar}
            >
              Cambiar a Hogares
            </button>
          ) : (
            <button
              className="btn btn-outline-danger py-1"
              onClick={changeImgToMujeres}
            >
              Cambiar a Mujeres
            </button>
          )}
        </div>
        <div className="row">
          <div className="scort-carusel col-12 col-md-8">
            <div className="scort-caruselBox">
              <Carusel imgs={imgs} />
            </div>

            <div>
              <Content />
            </div>
          </div>
          <div className="d-none d-md-block col-md-4">
            <Reservar />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scort;
