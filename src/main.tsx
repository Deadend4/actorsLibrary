import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/Root/App.tsx";
import ErrorPage from "./routes/ErrorPage/index.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BooksPage from "./routes/Books/index.tsx";
import Twisters from "./routes/Twisters/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/books/",
    element: <BooksPage />,
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
