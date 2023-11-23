import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // actions 
        //add to wishlist
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export default wishlistSlice.reducer
export const { addToWishlist } = wishlistSlice.actions