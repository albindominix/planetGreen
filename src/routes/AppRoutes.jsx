import React from 'react'
import { Routes, Route, Navigate, Router } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import PrivateRoute from './PrivateRoute'
import { LoginPage, RegisterPage, Dashboard, NotFound } from '../pages'
import { ROUTES } from '../libs/constants'

const AppRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <Routes>
      {/* Redirect root to appropriate page */}
      <Route
        path='/'
        element={
          <Navigate
            to={isAuthenticated ? ROUTES.DASHBOARD : ROUTES.LOGIN}
            replace
          />
        }
      />

      {/* Public routes - redirect to dashboard if already authenticated */}
      <Route
        path={ROUTES.LOGIN}
        element={
          isAuthenticated ? (
            <Navigate to={ROUTES.DASHBOARD} replace />
          ) : (
            <LoginPage />
          )
        }
      />
      <Route
        path={ROUTES.REGISTER}
        element={
          isAuthenticated ? (
            <Navigate to={ROUTES.DASHBOARD} replace />
          ) : (
            <RegisterPage />
          )
        }
      />

      {/* Protected routes */}
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>

  )
}

export default AppRoutes