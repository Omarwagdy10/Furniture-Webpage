import { createSlice } from "@reduxjs/toolkit";
import Products from "../../Products";


export const CartSlice= createSlice({
    initialState:[],
    name:'CartSlice',
    reducers:{
        addtoCArt:(state,action)=>{
            state.push(action.payload )
            
            

        },
        deletFromCart:(state,action)=>{
            return state.filter((Product)=>Product.id !== action.payload.id )
        },
        Clear:(state,action)=>{
            return []
        },
    }
})

export const {addtoCArt,deletFromCart,Clear}= CartSlice.actions
export default CartSlice.reducer