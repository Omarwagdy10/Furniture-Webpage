import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchproducts= createAsyncThunk('Productsslice/fetchproducts',async()=>{
  const res= await fetch('https://fakestoreapi.com/products')
  const data = await res.json()  
  return data
})
const Productsslice=  createSlice({
    name:'Productsslice',
    initialState:[],
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchproducts.fulfilled,(state,action)=>{
            return action.payload
        })
    }
})

export const {} = Productsslice.actions
export default Productsslice.reducer