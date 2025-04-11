import { configureStore } from '@reduxjs/toolkit'
import reducer, { fetchScholarship } from '../store/slices/scholarshipSlice'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mockData = { data: 'mock' }

describe('scholarshipSlice', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            data: null,
            loading: false,
            error: null,
        })
    })

    it('should handle fetchScholarship fulfilled', async () => {
        const mock = new MockAdapter(axios)
        mock.onGet('https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab').reply(200, mockData)

        const store = configureStore({ reducer: { scholarship: reducer } })
        await store.dispatch(fetchScholarship())

        const state = store.getState().scholarship
        expect(state.data).toEqual(mockData)
        expect(state.loading).toBe(false)
    })

    it('should handle fetchScholarship rejected', async () => {
        const mock = new MockAdapter(axios)
        mock.onGet('https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab').networkError()

        const store = configureStore({ reducer: { scholarship: reducer } })
        await store.dispatch(fetchScholarship())

        const state = store.getState().scholarship
        expect(state.error).toBeDefined()
        expect(state.loading).toBe(false)
    })
})
