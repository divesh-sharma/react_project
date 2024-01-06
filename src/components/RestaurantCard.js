


const RestaurantCard = (props)=>{
    const {resData} = props;
    console.log(resData)
    const {name,cuisines,avgRating,costForTwo,sla} = resData?.info;
    console.log(props);
    return (
        <div className="m-4 p-4 lg:w-[200px] h-100 rounded-lg bg-gray-100 hover:bg-gray-200 hover:scale-110">
            <img className="rounded-lg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="whitespace-nowrap text-ellipsis overflow-hidden" title={cuisines.join(", ")}>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            {/* <h4>{costForTwo/100 } For Two</h4> */}
            <h4>{costForTwo}</h4>

            <h4>{sla?.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;