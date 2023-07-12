import Layout from '@/components/Layout/Layout';
import CalenderPick from '@/components/scort/CalenderPick';
import Carusel from '@/components/scort/Carusel';

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
              <h1>Contenido</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, tempora. Iure quos architecto officia in perferendis
                non sed nobis iste nesciunt, blanditiis ullam, ex cumque
                assumenda voluptate necessitatibus omnis. Nesciunt reiciendis at
                nisi porro, distinctio reprehenderit possimus sapiente,
                dignissimos dolorem repudiandae voluptas iure voluptatum? Porro
                a exercitationem dicta eveniet blanditiis obcaecati iusto iure.
                Ratione tempora quibusdam cumque incidunt accusantium. Rem
                perspiciatis commodi perferendis, aliquid aspernatur impedit non
                obcaecati maxime incidunt sunt, dicta quaerat quia, voluptates
                doloremque. Hic, natus dolores. Minima consectetur fuga harum
                voluptatum repellat. Eveniet et eum vel ad velit, nulla
                voluptate neque at cumque eius amet quod voluptatum incidunt
                aliquam, obcaecati porro aliquid assumenda illum beatae.
                Praesentium aspernatur illum doloremque dolore hic a repellat
                mollitia magnam quos quam optio et similique tempore unde
                officiis natus culpa consectetur eveniet amet soluta itaque,
                assumenda illo eius? Perspiciatis nobis voluptatem quaerat,
                libero tempora ipsam odio cum saepe modi omnis magnam quo
                suscipit quod perferendis minus molestias beatae magni
                laudantium blanditiis accusamus laborum. Minima officiis saepe
                fugit earum tempora autem at rerum ipsum sequi dolorum explicabo
                pariatur voluptas ex enim debitis officia ipsam dignissimos
                nulla cum itaque vel, possimus assumenda deleniti. Commodi qui
                laudantium deleniti tempora iste facere quibusdam iusto error
                cumque sint repellendus vel itaque quo asperiores numquam quidem
                expedita, exercitationem quod corrupti praesentium? Reiciendis
                voluptates aspernatur sed dolorem nam? Non, sit! Soluta dolorem
                magnam ipsam dolorum atque in minus, quos culpa id quo omnis
                doloremque provident, hic quaerat molestias quia dicta aperiam
                itaque. Laborum et quas assumenda obcaecati minima similique
                neque. Excepturi nam deserunt obcaecati dolorem iusto.
                Exercitationem ut ratione sequi repellendus totam voluptas
                deserunt consectetur tenetur eos, incidunt blanditiis natus
                perferendis, ducimus sint quia nam. Soluta odit ullam,
                perferendis unde, reiciendis quis tempora vero voluptatum maxime
                velit libero doloremque aliquam itaque voluptas reprehenderit?
                Debitis neque pariatur at illum maiores beatae, assumenda magni
                facere rem atque delectus. Suscipit architecto deleniti
                voluptates unde quasi omnis ipsam, esse expedita corporis
                asperiores earum eaque delectus molestias doloremque consectetur
                accusamus voluptatibus sunt labore rerum molestiae blanditiis
                in? Accusamus, quidem similique? Aut iusto, enim optio
                consectetur nulla quo voluptates quam minus! Tempora repellendus
                eos dignissimos quaerat repellat non atque obcaecati blanditiis
                eius, facilis rerum illum explicabo, eum quidem minima ullam
                libero! Aut delectus dolore explicabo praesentium quam velit ex!
                Ea tenetur dicta eius! Tempore maiores illo beatae esse
                inventore! Rerum quidem dolorem debitis assumenda quos aliquam
                similique a unde, error aperiam officia explicabo iure esse eius
                veniam rem cumque ab quam reprehenderit magni vitae tenetur
                ullam. Veniam possimus fuga praesentium voluptas maxime corporis
                nobis, saepe ipsa minus repellat soluta fugiat pariatur officiis
                mollitia illo amet? Magnam molestias nam quae consequatur libero
                quis eius amet, rerum numquam et dolore sed, consequuntur
                repellat reiciendis. Quo reprehenderit, rem, neque hic quas
                ducimus aliquid itaque quia iure beatae modi sequi commodi magni
                voluptatem eveniet dolorum veritatis ex ratione! Quos sit
                corrupti eius explicabo nostrum optio libero nulla ipsam eum
                quis autem, sequi veritatis molestias culpa! Fugit totam ullam
                voluptatum perspiciatis exercitationem. Sunt magnam officiis
                veritatis soluta cum qui est?
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="scort-cart py-3 px-2">
              <p>
                <span className="fs-4 fw-bold">$107</span> avg per night
              </p>

              <label className='d-block'>
                <span>
                  Empieza:
                </span>
                <input
                  type="date"
                  name="start"
                  placeholder="funciona"
                  className="d-block w-100 scort-cartInput mt-1"
                />
              </label>

              <label className='d-block mt-3'>
                <span>
                  Termina:
                </span>
                <input
                  type="date"
                  name="start"
                  placeholder="funciona"
                  className="d-block w-100 scort-cartInput mt-1"
                />
              </label>

              <CalenderPick />

              <button className='btn btn-outline-danger w-100 mt-3'>Reservar</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scort;
