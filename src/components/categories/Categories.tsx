import { useEffect, useState } from "react"
import { useHttp } from "../../servises/requests";
import { Category } from "../../interfaces/admin.data";
import { PopupStatusMessage, } from "../PopupStatusMessage/PopupStatusMessage";
import { CategoryItem } from "./categoryItem";

export const Categories = () => {

    const request = useHttp();
  
    async function getCategories  () {
        setCategories(await request ('/categoriesAdmin'));
    }

    const [categories, setCategories] = useState<Category[]>([]);
    const [popup, setPopup] = useState({
        title: 'Ошибка!',
        text: 'Не удалось загрузить страны',
        isOpen: false,
        className: 'bg-danger_light',
        });
   
    function showPopupMessage(status:boolean){
        setPopup (state =>({...popup , isOpen: status}))
    }
    
    useEffect(() => {
      getCategories();
    }, []);
console.log('ServResp',categories)

const popupStatusMessageProps = {...popup, showPopupMessage}
    return (
        <>
            <h1>категории</h1>
            <PopupStatusMessage {...popupStatusMessageProps} />
            <div>{categories.length 
            ? 
                categories.map((category: Category) => (
                <CategoryItem 
                    key={category.id}
                    {...category} />)) 
            : 
                <div className='text-center font-bold'>Категорий пока нет</div>}
            </div>
        </>
    )
}