import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { Layout } from '../components/Layout';

import { setUser, getUser } from '../features/user/userSlice';

const Login = () => {
  const loggedInUser = useSelector(getUser)
  const [user, _setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  let { from } = location.stage || { from: { pathname: '/' } }

  const handleChange = ({ target: { name, value } }) => {
    _setUser({
      ...user,
      [name]: value
    });
  }

  const login = () => {
    dispatch(setUser({ user }));
    history.replace(from)
  };

  if (loggedInUser) {
    return <Redirect to='/' />
  }

  return (
    <Layout>
      <h1>Login</h1>
      <form method='POST' onSubmit={login}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleChange} value={user.name}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={handleChange} value={user.email}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={handleChange} value={user.password}/>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </Layout>
  )
};

export default Login
