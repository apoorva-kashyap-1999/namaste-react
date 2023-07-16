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
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src= {CDN_URL + cloudinaryImageId}
        ></img>
        <div className="name-star">
          <h3 className="res-name">{name}</h3>
          <h5>{avgRating}stars</h5>
        </div>
        <div className="res-cost"><h4>{costForTwoString}</h4></div>
        <div className="res-cuisine">
          <h4>{cuisines.join(",")}</h4>
        </div>
        <h5 className="res-area">{area}</h5>
      </div>
    );
  };

export default ResterauntCard;