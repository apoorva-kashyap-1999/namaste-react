import React, { useState } from 'react'
import ItemList from './ItemList';

//Controlled Component as its parent RestMenu is controlling its behvior ith showItems prop
const RestaurantCategory = ({data , showItems, setShowIndex, dummy}) => {
  // console.log(data);
  // const [showItems,setShowItems]=useState(false);
  const handleClick = () =>{
      // setShowItems(!showItems);
       setShowIndex()
       
  }
  

  return (
    <div>
      {/* Accordian Header */}
    <div className='w-6/12 bg-gray-100 p-4 mx-auto my-4 shadow-lg'>
      <div className='p-2 flex justify-between cursor-pointer bg-trasnparent rounded hover:bg-slate-200' onClick={handleClick}>
        <span className='font-bold'>{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
      </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
    </div>
    </div>
  )
}

export default RestaurantCategory;
