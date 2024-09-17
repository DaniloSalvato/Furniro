import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../../service/url'
import { ItemType } from './type'

export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL}),
    endpoints: (builder) => ({
        getItems: builder.query<ItemType[], unknown>({
            query:() => `/`
        })
    })
})

export const { useGetItemsQuery } = itemsApi