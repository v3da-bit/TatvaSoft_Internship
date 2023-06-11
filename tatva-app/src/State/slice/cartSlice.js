import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const initialState={
 userDetails:""
}
export const cartSlice=createSlice({
    name:"carts",
    initialState:initialState,
    reducers:{
        setUSer:(state,action)=>{
            console.log("action"+action.payload)
            state.userDetails=action.payload
        },
        removeUser:(state,action)=>{
            state.userDetails=""
        },
    },
})
export const {setUSer,removeUser}=cartSlice.actions
export const cartSliceReducer=cartSlice.reducer
