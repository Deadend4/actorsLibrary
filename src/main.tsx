import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/Root/App.tsx";
import ErrorPage from "./routes/ErrorPage/index.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BooksPage from "./routes/Books/index.tsx";
import Twisters from "./routes/Twisters/index.tsx";
import ActiveBooks from "./routes/ActiveBooksPage/index.tsx";
import { loader as categoryLoader } from "./routes/ActiveBooksPage";
import { loader as databaseLoader } from "./routes/Books";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:databaseId/",
    element: <BooksPage />,
    loader: databaseLoader,
  },
  {
    path: "/:databaseId/:categoryId/",
    element: <ActiveBooks />,
    loader: categoryLoader,
  },
  {
    path: "/twisters/",
    element: <Twisters />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
