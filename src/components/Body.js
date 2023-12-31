import { Link } from "react-router-dom";
import ResterauntCard, { withVegLabel } from "./ResterauntCard";
import { SWIGGY_API_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";

//Body Component
const Body = () => {
  const [searchResultsEmpty, setSearchResultsEmpty] = useState(false);
  const [listOfResteraunts, setListOfResteraunts] = useState([]);
  const [filteredlistOfResteraunts, setFilteredlistOfResteraunts] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  // console.log(listOfResteraunts);

  //PureVeg Card - hoc
  const ResterauntCardVeg = withVegLabel(ResterauntCard);

  //filtering with rating above 4
  const handleClick = () => {
    const filtredResData = listOfResteraunts.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredlistOfResteraunts(filtredResData);
  };

  //filtering based on input
  const handleSearchClick = () => {};

  useEffect(() => {
    fetchData();
  }, []);

  //Calling swiggy api
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const jsonData = await data.json();
    //Optional Chaining
    // console.log(
    //   jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants.info
    // );
    setListOfResteraunts(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredlistOfResteraunts(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline.Please check your internet connection</h1>
    );
  }

  //Conditional Rendering using Ternary Operator
  return !listOfResteraunts?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            data-testid="searchInput" // for jest
            className="border  border-solid border-black"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 m-4 bg-green-100 rounded-lg  hover:bg-green-300"
            value={searchText}
            onClick={() => {
              const filteredRes = listOfResteraunts.filter((restaurant) =>
                restaurant?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredlistOfResteraunts(filteredRes);
              setSearchResultsEmpty(filteredRes.length === 0);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <button
            className="px-4 py-1 m-4 bg-green-100 rounded-lg hover:bg-green-300"
            onClick={() => {
              handleClick();
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <label className="p-2 font-bold">User Name :</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {searchResultsEmpty ? (
          <h1 className="font-bold text-3xl w-full flex justify-center items-center m-44">
            No Restaurants found 😥
          </h1>
        ) : (
          filteredlistOfResteraunts.map((restaurant) => {
            return (
              <Link
                to={"restaurants/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {/* If veg parameter is present and true show Veg label else nothing */}
                {restaurant.info.veg && restaurant.info.veg == true ? (
                  <ResterauntCardVeg {...restaurant.info} />
                ) : (
                  <ResterauntCard {...restaurant.info} />
                )}
              </Link>
            );
            // return <ResterauntCard key={restaurant.info.id} {...restaurant.info} />
          })
        )}
      </div>
    </div>
  );
};

export default Body;
