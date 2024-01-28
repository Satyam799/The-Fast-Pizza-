import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../src/features/user/userSlice";
import  cartReducer  from "../src/features/cart/Cartslice"

const store =configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer
    }
})

export default store