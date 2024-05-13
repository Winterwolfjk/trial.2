import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Group2067 from './pages/Group2067';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Group2067', element: <Group2067 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}