import React from 'react'
import AppRoutes from './routes/AppRoutes'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { Router } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppRoutes />
    </div>
  )
}

export default App
