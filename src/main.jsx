import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayouts from "./Components/MainLayouts/MainLayouts.jsx";
import Home from "./Components/Home/Home.jsx";
import Chefs from "./Components/Home/ChefSection/Chefs.jsx";
import Login from "./Components/Share/Login.jsx";
import Register from "./Components/Share/Register.jsx";
import ChefRecipies from "./Components/Home/ChefSection/Recipies/ChefRecipies.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import PrivetRouter from "./PrivetRouter/PrivetRouter.jsx";
import { ToastContainer } from "react-toastify";
import Error from "./Components/Error/Error.jsx";
import Blog from "./Components/Blog/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chefs",
        element: (
          <PrivetRouter>
            <Chefs />{" "}
          </PrivetRouter>
        ),
      },

      {
        path: "/chef/:id",
        element: (
          <PrivetRouter>
            <ChefRecipies />{" "}
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-psi-six.vercel.app/chefs/${params.id}`
          ),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
