import {createApi} from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';
import {apiUrl} from '../constants'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    // tagTypes: ['Categories'],//тег тип для обновления посмотреть далее насколько он нужен??
    baseQuery: axiosBaseQuery({
      baseUrl: apiUrl,
        // transformResponse: (response) => response
    }),
    endpoints: (builder) => ({
          getData: builder.query({ 
            query: (url) => {
              console.log('dvbhdv', url )
              return url}
         }), 
          createData: builder.mutation({
            query: (body) => ({
              body,
              url: '/',
              method: 'POST'
            })
          })
      })
});
export const { useGetDataQuery, endpoints } = postAPI;