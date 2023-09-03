import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenuPage = () => {
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
  console.log(itemCard);
  return (
    <div className="flex justify-center py-4 m-4">
      <div className="px-2 border border-solid w-[30rem] border-transparent rounded-lg shadow-lg hover:border-black">
        <h1 className="font-bold text-xl p-3">{name}</h1>
        <h3 className="font-bold text-md p-3">
          {cuisines.join(",")} - {costForTwoMessage}
        </h3>
        <h3 className="font-bold p-3">Rating {avgRating}</h3>
        <h2 className="font-bold px-3">Menu</h2>
        <ul className="max-h-40 overflow-y-auto p-3">
          {itemCard.map((item) => (
            <li className="py-2" key={item.card.info.id}>
              {item.card.info.name} : Rs.
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
