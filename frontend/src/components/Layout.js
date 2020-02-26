import React from 'react';
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getUser, logoutUser } from '../features/user/userSlice';

export const Layout = ({ children }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        {user &&
          <Link to='/test-page'>Test Page</Link>
        }
        {user ? (
          <button type="button" onClick={() => dispatch(logoutUser())}>Logout</button>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Link to='/login'>Login</Link>
        &copy;
      </footer>
    </>
  )
}
