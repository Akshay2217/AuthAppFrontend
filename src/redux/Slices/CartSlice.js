import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        }
    }
})

export default cartSlice.reducer;
export const  { addItem } = cartSlice.actions