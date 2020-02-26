import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';

import { Index } from './pages/Index';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

const TestPage = () => (
  <>
    <h1>Can you see me?</h1>
  </>
)

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Index />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <ProtectedRoute path="/test-page">
        <TestPage />
      </ProtectedRoute>
    </Switch>
  </BrowserRouter>
)
