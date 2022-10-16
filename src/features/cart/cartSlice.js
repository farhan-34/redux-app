import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cartItems: [],
    amount: 10,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState 
})


export default cartSlice.reducer