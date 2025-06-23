import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import './index.css'
import './custom.css'
import RouterProvider from "./Routes/RouterProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()
ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
   <RouterProvider />
  </BrowserRouter>
  </QueryClientProvider>

);
