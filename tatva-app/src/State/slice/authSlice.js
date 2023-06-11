import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const initialState={
 userDetails:""
}
export const authSlice=createSlice({
    name:"auths",
    initialState:initialState,
    reducers:{
        setUSer1:(state,action)=>{
            state.userDetails=action.payload
        },
        removeUser1:(state,action)=>{
            state.userDetails=""
        },
    },
})
export const {setUSer1,removeUser1}=authSlice.actions
export const authSliceReducer =authSlice.reducer
