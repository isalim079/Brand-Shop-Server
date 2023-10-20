import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"

import './index.css'
import Router from './components/Router/Router'
import AuthProvider from './components/Router/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={Router} />
      </AuthProvider>
  </React.StrictMode>,
)
