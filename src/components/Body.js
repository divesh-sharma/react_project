import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const TOP_RATED = 4;




const Body = ()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    const setTopRatedRestuarent = ()=>{
        const list= listOfRestaurants.filter(resObj=>resObj.avgRating>= TOP_RATED);
        console.log(list);
        setListOfRestaurants(list);
        
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                    console.log("Button Clicked");
                    setTopRatedRestuarent();
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                listOfRestaurants.map((resObj)=>
        <RestaurantCard resData={resObj} key={resObj.id}/>

                )
            }
        {/* / <RestaurantCard resData={resObj}/> */}
        {/* <RestaurantCard resName="KFC" cuisine="Burger,Fast Food" /> */}
        
            </div>
        </div>
    )
}

export default Body;