import React, { useReducer } from 'react';

import { UserContext } from '.';

const initialState = { isLogIn: false, token: '', email: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, ...action.payload };

    case 'LOG_OUT': {
      return { ...state, ...initialState };
    }

    default:
      break;
  }
};

export const UserReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
