import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cartSlice  //key value pair aan same thanne aan kodthath
    }
})

export default store