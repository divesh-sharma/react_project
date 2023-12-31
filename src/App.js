import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
const AppLayout = ()=>{
    return (
        <div className="app">
<Header />
{/* <Body /> */}
<Outlet />
        </div>
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
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },{
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
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