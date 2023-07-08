import React, { useContext, useState } from 'react';
import axios from 'axios';

import Layout from '@components/Layout/Layout';
import { UserContext } from '@/context';

const LogIn = () => {
  const { state, dispatch } = useContext(UserContext);
  const [value, setValue] = useState({ email: '', password: '' });

  const storingValues = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const log = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        '',
        value
      );
      console.log(state);
      dispatch({ type: 'LOG_IN', payload: { isLogIn: true, ...data.data } });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <form action="#" onSubmit={log}>
        <input type="text" name="email" onChange={storingValues} />
        <input type="password" name="password" onChange={storingValues} />
        <button type="submit">submit</button>
      </form>
    </Layout>
  );
};

export default LogIn;
