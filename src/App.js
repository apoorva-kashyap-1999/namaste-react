import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Header from './components/Header.js'
import Body from './components/Body'
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenuPage from "./components/RestaurantMenuPage.js";

//Main Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
};

//Routing Configuraation
//createBrowserRouter takes lists of paths(object)
const appRouter = createBrowserRouter([
  {
  path:'/',
  element:<AppLayout/>,
  children:[{
    path:'/',
    element:<Body/>
    },, {
    path:'/about',
    element:<About/>
    },
    {
    path:'/contact',
    element:<Contact/>
    },
    {
      path:'/restaurants/:resId',
      element:<RestaurantMenuPage/>
      },
  ],
  errorElement:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)
// root.render(<AppLayout />);
