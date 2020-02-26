import React, { useState } from 'react'
import { Layout } from '../components/Layout'

import { useSelector, useDispatch } from '@reduxjs/toolkit';
import { getUser } from '../features/user/userSlice';
import { Redirect } from 'react-router';
import axios from 'axios-hooks'

const RegisterPage = () => {

  const [newUser, setNewUser] = useState({});

  const loggedInUser = useSelector(getUser)

  if (loggedInUser) {
    return <Redirect to='/' />
  }

  const register = () => {

  }

  return (
    <Layout>
      <h1>Register</h1>
      <form method="POST" onSubmit={register}>

      </form>
    </Layout>
  )
}
