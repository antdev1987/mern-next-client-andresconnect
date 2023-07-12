import React from 'react';
import Link from 'next/link';

const Content = () => {
  return (
    <>
      <p className="fw-light">Toda la casa</p>
      <h1 className="fs-3">
        Purple Jawfish Beach House On Private White Sand Beach in Front of
        Amazing Reef!
      </h1>

      <div className="fs-4">
        <i className="bi bi-star-fill"></i>

        <span className="ms-3 fw-bold">4.7/5 Exceptional</span>
      </div>

      <div className="mt-2">
        <Link href="#">Mirar todas las rese;as</Link>
      </div>

      <div className="mt-4">
        <h3 className="mb-3">Entire Home</h3>

        <ul className="d-flex flex-wrap">
          <li className="d-flex gap-2 w-50">
            <i class="bi bi-door-open"></i>
            <p>1 bedroom</p>
          </li>
          <li className="d-flex gap-2 w-50">
            <i class="bi bi-door-open"></i>
            <p>1 bedroom</p>
          </li>
          <li className="d-flex gap-2 w-50">
            <i class="bi bi-door-open"></i>
            <p>1 bedroom</p>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="mb-3">Servicios</h3>

        <ul className="d-flex flex-wrap">
          <li className="d-flex gap-2 w-50">
            <i class="bi bi-door-open"></i>
            <p>1 bedroom</p>
          </li>
          <li className="d-flex gap-2 w-50">
            <i class="bi bi-door-open"></i>
            <p>1 bedroom</p>
          </li>
          <li className="d-flex gap-2 w-50">
            <i class="bi bi-door-open"></i>
            <p>1 bedroom</p>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="mb-3">Room & Beds</h3>

        <ul className="d-flex flex-wrap">
          <li className="d-flex gap-2 w-50">
            <i class="bi bi-door-open"></i>
            <p>1 bedroom</p>
          </li>
          <li className="d-flex gap-2 w-50">
            <i class="bi bi-door-open"></i>
            <p>1 bedroom</p>
          </li>
          <li className="d-flex gap-2 w-50">
            <i class="bi bi-door-open"></i>
            <p>1 bedroom</p>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="mb-3">About this property</h3>

        <div className="ps-4">
          <h2 className="fs-5">
            Purple Jawfish Beach House On Private White Sand Beach in Front of
            Amazing Reef!
          </h2>

          <p className="mt-3">
            This beachfront house is not large but has a sizeable open floor
            plan that is perfect for a couple on a romantic island getaway.
            Situated on a private beach replete with coconut bearing palms and a
            prevailing eastern trade wind, the Purple Jawfish Beach House has
            been called the best vacation rental for couples by numerous guests
            on other vacation rental websites. The house has recently been
            gut-renovated and is like new. The kitchen area, dining area,
            sitting/reading area and sleeping area are all well defined by
            unique counters, a Honduran hardwood custom bookshelf and an
            armoire. The kitchen features all new stainless steel appliances (no
            dishwasher though) and a sunken deep sink on a unique penny
            peninsula countertop. There are 20 feet of 4 foot high windows on
            the front and sides of the house (15 feet of them look directly out
            over the beach to the Caribbean sea and the mountains beyond). It is
            truly amazing to see.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="mb-3">About the Scort</h3>

        <div className="ps-4">
          <div className="d-flex flex-sm-row align-items-center gap-2">
            <img
              src="https://a0.muscache.com/im/pictures/user/User-167065374/original/56a96e89-588b-4406-93d0-57eecdf662c1.jpeg?im_w=240"
              alt="profile"
              loading="lazy"
              decoding="async"
              height={100}
              width={100}
              className="object-fit-cover scort-profile"
            />
            <div>
              <h2 className="fs-5">Riley</h2>
              <p className="fs-6">Started hosting in 2022</p>
            </div>
          </div>

          <ul className="fs-6 mt-4 ps-0">
            <li className="d-flex gap-2">
              <i class="bi bi-briefcase"></i>

              <p>My Work: Artist</p>
            </li>

            <li className="d-flex gap-2 mt-1">
              <i class="bi bi-briefcase"></i>

              <p>My Work: Artist</p>
            </li>

            <li className="d-flex gap-2 mt-1">
              <i class="bi bi-briefcase"></i>

              <p>My Work: Artist</p>
            </li>

            <li className="d-flex gap-2 mt-1">
              <i class="bi bi-briefcase"></i>

              <p>My Work: Artist</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="mb-3">La Ubicacion</h3>

        <div className="bg-danger w-100" style={{ height: '300px' }}></div>
      </div>

      <div className="mt-4">
        <h3 className="mb-3">
          General Reviews:{' '}
          <span className="fs-2 fw-bold text-danger">4.7/5</span>
        </h3>

        <div className="scort-review ps-4">
          <p className="fs-5 fw-bold mb-0">
            <span className="text-danger">5/5</span> Excellent
          </p>

          <p className="fw-bold mb-0 text-danger">Lisa E.</p>
          <p className="fw-light mb-0">Jul 1, 2023</p>

          <p className="fs-4 mt-1 mb-1 text-danger">Beautiful view!</p>
          <p className="fw-light">
            Other than the bugs it was a great stay! We have stayed here one
            other time 5 years ago and really like the location. The snorkeling
            was fabulous.
          </p>

          <p className="fw-light mb-0">Stayed 7 nights in May 2023</p>
        </div>

        <div className="scort-review ps-4">
          <p className="fs-5 fw-bold mb-0">
            <span className="text-danger">5/5</span> Excellent
          </p>

          <p className="fw-bold mb-0 text-danger">Lisa E.</p>
          <p className="fw-light mb-0">Jul 1, 2023</p>

          <p className="fs-4 mt-1 mb-1 text-danger">Beautiful view!</p>
          <p className="fw-light">
            Other than the bugs it was a great stay! We have stayed here one
            other time 5 years ago and really like the location. The snorkeling
            was fabulous.
          </p>

          <p className="fw-light mb-0">Stayed 7 nights in May 2023</p>
        </div>
      </div>
    </>
  );
};

export default Content;
