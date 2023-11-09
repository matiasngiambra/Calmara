import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Interactive from './pages/Interactive/Interactive.jsx';
import Breath from './pages/exercices/breath/Breath.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/interactive",
    element: <Interactive></Interactive>,
  },
  {
    path: "/exercices/breath",
    element: <Breath></Breath>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
