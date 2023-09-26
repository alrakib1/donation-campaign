import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Donation from "./Components/Donation/Donation";
import Stats from "./Components/Stats/Stats";

import Details from "./Components/Home/Details/Details";
import ErrorPage from "./Components/Error/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path: '/donation',
        element : <Donation></Donation>
      },
      {
        path : '/statistics',
        element : <Stats></Stats>
      },
      {
        path : '/details/:id',
        element : <Details></Details>,
        loader : ()=> fetch('../public/category.json'),
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
