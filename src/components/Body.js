import ResterauntCard from './ResterauntCard'
import resData from '../utils/mockData';
import { useState } from 'react';

//Body Component
const Body = () => {

const [listOfResteraunts,setListOfResteraunts] = useState(resData);

  //filtering with rating above 4
const handleClick = ()=>{
  const filtredResData = listOfResteraunts.filter((res) => res.data.avgRating > 4);
  setListOfResteraunts(filtredResData);
 }


    return (
      <div className="body">
        <div className='filter-button-container'>
        <div className="filter">
          <button className="filter-btn"
            onClick={()=>{handleClick()}}>
            Top Rated Restaurant
          </button>
        </div>
        </div>
        <div className="res-container">
        {listOfResteraunts.map((restaurant) => {
          return <ResterauntCard key={restaurant.data.id}  {...restaurant.data} />;
        })}
        </div>
      </div>
    );
  };

export default Body;