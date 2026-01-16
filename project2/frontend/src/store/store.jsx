import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from './reducers/cartSlice.jsx'
import userSlice from './reducers/userSlice.jsx'
import productSlice  from './reducers/productSlice.jsx'
export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        productReducer: productSlice,
        cartReducer: cartSlice,

    }
})
