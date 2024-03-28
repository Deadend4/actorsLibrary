import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import App from "./routes/Root/App.tsx";
import ErrorPage from "./routes/ErrorPage/index.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BooksPage from "./routes/Books/index.tsx";
import Twisters from "./routes/Twisters/index.tsx";
import ActingBooks from "./routes/ActingBooks/index.tsx";
import SpeechDevelopmentBooks from "./routes/SpeechDevelopmentBooks/index.tsx";
import BookPage from "./routes/BookPage";

initializeApp({
  apiKey: "AIzaSyCwCsn_s3GfYGkEZvFEKlIf_32xRirdLdg",
  authDomain: "acting-deadend4.firebaseapp.com",
  projectId: "acting-deadend4",
  storageBucket: "acting-deadend4.appspot.com",
  messagingSenderId: "2215524454",
  appId: "1:2215524454:web:835d43a3e8ac98a295d5a7",
  measurementId: "G-7P78BVH1MN",
});

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
  {
    path: "/books/acting",
    element: <ActingBooks />,
  },
  {
    path: "/books/speech-dev",
    element: <SpeechDevelopmentBooks />,
  },
  {
    path: "/books/acting/actors-work-on-himself",
    element: (
      <BookPage
        title="Работа актера над собой"
        description="Описание типа"
        image=""
      />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
