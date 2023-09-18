import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenuPage = () => {
  const [showIndex, setShowIndex] = useState(null);
  const dummy = "Dummy Data";
  // destructing resId from the url. and then we will dynamically put id from swiggy api
  //10366,25457
  const { resId } = useParams();

  //Custom hook->useRestaurantMenu
  const resInfo = useRestaurantMenu(resId);

  // Check if data is still loading
  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    id,
    costForTwoMessage,
    avgRating,
    cloudinaryImageId,
    cuisines,
  } = resInfo?.cards[0]?.card?.card?.info || {};
  const itemCard =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];
  // console.log(itemCard);
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-xl">{name}</h1>
      <p className="font-bold text-md">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* categories accordian */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              index == showIndex ? setShowIndex(null) : setShowIndex(index)
            }
            dummy={dummy}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenuPage;
