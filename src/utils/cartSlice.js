import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'Cart',
    initialState:{
        items:[]
    },
    reducers:{
      addItem : (state, action)=>{
         state.items.push(action.payload);
      },
      removeItem : (state,action)=>{
        state.items.pop();//remove req object by adding logic
      },
      clearCart : (state)=>{
         //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []
        state.items.length = 0;
      }
    }
});
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;