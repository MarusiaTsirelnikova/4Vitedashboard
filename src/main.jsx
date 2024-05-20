import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainPage from './pages/MainPage.jsx';
import Patients from './pages/Patients.jsx';
import UsefullLinks from './pages/UsefulLinks.jsx';
import Reception from './pages/Reception.jsx';

const router = createBrowserRouter([
  {
    path: "",
    element: <MainPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/patients",
    element: <Patients />,
  },
  {
    path: '/reception',
    element: <Reception />,
  },
  {
    path: '/usefullinks',
    element: <UsefullLinks />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);