import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProducts = createAsyncThunk('fetchProducts', async(b) => {
    const res = await axios.get(`https://fakestoreapi.com/products?limit=${b}`);
    return res.data;  
})


const ProductsSlice = createSlice({
    name: 'products',
    initialState:{
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log(`Error: ${action.payload}`);
            state.isError = true
        });
    }
})



export default ProductsSlice.reducer;