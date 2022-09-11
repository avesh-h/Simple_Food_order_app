import {configureStore} from '@reduxjs/toolkit'
import uiSlice from './ui-Slice'
import cartSlice from './Cart-slice'
import authSlice from './LoginAuth'  

const store = configureStore({
    reducer : {
        ui : uiSlice.reducer,
        cart : cartSlice.reducer,
        auth : authSlice.reducer
    }
})

export default store