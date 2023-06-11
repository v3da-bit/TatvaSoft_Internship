import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const initialState={
    userName:"",
}
export const userSlice=createSlice({
    name:"users",
    initialState:initialState,
    reducers:{
        updateUserName:(state,action)=>{
            state.userName=action.payload
        },
        removeUserNAme:(state,action)=>{
            state.userName=""
        },
    },
})
export const {updateUserName,removeUserNAme}=userSlice.actions
export const userSliceReducer =userSlice.reducer
// export  userSelectorUserData=useSelector((state)=>({
//     userName:state.users.userName
// }))