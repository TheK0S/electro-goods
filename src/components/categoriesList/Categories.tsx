import { useEffect, useState } from "react"
import { useHttp } from "../../servises/requests";
import { Category } from "../../interfaces/admin.data";
import { PopupStatusMessage, PopupProps } from "../PopupStatusMessage/PopupStatusMessage";

export const Categories = () => {

    const request = useHttp();
  
    async function getCategories  () {
        // setCategories(await request ('/countriesAdmin'));

    }

    const [categories, setCategories] = useState<Category[]>([]);

    const [isPopupStatusMessageOpen, setIsPopupStatusMessageOpen] = useState(true);
    const [popup, setPopup] = useState<PopupProps>({title: 'Ошибка!',
    text: 'Не удалось загрузить страны',
    isOpen: isPopupStatusMessageOpen,
    className: 'bg-danger_light',
    showPopupMessege: setIsPopupStatusMessageOpen,});

    // setPopup({
    //     title: 'Ошибка!',
    //     text: 'Не удалось загрузить страны',
    //     isOpen: true,
    //     className: 'bg-danger_light',
    //     // onClose: () => setIsPopupStatusMessegeOpen,
    //   });

    // useEffect(() => {
    //     // const a =getCategories();
    
    // }, []);

    return (
        <>
       <h1>категории</h1>
        <PopupStatusMessage {...popup} />
        </>
    )
}