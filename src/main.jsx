import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes';
import AuthPorvider from './Provider/AuthPorvider';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPorvider>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   <ToastContainer />
   </div>
   
    </QueryClientProvider>
    </AuthPorvider>
  </React.StrictMode>,
)
