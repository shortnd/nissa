import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import { getUser } from '../features/user/userSlice';
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children, ...rest }) => {
  const user = useSelector(getUser);
 return (
   <>
    <Route {...rest}
      render={({ location }) => user ? (
        children
      ) : (
      <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )} />
   </>
 )
};

export default ProtectedRoute
