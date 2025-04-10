import { configureStore } from '@reduxjs/toolkit'
import scholarshipReducer from './slices/scholarshipSlice'

export const store = configureStore({
    reducer: {
        scholarship: scholarshipReducer,
    },
})
