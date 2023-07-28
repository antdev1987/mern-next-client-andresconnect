import Link from 'next/link';
import React from 'react';

const ProcessBarComp = ({ step }) => {
  return (
    <div className="row my-4 mx-auto text-center">
      <div
        className={`${
          step > 0 && ' border-bottom border-3 border-warning'
        } col-2 text-muted`}
      >
        Unirse
      </div>

      <div
        className={`${
          step > 1 && ' border-bottom border-3 border-warning'
        } col-3`}
      >
        <Link className="text-decoration-none" href="/perfil-form-1">
          Paso 1
        </Link>
      </div>

      <div
        className={`${
          step > 2 && ' border-bottom border-3 border-warning'
        } col-2 text-muted`}
      >
        <Link className=" text-decoration-none" href="/perfil-form-2">
          Paso 2
        </Link>
      </div>

      <div
        className={`${
          step > 3 && ' border-bottom border-3 border-warning'
        } col-2 text-muted`}
      >
        <Link className=" text-decoration-none" href="/perfil-form-3">
          Paso 3
        </Link>
      </div>

      <div
        className={`${
          step > 4 && ' border-bottom border-3 border-warning'
        } col-3 text-muted`}
      >
        <Link className=" text-decoration-none" href="/perfil-form-4">
          Paso 4
        </Link>
      </div>
    </div>
  );
};

export default ProcessBarComp;
