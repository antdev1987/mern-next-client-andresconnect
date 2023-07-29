import React, { useReducer } from 'react';

export const context = React.createContext();

const initialState = {
  personalInfo:
    (typeof window !== 'undefined' &&
      JSON.parse(localStorage.getItem('personalInfo'))) ||
    {},
  propiedadInfo:
    (typeof window !== 'undefined' &&
      JSON.parse(localStorage.getItem('propiedadInfo'))) ||
    {},
  direccionInfo:
    (typeof window !== 'undefined' &&
      JSON.parse(localStorage.getItem('direccionInfo'))) ||
    {},
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'PERSONAL_INFO':
      localStorage.setItem('personalInfo', JSON.stringify(action.payload));
      return { ...state, personalInfo: action.payload };

    case 'PROPIEDAD_INFO':
      localStorage.setItem('propiedadInfo', JSON.stringify(action.payload));
      return { ...state, propiedadInfo: action.payload };

    case 'DIRECCION_INFO':
      localStorage.setItem('direccionInfo', JSON.stringify(action.payload));
      return { ...state, direccionInfo: action.payload };

    case 'LIMPIAR_INFO':
      localStorage.removeItem('personalInfo');
      localStorage.removeItem('propiedadInfo');
      localStorage.removeItem('direccionInfo');
      return {
        ...state,
        direccionInfo: {},
        propiedadInfo: {},
        personalInfo: {},
      };

    case 'isLoading_true':
      console.log(action.payload, 'desde loading true');
      return { ...state, isLoading: true };

    case 'isLoading_false':
      console.log(action.payload, 'desde loading falso');
      return { ...state, isLoading: false };
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
