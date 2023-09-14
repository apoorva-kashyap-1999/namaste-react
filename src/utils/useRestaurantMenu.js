import { SWIGGY_MENU } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {

const[ resInfo, setResInfo ]=useState(null);
    
useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
     const menu = await fetch(SWIGGY_MENU + resId);
     const menuJson =  await menu.json();
    //  console.log(menuJson.data);
     setResInfo(menuJson.data);
  } 
    return resInfo;
}

export default useRestaurantMenu;

