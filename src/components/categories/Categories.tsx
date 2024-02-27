import { useEffect, useState } from "react"
import { Category } from "../../interfaces/admin.data";
import { PopupStatusMessage, } from "../PopupStatusMessage/PopupStatusMessage";
import { CategoryItem } from "./categoryItem";
import { useGetDataQuery } from '../../servises/postServise'

export const Categories = () => {

    const { 
        data: categories = [] ,
        isLoading,
        error 
    } = useGetDataQuery('/categoriesAdmin');
    const [popup, setPopup] = useState({
        title: 'Ошибка!',
        text: 'Не удалось загрузить страны',
        isOpen: false,
        className: 'bg-danger_light',
        });
    function showPopupMessage(status:boolean){
        setPopup (popup =>({...popup , isOpen: status}));
    };
    const popupStatusMessageProps = {...popup, showPopupMessage};
    useEffect(() => {
        if (error){showPopupMessage(true)}
      }, []);
    
    if (isLoading) return (<h1 className="p-10">...LOADING</h1>)   

    if (error) return ( <>
                            <h1 className="p-10">ERROR</h1>
                            <div onClick={()=>{showPopupMessage(false)}}>
                                <PopupStatusMessage {...popupStatusMessageProps} />
                            </div>
                        </>
    )
    return (
        <>
            <h1>категории</h1>
            <div onClick={()=>{showPopupMessage(false)}}>
                <PopupStatusMessage {...popupStatusMessageProps} />
            </div>
            <div>{(categories) 
            ? 
                categories.map((category: Category) => (
                <CategoryItem 
                    key={category.id}
                    {...category} />)) 
            : 
                <div className='text-center font-bold'> данных пока нет</div>}
            </div>
        </>
    )
}