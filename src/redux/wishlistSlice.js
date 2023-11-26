import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // actions 
        //add to wishlist
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        //remove wishlist
        removewishList:(state,action)=>{
            return state.filter(i=>i.id!=action.payload)
        }
    }
})
export default wishlistSlice.reducer
export const { addToWishlist ,removewishList} = wishlistSlice.actions