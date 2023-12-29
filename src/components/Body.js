import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const TOP_RATED = 4;




const Body = ()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const setTopRatedRestuarent = ()=>{
        const list= listOfRestaurants.filter(resObj=>resObj.avgRating>= TOP_RATED);
        console.log(list);
        setListOfRestaurants(list);
        
    }
    useEffect(()=>{
        console.log("useEffect called");
        fetchData();
    },[]);

    const fetchData = async ()=>{
        // const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        // const json = await data.json();
        // options chaining
        // console.log(json?.data?.cards);
        setTimeout(()=>{
            setListOfRestaurants(resList);
        },1000)
    }
// Condition Rendering 
    // if(listOfRestaurants.length==0){
    //     return <Shimmer />
    // }
    return listOfRestaurants.length==0 ? (<Shimmer />):
    (
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