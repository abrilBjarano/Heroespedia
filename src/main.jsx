import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './styles.css';
import { Heroespedia } from './Heroespedia';


const router = createBrowserRouter([
  {
    path: "*",
    element: <Heroespedia />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
