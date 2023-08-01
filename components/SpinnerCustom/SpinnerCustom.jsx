import { context } from '@/context/ContextProvider';

import React, { useContext } from 'react';

const SpinnerCustom = () => {
  const { state } = useContext(context);

  // console.log(state, 'espiner')
  return (
    <>
      {state.isLoading && (
        <div className={`spinnerCustom`}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="fs-3 mt-2">loading...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SpinnerCustom;
