import axios from "axios";
import { apiUrl } from "./api";
import { useCallback, useState } from "react";
import { PopupProps } from "../components/PopupStatusMessage/PopupStatusMessage";


export const useHttp = () => {

  // const [isPopupStatusMessageOpen, setIsPopupStatusMessageOpen] = useState(false);
  // const [popup, setPopup] = useState<PopupProps>();

  axios.defaults.baseURL = apiUrl;
    const request = useCallback(async(url:string, method = 'GET') =>{
      try {
          const response = await axios({url, method});
          const data = response.data;
          return data;
        } catch (error) {
          console.error('Ошибка загрузки категорий с сервера:', error);
          // setPopup({
          //   title: 'Ошибка!',
          //   text: 'Не удалось загрузить страны',
          //   isOpen: true,
          //   className: 'bg-danger_light',
          //   onClose: () => setIsPopupStatusMessegeOpen(false)
          // });
        }    
    }
    , [])
    return request
}


   
