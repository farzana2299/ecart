import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        //actions

        //add to cart
        addToCart: (state, action) => {
            state.push(action.payload)
        },

        //remove cart
        removeCart: (state, action) => {
            return state.filter(i => i.id != action.payload)
        },
        cartClear: (state, action) => {
            return state = []
        }

    }
})
export default cartSlice.reducer
export const { addToCart, removeCart, cartClear } = cartSlice.actions