import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchScholarship = createAsyncThunk(
    'scholarship/fetch',
    async () => {
        const res = await axios.get('https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab')
        return res.data
    }
)

const scholarshipSlice = createSlice({
    name: 'scholarship',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchScholarship.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchScholarship.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
            })
            .addCase(fetchScholarship.rejected, (state, action) => {
                state.error = action.error.message
                state.loading = false
            })
    },
})

export default scholarshipSlice.reducer
