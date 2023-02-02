import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from "react-query";
// Create a react query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App><RouterProvider router={router} /></App>
    </QueryClientProvider>
  </React.StrictMode>,
)
