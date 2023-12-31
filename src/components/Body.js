import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const TOP_RATED = 4;




const Body = ()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    let [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");
    const setTopRatedRestuarent = ()=>{
        const list= listOfRestaurants.filter(resObj=>resObj.avgRating>= TOP_RATED);
        console.log(list);
        setListOfRestaurants(list);
        
    }
    useEffect(()=>{
        console.log("useEffect called");
        fetchData();
    },[]);

    console.log("rendering");

    const fetchData = async ()=>{
        // const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-se-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        // options chaining
        console.log(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        const resData = json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setTimeout(()=>{
            setListOfRestaurants(resData);
            setFilteredRestaurant(resData)
     
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
                <div className="search">
                    <input type="text" className="search-box"
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                    />
                    <button className="search-btn"
                    onClick={()=>{
                        //Filter the restaurant cards and update the UI
                        // searchText

                      const filteredRestaurant =  listOfRestaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
                      setFilteredRestaurant(filteredRestaurant);

                    }}
                    >Search</button>
                </div>
                
                <button className="filter-btn"
                onClick={()=>{
                    console.log("Button Clicked");
                    setTopRatedRestuarent();
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                filteredRestaurant.map((resObj)=>
      <Link   to={"/restaurant/"+resObj.info.id}>
        <RestaurantCard
      
        resData={resObj} key={resObj.info.id}/>
      </Link>

                )
            }
        {/* / <RestaurantCard resData={resObj}/> */}
        {/* <RestaurantCard resName="KFC" cuisine="Burger,Fast Food" /> */}
        
            </div>
        </div>
    )
}

export default Body;