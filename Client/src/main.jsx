import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import './index.css'
import './custom.css'
import RouterProvider from "./Routes/RouterProvider";


ReactDOM.createRoot(root).render(
  <BrowserRouter>
   <RouterProvider />
  </BrowserRouter>
);
