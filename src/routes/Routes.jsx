import {
    createBrowserRouter,
    
  } from "react-router-dom";

import Root from "../layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../pages/MenuFolder/Menu/Menu";
import Order from "../pages/Order/Order/Order";

  
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
          path:'/order/:category',
          element:<Order></Order>
        },
      ]
      
    },
  ]);
