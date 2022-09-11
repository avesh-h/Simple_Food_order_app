import {createSlice} from '@reduxjs/toolkit'


const authSlice = createSlice({
    name:'auth',
    initialState:{Authentication : false},
    reducers:{
        login(state){
            state.Authentication = true;
        },
        logout(state){
            state.Authentication = false;
        }
    }
})

export const authActions = authSlice.actions

export default authSlice