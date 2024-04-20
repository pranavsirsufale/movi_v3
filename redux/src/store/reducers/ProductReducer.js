import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [],
}

export const productSlice = createSlice(
    {
        name: 'products',
        initialState,
        reducers:{
            getProducts: (state,action) =>{
                state.products = action.payload
                console.log(state.products);
               }
        }
    }
)

export default productSlice.reducer;


export const {  getProducts } = productSlice.actions;


