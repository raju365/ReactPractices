import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
};
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // You can add product-related reducers here
        loadProduct: (state, action) => {
            state.products = action.payload;
        }
    }
})
export default productSlice.reducer;
export const { loadProduct } = productSlice.actions;