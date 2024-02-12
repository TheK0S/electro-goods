import axios from "axios";
import { apiUrl } from "./api";
import { useCallback } from "react";

export const useHttp = () => {

  axios.defaults.baseURL = apiUrl;
    const request = useCallback(async(url:string, method = 'GET') =>{
      try {
          const response = await axios({url, method});
          const data = response.data;
          return data;
        } catch (error) {
          console.error('Ошибка загрузки категорий с сервера:', error);
          alert("err") // add alert windos enstead
        }    
    }
    , [])
    return request
}


   
