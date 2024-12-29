import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slices/ProductSlice"
import CartReducer from "./Slices/CartSlice"
import AuthReducer from "./Slices/AuthSlice"

export const store = configureStore({
    reducer: {
        Auth: AuthReducer,
        Product: ProductReducer,
        cart: CartReducer
    }
})