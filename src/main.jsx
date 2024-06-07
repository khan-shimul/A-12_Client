import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes';
import AuthPorvider from './Provider/AuthPorvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPorvider>
    <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
    </AuthPorvider>
  </React.StrictMode>,
)
