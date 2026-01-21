import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    cart:[],
 };
 
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        loadCart: (state, action) => {
            state.cart = action.payload;
        },
        addToCart: (state, action) => {
            const productId = action.payload;
            const existingItem = state.cart.find(item => item.productId === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ productId, quantity: 1 });
            }
        },
        increaseQty: (state, action) => {
            const productId = action.payload;
            const item = state.cart.find(item => item.productId === productId);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQty: (state, action) => {
            const productId = action.payload;
            const item = state.cart.find(item => item.productId === productId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeItem: (state, action) => {
            const productId = action.payload;
            state.cart = state.cart.filter(item => item.productId !== productId);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }

})
export default cartSlice.reducer;
export const { loadCart, addToCart, increaseQty, decreaseQty, removeItem, clearCart } = cartSlice.actions;