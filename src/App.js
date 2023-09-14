import React, {lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Header from './components/Header.js'
import Body from './components/Body'
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenuPage from "./components/RestaurantMenuPage.js";
import UserContext from "./utils/UserContext.js";
import { Suspense } from "react";
// import Grocery from "./components/Grocery.js";

// Chunking/Lazy Loading -> for creating diff bundle
const Grocery = lazy(()=>import( "./components/Grocery.js"));

//Main Component
const AppLayout = () => {

  const [userName,setUserName]=useState();
  //auth logic
  useEffect(()=>{
    //some api call returns data
    const data = {
      name:'Apoorva'
    };
    setUserName(data.name);
  },[]);

// overriding default context value
  return (
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
    </UserContext.Provider>
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
    path:'/grocery',
    element:(<Suspense fallback={<h1>...loading Grocery</h1>}><Grocery/></Suspense>)
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
