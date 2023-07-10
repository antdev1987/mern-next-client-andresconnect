import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import Layout from '@/components/Layout/Layout';

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

const Scort = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Layout title="Scort">
      <section>
        <div className="row">
          <div className="scort-carusel col-12 col-md-8">
            <Swiper
              loop={true}
              // install Swiper modules
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              effect="fade"
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[EffectFade, FreeMode, Navigation, Thumbs]}
              className="scort-swiper"
            >
              {urls.map((url, idx) => (
                <SwiperSlide key={idx - 1}>
                  <img src={url} />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              loop={true}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={9}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="scort-pagination"
            >
              {urls.map((url, idx) => (
                <SwiperSlide key={idx + 1}>
                  <img src={url} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-12 col-md-4">
            <div className="scort-cart"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scort;
