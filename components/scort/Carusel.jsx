import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import LightGallery from 'lightgallery/react';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const Carusel = ({imgs}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const buttonRef = useRef(null);
  const gallery = useRef(null);

  const handleClick = (i) => {
    const imagesOpen = gallery.current.querySelectorAll('a')[i];
    imagesOpen.click();

    // si se quita el console.log deja de funcionar el zoom de imagen
    console.log();
  };
  return (
    <>
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
        className={`scort-swiper ${
          imgs.isMujerImgsActive ? 'mujerView' : null
        }`}
      >
        {imgs.urls.map((url, idx) => (
          <SwiperSlide key={idx - 1}>
            <img
              src={url}
              onClick={() => handleClick(idx)}
              ref={buttonRef}
              loading="lazy"
              decoding="async"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div ref={gallery} className="d-none">
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          {imgs.urls.map((url, idx) => (
            <a data-src={url} key={`${idx + 100}`}>
              <img src={url} alt="" loading="lazy" decoding="async" />
            </a>
          ))}
        </LightGallery>
      </div>

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
        {imgs.urls.map((url, idx) => (
          <SwiperSlide key={idx + 1}>
            <img src={url} decoding="async" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carusel;
