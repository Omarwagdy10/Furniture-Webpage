import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice";
import CartSlice from "./slices/Cart-slice";
 
export  const store= configureStore({
    reducer:{
        products:productsSlice,
        Cart: CartSlice,
    }
})