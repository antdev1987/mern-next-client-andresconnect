import React from 'react';
import CalenderPick from '@/components/scort/CalenderPick';
import Link from 'next/link';

const Reservar = () => {
  return (
    <div className="scort-cart py-3 px-4">
      <p className="border-bottomRed pb-3">
        <span className="fs-4 fw-bold text-danger">$107</span> avg per night
      </p>

      {/* <label className="d-block">
        <span>Empieza:</span>
        <input
          type="date"
          name="start"
          placeholder="funciona"
          className="d-block w-100 scort-cartInput mt-1"
        />
      </label>

      <label className="d-block mt-3">
        <span>Termina:</span>
        <input
          type="date"
          name="start"
          placeholder="funciona"
          className="d-block w-100 scort-cartInput mt-1"
        />
      </label> */}

      <CalenderPick />

      <button className="btn btn-danger w-100 mt-3">Reservar</button>

      <ul className="ps-0 mt-3 mb-0">
        <li className="d-flex justify-content-between">
          <Link href="#" className="text-dark">
            L3,852 HNL x 5 nights
          </Link>

          <p>L19,260 HNL</p>
        </li>
        <li className="d-flex justify-content-between border-bottomRed">
          <Link href="#" className="text-dark">
            Airbnb service fee
          </Link>

          <p>L2,260 HNL</p>
        </li>
        <li className="d-flex justify-content-between pt-3">
          <p className='mb-0'>Total before taxes</p>

          <p className='mb-0'>L2,260 HNL</p>
        </li>
      </ul>
    </div>
  );
};

export default Reservar;
