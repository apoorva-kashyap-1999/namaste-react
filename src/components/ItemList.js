import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice.js";

const ItemList = ({ items, isCart, dummy }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  // console.log(items);
  // console.log('Props Drilling ' + dummy);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            className="p-2 m-2 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold">{item.card.info.name}</span>
                <span className="font-semibold">
                  {" "}
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              {isCart == false ? (
                <div className="absolute">
                  <button
                    className="px-2 py-1 my-14 mx-7 bg-white border rounded shadow-md"
                    onClick={() => {
                      handleAddItem(item);
                    }}
                  >
                    Add +
                  </button>
                </div>
              ) : (
                <div className="absolute">
                  <button
                    className="px-2 py-1 my-14 mx-7 bg-white border rounded shadow-md"
                    onClick={() => {
                      handleRemoveItem(item);
                    }}
                  >
                    Remove -
                  </button>
                </div>
              )}
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-32 border shadow-md rounded-lg"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
