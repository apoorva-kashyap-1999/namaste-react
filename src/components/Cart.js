import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    //dispatch an action
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <p className="font-bold">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="m-auto w-6/12">
        <ItemList items={cartItems} isCart={true} />
        {cartItems.length > 0 ? (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Cart;
