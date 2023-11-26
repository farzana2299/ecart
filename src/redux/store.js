import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import productSlice from "./productSlice";


const store = configureStore({
    reducer: {
        cartSlice,wishlistSlice,productSlice //key value pair aan same thanne aan kodthath
    }
})

export default store