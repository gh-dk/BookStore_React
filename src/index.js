import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./view/Home";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import AdminLogin from "./view/AdminLogin";
import ProductForm from "./view/ProductForm";
import Read from "./view/Read";
import { getAllBooks, getBooksById } from "./model/employee.model";
// import Suduku from "./component/Suduku";

const routes = [
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        loader: () => redirect("home"),
      },
      {
        path: "home",
        element: <Home />,
        loader: async () => await getAllBooks(),
      },
      {
        path: "login",
        element: <AdminLogin />,
      },
      {
        path: "addproduct",
        element: <ProductForm />,
      },
      {
        path: "editproduct/:id",
        element: <ProductForm />,
      },
      {
        path: "read/:id",
        element: <Read />,
        loader: async ({ params }) => {
          const responseData = await getBooksById(params.id);
          return responseData[0];
        },
      },
    ],
  },
  {
    path: "*",
    element: <h1 style={{ textAlign: "center" }}>page not found</h1>,
  },
  // {
  //   path: "/game1",
  //   element: <Suduku />,
  // },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
