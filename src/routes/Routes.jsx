import {
    createBrowserRouter,
    
  } from "react-router-dom";

import Root from "../layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../pages/MenuFolder/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Authentication/Login/Login";

import Register from "../pages/Authentication/Register/Register";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
      ]
      
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
        path:'cart',
        element:<Cart></Cart>
      },
      // All users
      {
        path:'users',
        element:<AllUsers></AllUsers>
      },

    ]
    }
  ]);
