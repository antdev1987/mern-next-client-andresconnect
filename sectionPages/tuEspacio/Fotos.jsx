'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

import { uploadCloudinary } from '@/utils/upload';
import getError from '@/utils/getError';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import style from './Fotos.module.css';

export const Fotos = ({ sobre, limite }) => {
  const { data: session, update: sessionUpdate, status } = useSession();
  const config = {
    headers: { Authorization: `Bearer ${session.user.token}` },
  };

  // Imagenes localmente
  const [files, setFiles] = useState([]);
  // Imagenes en la nube
  const [gallery, setGallery] = useState([]);
  ///////////
  const [loading, setLoading] = useState(false);

  // Agarrar las imagenes de la nube
  useEffect(() => {
    const cloudImages = async () => {
      const { data } = await axios.get(
        `${process.env.BASE_URL}/espacio/publicar`,
        config
      );

      console.log(data);
      // sobre puede ser = propiedad o scort
      if (!data) return;
      setGallery(data[`${sobre}Img`] || []);
    };

    cloudImages();
  }, []);

  // Agarra y mete en un array normal, las imagenes escogidas
  const test = (e) => {
    const files = Array.from(e.target.files || []);
    console.log(files);
    setFiles(files);
  };

  // Elimina una Imagen
  const deleteTest = async (id, publicId) => {
    // e.preventDefault();
    if (publicId) {
      console.log(publicId);
      try {
        await axios.delete(
          `${process.env.BASE_URL}/espacio/publicar?publicId=${publicId}&sobre=${sobre}`,
          config
        );
        // Si hay publicId, borra la imagen en cloudinary y tambien localmente
        const deleteLocal = gallery.filter((item, idx) => idx !== id);
        setGallery(deleteLocal);
      } catch (error) {
        toast.error(getError(error));
      }
    } else {
      // borra localmente la imagen escogida
      const deleteLocal = files.filter((item, idx) => idx !== id);
      setFiles(deleteLocal);
    }

    // console.log(idx);
  };

  // Coloca una imagen al inicio convirtiendolo en primaria
  const onPrimaryImg = (id) => {
    // Elimina primero la imagen, luego guarda en un nuevo array
    const changePlace = gallery.filter((item, idx) => idx !== id);
    // Agarra la imagen que queremos poner de primario desde gallery y lo mete en el nuevo array
    changePlace.unshift(gallery[id]);
    // Metiendo el cambio a gallery
    setGallery(changePlace);
  };

  const testing = async () => {
    console.log(gallery.length);
    console.log(limite, 'limite');
    const limit = gallery.length ? limite - gallery.length : limite;

    console.log(limit, 'limit');
    console.log(files.length);

    if (files.length > limit) {
      // alert(`El limite de fotos es de ${limite}`)
      toast.warning(
        `El limite de fotos es de ${limite}, Cantidad Disponible: ${
          limite - gallery.length
        }`
      );
      return;
    }
    setLoading(true);

    // alert('paso');

    // return;
    try {
      let imgData = [];
      for (let i = 0; i < files.length; i++) {
        const imgObj = await uploadCloudinary(files[i], 1200, 1000, 80, sobre);
        imgData.push(imgObj);
      }
      console.log(imgData);
      const form = {
        [`${sobre}Img`]: imgData,
      };
      const { data } = await axios.post(
        `${process.env.BASE_URL}/espacio/publicar`,
        form,
        config
      );
      setGallery(data[`${sobre}Img`]);
      console.log(data);
    } catch (error) {
      console.log(getError(error));
      toast.warning('Upss vuelve a intentarlo porfavor');
    } finally {
      setLoading(false);
      setFiles([]);
      toast.success('La imagen fue guardado');
    }
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <h2 className="text-secondary mt-3">Subir fotos de la {sobre}</h2>

      <label className="btn btn-outline-danger" htmlFor={`subirImg${sobre}`}>
        Subir imagenes
      </label>
      <input
        id={`subirImg${sobre}`}
        type="file"
        multiple
        onChange={test}
        value=""
        className="d-none"
      />

      {files.length ? (
        <>
          <div className={`${style.grid} w-100 gap-3 mt-3`}>
            {files.map((object, idx) => (
              <div
                key={idx}
                className={`${style.imgBox} position-relative text-center mt-3`}
              >
                <Image
                  loading="lazy"
                  src={URL.createObjectURL(object)}
                  alt="upload image"
                  width={70}
                  height={70}
                />
                <button
                  className="position-absolute btn btn-outline-danger"
                  type="button"
                  onClick={() => deleteTest(idx)}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={testing}
            className="btn btn-outline-danger mt-3"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Subir a la nube'}
          </button>
        </>
      ) : null}

      <h5 className="text-secondary py-3">
        Imagenes subida en la nube {gallery.length} de {limite}
      </h5>

      <div className="w-100">
        <Swiper
          style={{
            '--swiper-navigation-color': 'red',
            '--swiper-pagination-color': 'red',
            '--swiper-pagination-bottom': '0',
            padding: '0 10px',
          }}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          // navigation={true}
          pagination={true}
          modules={[FreeMode, Pagination]}
          className="scort-pagination scort-pagination--gallery"
        >
          {gallery.map(({ url, publicId }, idx) => (
            <SwiperSlide key={publicId}>
              <div className={`${style.imgBox} position-relative h-100`}>
                <img
                  src={url}
                  decoding="async"
                  className="h-100"
                  onClick={() => onPrimaryImg(idx, publicId)}
                />
                <button
                  className="position-absolute btn btn-outline-danger"
                  type="button"
                  onClick={() => deleteTest(idx, publicId)}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
