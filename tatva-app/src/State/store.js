import { configureStore } from '@reduxjs/toolkit'
import { userSliceReducer } from './slice/userSlice'
import { createStoreHook } from 'react-redux'
import {  cartSliceReducer } from './slice/cartSlice'

export const store= configureStore({
  reducer: {
    users:userSliceReducer,
    carts:cartSliceReducer
  }
})