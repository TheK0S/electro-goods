import axios from "axios";
import type { BaseQueryApi, BaseQueryFn,
  FetchBaseQueryError,
	fetchBaseQuery,
	FetchArgs,
	FetchBaseQueryMeta } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosRequestHeaders, AxiosError, Method } from "axios";
import { apiUrl } from "../constants";

//[
//   {
//       "id": 1,
//       "name": "Автоматические выключатели",
//       "nameUK": "\r\nАвтоматичні вимикачі",
//       "products": null
//   },
//   {
//       "id": 40,
//       "name": "test",
//       "nameUK": "test1",
//       "products": null
//   },
//   {
//       "id": 41,
//       "name": "кабель",
//       "nameUK": "кабель",
//       "products": null
//   }
// ]

interface BaseError {
  code: string | number;
  message: string;
  details: string[];
}

interface BaseResponse {
  httpStatus: number;
  created_at: string;
};
export interface AxiosBaseQueryArgs<Meta, Response = BaseResponse> {
  meta?: Meta;
  prepareHeaders?: (
    headers: AxiosRequestHeaders,
    api: BaseQueryApi
  ) => AxiosRequestHeaders;
  transformResponse?: (response: Response) => unknown;
}

export const axiosBaseQuery = ( { baseUrl }: { baseUrl: string } = { baseUrl: '' } ): BaseQueryFn<{
  url: string
  method: Method
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
},
  unknown,
  BaseError> => {
  axios.defaults.baseURL = apiUrl;
   return async({url, params, method, data}, {signal, getState}) =>{
      try {
        const response = await axios({url, method});
        console.log('url', url)
        const data = response.data; 
        console.log('RESPO', response.data)
        console.log('RESPO', response.data)
        return data
        // } catch (error) {
        //   console.error('Ошибка загрузки категорий с сервера:', error);
        //   return error;
        // }  
      } catch (err) {
        if (!axios.isAxiosError(err)) {
          return {
            error: err,
            
          };
        }
  
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message
          },
        
        };
      }    
    }
   
}