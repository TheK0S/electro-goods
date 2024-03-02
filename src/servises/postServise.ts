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
            query: ({url, lang}) => ({
              url,
              headers: {
                'Api-Language': lang,
              }
            })
          }), 
          postData: builder.mutation({
            query: ({url, body}) => ({
              body,
              url: url,
              method: 'POST'
            })
          }),
          putData: builder.mutation({
            query: ({url, id}) => ({
              url: url+'/'+id,
              method: 'PUT'
            })
          }),
          deleteData: builder.mutation({
            query: ({url, id}) => ({
              url: url+'/'+id,
              method: 'DELETE'
            })
          })
      })
});
export const { useGetDataQuery, endpoints } = postAPI;