import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = ()=>{
// const [resInfo,setResInfo]=useState(null);
const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);
    useEffect(()=>{
      fetchMenu();
    },[]);
//     const fetchMenu = async ()=>{
//         const data = await fetch(MENU_API+resId)
//    const json = await data.json();
//    console.log(json?.data);
//    setResInfo(json?.data);
//     }
   if(resInfo===null) return <Shimmer />;

    const {name,cuisines,cloudinaryImageId,costForTwoMessage,avgRating} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   
   
   
    return        (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}-{costForTwoMessage}</h2>
            <ul>
                {itemCards?.map((itemCard=>(
                <li key={itemCard?.card?.info?.id}>{itemCard?.card?.info?.name}
                -{" Rs."}
                {itemCard.card.info.price/100 || itemCard.card.info.defaultPrice/100}
                </li>)))}
               

                

            </ul>

        </div>
    )
}


export default RestaurantMenu;