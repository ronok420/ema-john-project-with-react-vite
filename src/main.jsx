import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Shop from './Components/Shop/Shop.jsx';
import Order from './Components/Order/Order.jsx';
import Inventory from './Components/Inventory/Inventory.jsx';
import Login from './Components/Login/Login.jsx';
import cartProductsLoder from './Loader/cartProductsLoader.js';
import cartProductLoader from './Loader/cartProductsLoader.js';
import Checkout from './Components/Checkout/Checkout.jsx';
import SIgnUp from './Components/SignUP/SIgnUp.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>,        
        loader:()=>fetch('http://localhost:7000/totalProducts')      
      },
      {
        path:'/order',
        element:<Order></Order>,
        // loader: () => fetch('http://localhost:7000/products')
        loader: cartProductLoader
      },
      {
        path:'/inventory',
        element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path:'/checkout',
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SIgnUp></SIgnUp>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)
