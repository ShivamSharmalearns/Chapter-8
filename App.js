// Chapter 04 - Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./componentss/Header.js"; //{Header} means using Named export
import Body from "./componentss/Body.js";
import { createBrowserRouter, Outlet } from "react-router-dom"; //ROUTING
import About from "./componentss/About.js"; //ROUTING
import Contact from "./componentss/Contact.js";
import Error from "./componentss/Error.js";
//Outlet here is connected with Childern of Applayout
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResaurantMenu from "./componentss/ResaurantMenu.js";


// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />  {/*All childrens will come to Outlet because we connectws this from import  */}
    </div>
  );
};

//ROUTING
const appRouter = createBrowserRouter([
  {
    path: "/", //if my path is / then display Applayout and if it trows error then display errorelement
    element: <AppLayout />,
    errorElement: <Error />, //if we write /ebjcbeubciubew  error occurs
    children: [
      //childers of app layout
      //Outlet
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",              //normal routing
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",   //dynamic Routing
        element: <ResaurantMenu />,
      }
    ],
    errorElement: <Error/>
  },
  // {
  //   path: "/about",
  //   element: <About/>
  // },
  // {
  //   path: "/contact",
  //   element: <Contact/>
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);  earlier we were using this to render our page

//ROUTING - RouterProvider is come from react-router-dom
root.render(<RouterProvider router={appRouter} />);
