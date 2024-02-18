import axios from "axios";
import { apiUrl } from "./api";
import { useCallback, useState } from "react";
// import { PopupProps } from "../components/PopupStatusMessage/PopupStatusMessage";

export const useHttp = () => {

  axios.defaults.baseURL = apiUrl;
    const request = useCallback(async(url:string, method = 'GET') =>{
      try {
          const response = await axios({url, method});
          const data = response.data;
          return data;
        } catch (error) {
          console.error('Ошибка загрузки категорий с сервера:', error);
          return error
        }    
    }
    , [])
    return request
}