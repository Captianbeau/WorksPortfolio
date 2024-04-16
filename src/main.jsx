import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom';
import './index.css'

import App from './App.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Resume from './pages/Resume.jsx';
import Works from './pages/Works.jsx';
import Contact from './pages/ContactForm.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <Navigate to= "/" />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
      path: '/Resume',
      element: <Resume />
      },
      {
        path: '/Works',
        element: <Works />
      },
      {
        path: '/Contact',
        element:<Contact />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
);
