


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

export default RestaurantCard;