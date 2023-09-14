import { CDN_URL } from "../utils/constants";

//ResterauntCard
const ResterauntCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  costForTwoString,
  avgRating,
}) => {
  //destructing of props
  // const {name, time} = props;
  return (
    <div className="relative p-4 m-4 bg-transparent w-[302px] rounded-lg shadow-lg transform hover:scale-90">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="name-star">
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h5 className="font-bold">{avgRating} ⭐</h5>
      </div>
      <div className="font-bold">
        <h4>{costForTwoString}</h4>
      </div>
      <div className="text-ellipsis">
        <h4>{cuisines.join(",")}</h4>
      </div>
      <h5 className="res-area">{area}</h5>
    </div>
  );
};

/* Higher order component -> this will take ResterauntCard comp as input 
and enchance it with veg label if present and true and return it*/
export const withVegLabel = (ResterauntCard) =>{
  return (props)=>{
    return(
      <div className="relative">
        <label className="absolute  bg-black text-white m-2 p-2 z-20 rounded-lg">Pure Veg</label>
        <ResterauntCard {...props}/>
      </div>
    )
  }
}




export default ResterauntCard;
