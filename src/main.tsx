import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//pages or boards
import Login from './boards/loginpage.board.tsx';
import MtopNew2 from './boards/mtop-new-2.board.tsx';

//CSS
import "./tailwind.css";
import "./reset.css";


//ROUTING
const router = createBrowserRouter([
  {
    path: '/loginpage',
    element: <Login />,
  },
  {
    path: '/MtopNew 2',
    element: <MtopNew2 />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>

  <RouterProvider router={router} />

  </React.StrictMode>
);


