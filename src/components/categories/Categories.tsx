import { useEffect, useState } from "react"
// import { useHttp } from "../../store/axiosBaseQuery";
import { Category } from "../../interfaces/admin.data";
import { PopupStatusMessage, } from "../PopupStatusMessage/PopupStatusMessage";
import { CategoryItem } from "./categoryItem";
import { useGetDataQuery } from '../../servises/postServise'

export const Categories = () => {

    // const request = useHttp();
    // console.log('useGetDataQuery()',useGetDataQuery('/categoriesAdmin'))
    const { data, error, isLoading } = useGetDataQuery('/categoriesAdmin');
console.log('data',data, error, isLoading)
    async function getCategories  () {
        // setCategories(await request ('/categoriesAdmin1'));
    }

    const [categories, setCategories] = useState<Category[]>([]);
    const [popup, setPopup] = useState({
        title: 'Ошибка!',
        text: 'Не удалось загрузить страны',
        isOpen: false,
        className: 'bg-danger_light',
        });
   
    function showPopupMessage(status:boolean){
        setPopup (popup =>({...popup , isOpen: status}));
    }
        
    useEffect(() => {
      getCategories();
      if (categories.length === 0){showPopupMessage(true)}
    }, []);
  
    const popupStatusMessageProps = {...popup, showPopupMessage}
console.log('ServResp',categories)

    return (
        <>
            <h1>категории</h1>
            <div onClick={()=>{showPopupMessage(false)}}>
                <PopupStatusMessage {...popupStatusMessageProps} />
            </div>
            <div>{categories.length 
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