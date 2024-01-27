import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// on demand loading
// dynamix imoprt
const Grocery = lazy(()=>import("./components/Grocery"))
const About = lazy(()=>import("./components/About"));
const AppLayout = ()=>{

    // authentication
    const [userName,setUserName] = useState();

    useEffect(()=>{
        // Make a API call and send username and password
        const data = {
            name:"Rockstar"
        }
        setUserName(data.name);
    },[])
    return (
      <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
            <UserContext.Provider value={{loggedInuser:"Rockstar default"}}>
<Header />
</UserContext.Provider>
{/* <Body /> */}
<Outlet />
        </div>
        </UserContext.Provider>
      </Provider>
    )
}
// first we create
// const appRouter = createBrowserRouter([
//     {
//         path:"/",
//         element:<AppLayout />,
//         errorElement:<Error />
//     },
//     {
//         path:"/about",
//         element:<About />
//     },{
//         path:"/contact",
//         element:<Contact />
//     }
// ])

// children route
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {path:"/",
        element:<Body />
        },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                    <About />
                </Suspense>
            },
            {
                path:"/contact",
                element:<Contact />
            },{
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            },
            {
                path:"/grocery",
                element:<Suspense
                fallback={<h1>Loading...</h1>}>      <Grocery /></Suspense>
          
            },
            {
                path:"/cart",
                element:<Cart />
            }
        ],
        errorElement:<Error />
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading); 
// rendering an component
// root.render(<AppLayout />)

// provide configuration to router
root.render(<RouterProvider router={appRouter}/>)