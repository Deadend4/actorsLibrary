import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/Root/App.tsx";
import ErrorPage from "./routes/ErrorPage";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoriesPage from "./routes/CategoriesPage";
import TwistersPage from "./routes/TwistersPage";
import BooksPage from "./routes/BooksPage";
import { loader as categoryLoader } from "./routes/BooksPage/index.tsx";
import { loader as databaseLoader } from "./routes/CategoriesPage/index.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:databaseId/",
    element: <CategoriesPage />,
    loader: databaseLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:databaseId/:categoryId/",
    element: <BooksPage />,
    loader: categoryLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/twisters/",
    element: <TwistersPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
