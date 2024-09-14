
import { createRoot } from 'react-dom/client'

import './index.css'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import AuthProvider from './provider/AuthProvider'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider> <RouterProvider router={router} /></AuthProvider>
      </QueryClientProvider>

    </div>

  </React.StrictMode>,
)
