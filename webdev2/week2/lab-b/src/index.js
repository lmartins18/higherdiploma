import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ShoppingList from './pages/ShoppingList';
import SplashScreen from './pages/SplashScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/splash-screen",
    element: <SplashScreen />,
  },
  {
    path: "/shopping-list",
    element: <ShoppingList />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
