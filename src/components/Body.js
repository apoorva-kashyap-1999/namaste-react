import { Link } from "react-router-dom";
import ResterauntCard from './ResterauntCard'
import { SWIGGY_API_URL } from '../utils/constants';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import useOnlineStatus from "../utils/useOnlineStatus";

//Body Component
const Body = () => {

const [listOfResteraunts,setListOfResteraunts] = useState([]);
const [filteredlistOfResteraunts,setFilteredlistOfResteraunts] = useState([]);
const [searchText, setSearchText]=useState("");
console.log(listOfResteraunts);

 //filtering with rating above 4
const handleClick = ()=>{
  const filtredResData = listOfResteraunts.filter((res) => res.info.avgRating > 4);
  setFilteredlistOfResteraunts(filtredResData);
 }

 //filtering based on input
const handleSearchClick =() => {
  
} 

useEffect(()=>{
  fetchData();
},[]);

//Calling swiggy api
const fetchData = async ()=>{
  const data = await fetch(SWIGGY_API_URL);
  const jsonData = await data.json();
  //Optional Chaining
  console.log((jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.info));
  setListOfResteraunts(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredlistOfResteraunts(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

const onlineStatus = useOnlineStatus();
if(onlineStatus === false){
  return (
  <h1>Looks like you're offline.Please check your internet connection</h1>
  )}
  
//Conditional Rendering using Ternary Operator
  return  !listOfResteraunts?.length  ? (<Shimmer/>) : (
      <div className="body">
          <div className="filter">
          <div className="search">
          <input type="text" className="search-box" onChange={(e)=>{setSearchText(e.target.value)}}></input>
          <button className="search-btn"
            value={searchText}  onClick={()=>{
              const filteredRes = listOfResteraunts.filter((restaurant) =>  restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredlistOfResteraunts(filteredRes);
            }}>
            Search
          </button>
          </div>
          <button className="filter-btn"
            onClick={()=>{handleClick()}}>
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
        {filteredlistOfResteraunts.map((restaurant) => {
          return <Link to={'restaurants/'+restaurant.info.id} key={restaurant.info.id}><ResterauntCard  {...restaurant.info} /></Link>;
          // return <ResterauntCard key={restaurant.info.id} {...restaurant.info} />
        })}
        </div>
      </div>
    );
  };

export default Body;