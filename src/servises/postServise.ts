import {createApi} from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';
const API_URL = 'http://eg.';

export const postAPI = createApi({
    reducerPath: 'postAPI',
    // tagTypes: ['Categories'],//тег тип для обновления посмотреть далее насколько он нужен??
    baseQuery: axiosBaseQuery({
      baseUrl: '',
        // transformResponse: (response) => response
    }),
    
    endpoints: (builder) => ({
        
          getData: builder.query({ 
            query: (url) => url
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