import {useParams} from 'react-router-dom'
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenuPage = () =>{

  // destructing resId from the url. and then we will dynamically put id from swiggy api
  //10366,25457
  const {resId } = useParams();

  //Custom hook->useRestaurantMenu
  const resInfo = useRestaurantMenu(resId);

    // Check if data is still loading
    if (resInfo === null) {
      return <Shimmer />;
    }
 
  const { name, id , costForTwoMessage, avgRating, cloudinaryImageId,cuisines  } = resInfo?.cards[0]?.card?.card?.info || {} ;
  const itemCard = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ||[];
  console.log(itemCard);
  return (
    <div className='menu'>
        <h1>{name}</h1>
        <h3>{cuisines.join(',')} - {costForTwoMessage}</h3>
        <h3>Rating {avgRating}</h3>
        <h2>Menu</h2>
        <ul>
          {itemCard.map((item)=> <li key={item.card.info.id}>{item.card.info.name} : Rs.{item.card.info.price/100 ||item.card.info.defaultPrice/100}</li>)}
        </ul>
    </div>
  )
};

export default RestaurantMenuPage;
