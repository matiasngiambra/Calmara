import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Breath from './pages/exercices/breath/Breath.jsx';
import WhiteNoise from './pages/exercices/whitenoise/WhiteNoise.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/exercices/breath",
    element: <Breath></Breath>,
  },
  {
    path: "/exercices/whitenoise",
    element: <WhiteNoise></WhiteNoise>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
