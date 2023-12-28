import React from "react";
import ReactDOM from "react-dom/client";

/**
* Header
* - Logo
* - Nav Items
* Body
* - Search
RestaurantContainer
- RestaurantCard
* - Ing
Name of Res, Star Rating, cuisine, Ic You, now. Uncommitted changes
✰ Footer
Copyright
* - Links
* - Address
Contact
*/
const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
               <img className="logo" src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>

    )
}
const resArr = {data:[
    {
        name:"Meghana Foods",
        cuisine:["Burger","Fast Food"],
        avgRating:"4.4",
        costForTwo:40000,
        deleiveryTime:36,
        id:10
    },
    {
        name:"Burger King",
        cuisine:["Burger","Fast Food"],
        avgRating:"4.4",
        costForTwo:40000,
        deleiveryTime:36,
        id:11
    },
    {
        name:"Domios",
        cuisine:["Burger","Fast Food"],
        avgRating:"4.2",
        costForTwo:80000,
        deleiveryTime:36,
        id:12
    }
]}
const RestaurantCard = (props)=>{
    const {resData} = props;
    console.log(resData)
    const {name,cuisine,avgRating,costForTwo,deleiveryTime} = resData;
    console.log(props);
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" />
            <h3>{name}</h3>
            <h4>{cuisine.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo/100 } For Two</h4>
            <h4>{deleiveryTime}min</h4>
        </div>
    )
}
const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                resArr.data.map((resObj)=>
        <RestaurantCard resData={resObj} key={resObj.id}/>

                )
            }
        {/* / <RestaurantCard resData={resObj}/> */}
        {/* <RestaurantCard resName="KFC" cuisine="Burger,Fast Food" /> */}
        
            </div>
        </div>
    )
}
const AppLayout = ()=>{
    return (
        <div className="app">
<Header />
<Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading); 
// rendering an component
root.render(<AppLayout />)