import React, { useReducer } from 'react';

export const context = React.createContext();

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case 'PERSONAL_INFO':
      return { ...state, personalInfo: action.payload };

    case 'PROPIEDAD_INFO':
      return { ...state, propiedadInfo: action.payload };

    case 'DIRECCION_INFO':
      return { ...state, direccionInfo: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};
