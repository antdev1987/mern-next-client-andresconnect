import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [onHover, setOnHover] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      containerClassName=""
      flipSpeedBackToFront={2}
      flipSpeedFrontToBack={2}
    >
      <div className="flipCard flipCard--front p-1">
        <div
          className="flipCard-images"
          onMouseOver={() => {
            console.log(onHover), setOnHover(true);
          }}
          onMouseLeave={() => setOnHover(false)}
        >
          <Carousel interval={onHover ? 1500 : null} pause={false}>
            <Carousel.Item>
              <img
                src={
                  'https://a0.muscache.com/im/pictures/857ae784-efa8-426c-b9a2-222a267ff3e2.jpg?im_w=720'
                }
                loading="lazy"
                decoding="async"
                width={250}
                height={200}
                className="img-house"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={
                  'https://a0.muscache.com/im/pictures/58b74c9c-e0b6-4a52-8cea-7dd95ddbaa5d.jpg?im_w=720'
                }
                loading="lazy"
                decoding="async"
                width={250}
                height={200}
                className="img-house"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={
                  'https://a0.muscache.com/im/pictures/4936b993-2d49-4f02-adc8-f182351d6e82.jpg?im_w=720'
                }
                loading="lazy"
                decoding="async"
                width={250}
                height={200}
                className="img-house"
              />
            </Carousel.Item>
            
          </Carousel>
        </div>

        <div className="Content px-3 mt-3 fs-6">
          <div className="profile d-inline-flex align-items-center gap-2">
            <img
              src="https://a0.muscache.com/im/pictures/user/User-167065374/original/56a96e89-588b-4406-93d0-57eecdf662c1.jpeg?im_w=240"
              alt=""
              loading="lazy"
              decoding="async"
              height={50}
              width={50}
              onClick={handleClick}
              className="img-profile pointer"
            />

            <p className="fw-bold m-0">
              Jose Ignacio
              <span className="d-block fw-light pointer" onClick={handleClick}>
                Ver Perfil
              </span>
            </p>
          </div>

          <div className="d-flex justify-content-between gap-2 fs-6 mt-2">
            <h3 className="mb-0 fs-6">San Ramon, Costa Rica</h3>

            <i className="bi bi-star-fill ms-auto"></i>
            <p className="mb-0"> 4.86</p>
          </div>
          <span className="d-block">Stay with riley - artist</span>
          <span className="d-block">Aug 5 - 10</span>
          <p>
            <span className="fw-bold">L1,914 HNL</span> night
          </p>
        </div>
      </div>

      <div className="flipCard flipCard--back p-1">
        <div className="profile text-center pt-2">
          <img
            src="https://a0.muscache.com/im/pictures/user/User-167065374/original/56a96e89-588b-4406-93d0-57eecdf662c1.jpeg?im_w=240"
            alt=""
            loading="lazy"
            decoding="async"
            height={100}
            width={100}
            onClick={handleClick}
            className="img-profile pointer"
          />

          <h3 className="mb-0 mt-2">John Doe</h3>
          <p className="text-muted mb-0 mt-2">Starting hosting in</p>
        </div>

        <ul className="mt-3 scroll">
          <li>
            <i className="bi bi-briefcase text-danger"></i>
            <span className="ms-2">My work: Artist</span>
          </li>
          <li className="mt-2">
            <i className="bi bi-briefcase text-danger"></i>
            <span className="ms-2">Speaks: English, Spanish</span>
          </li>
          <li className="mt-2">
            <i className="bi bi-briefcase text-danger"></i>
            <span className="ms-2">Lives in: Mexico City, Mexico</span>
          </li>
          <li className="mt-2">
            <i className="bi bi-briefcase text-danger"></i>
            <span className="ms-2">Born: 1 de Nov de 2023</span>
          </li>
        </ul>

        <button className="w-100 btn btn-outline-danger">Mostrar Mas</button>

        <i
          className="back bi bi-arrow-return-left fs-2 curosr-pointer text-danger"
          onClick={handleClick}
        ></i>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
