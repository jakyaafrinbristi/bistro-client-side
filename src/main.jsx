
import { createRoot } from 'react-dom/client'

import './index.css'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
     
  </React.StrictMode>,
)
