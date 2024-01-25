import { resList } from "../utils/mockData";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const TOP_RATED = 4;
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext  from "../utils/UserContext";


const Body = ()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    let [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const setTopRatedRestuarent = ()=>{
        const list= listOfRestaurants.filter(resObj=>resObj.avgRating>= TOP_RATED);
  
        setListOfRestaurants(list);
        
    }
    useEffect(()=>{
        console.log("useEffect called");
        fetchData();
    },[]);

    console.log("rendering");
    const {loggedInUser,setUserName} = useContext(UserContext);
    console.log(setUserName)

    const fetchData = async ()=>{
        // const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-se-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        // options chaining
        console.log(json);
        console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        const resData = addPromotedLabel(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        setTimeout(()=>{
            setListOfRestaurants(resData);
            setFilteredRestaurant(resData)
     
        },1000)
    }

    const addPromotedLabel = (resData)=>{
        const promotedData = resData.map((resObj,index)=>{
            if(index==0 || index == resData.length-1){
                resObj.info.promoted = true;
            }else{
                resObj.info.promoted = false;
            }
            return resObj;
            
        });
        return promotedData;
    }
const onlineStatus = useOnlineStatus();
if(onlineStatus===false)
return (
    <h1>Looks Like your internet connection not working</h1>
)

// Condition Rendering 
    // if(listOfRestaurants.length==0){
    //     return <Shimmer />
    // }
    console.log(listOfRestaurants)
    return listOfRestaurants.length===0 ? (<Shimmer />):
    (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black"
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:scale-110"
                    onClick={()=>{
                        //Filter the restaurant cards and update the UI
                        // searchText

                      const filteredRestaurant =  listOfRestaurants.filter((res)=>{
                        console.log(res);
                        return res?.info.name.toLowerCase().includes(searchText.toLowerCase())});
                      setFilteredRestaurant(filteredRestaurant);

                    }}
                    >Search</button>
                </div>
                
               <div className="search m-4 p-4 ">
               <button className="px-4 py-2 bg-gray-100 items-center hover:scale-110"
                onClick={()=>{
                    console.log("Button Clicked");
                    setTopRatedRestuarent();
                }}
                >Top Rated Restaurant</button>
               </div>
               <div className="search m-4 p-4 ">
<label>UserName : </label>
<input className="border border-black p-2" 
value={loggedInUser}
onChange={(e)=>setUserName(e.target.value)}/>
               </div>
            </div>
            <div className="flex flex-wrap rounded-lg">
                {
                filteredRestaurant.map((resObj)=>
      <Link   to={"/restaurant/"+resObj.info.id}>
        {/* if the restaurant is promoted show the promoted label */}
       {resObj?.info?.promoted ? (<RestaurantCardPromoted   resData={resObj} key={resObj.info.id} />):(  <RestaurantCard
      
      resData={resObj} key={resObj.info.id}/>)}
      
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