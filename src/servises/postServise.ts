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
            query: (url) => ({
              url:url,
              headers: {
                'Api-Language': 'uk',
              }
            })
          }), 
          // postData: builder.mutation({
          //   query: ({url, body}) => ({
          //     body,
          //     url: url,
          //     method: 'POST'
          //   })
          // })
      })
});
export const { useGetDataQuery, endpoints } = postAPI;