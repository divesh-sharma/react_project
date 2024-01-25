import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = ()=>{
// const [resInfo,setResInfo]=useState(null);
const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);
const [showIndex,setShowIndex]=useState(0);
const [showItem,setShowItem] = useState(false);
    // useEffect(()=>{
    //   fetchMenu();
    // },[]);
//     const fetchMenu = async ()=>{
//         const data = await fetch(MENU_API+resId)
//    const json = await data.json();
//    console.log(json?.data);
//    setResInfo(json?.data);
//     }
   if(resInfo===null) return <Shimmer />;

    const {name,cuisines,cloudinaryImageId,costForTwoMessage,avgRating} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
   const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.['@type']
   ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   ); 
   
   
    return        (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}-{costForTwoMessage}</p>
           
{/* { categories accordian} */}
// RestaurantCategory is controlled component
{categories.map((category,index)=>(    <RestaurantCategory  data={category?.card?.card} 
showItems={index==showIndex && showItem}
setShowIndex = {()=>setShowIndex(index)}
setShowItem = {()=>setShowItem(!showItem)}
/>)
)}
        </div>
    )
}


export default RestaurantMenu;