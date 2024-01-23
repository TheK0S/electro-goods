import {Category} from '../../../interfaces/admin.data';

interface CategoryItemProps{
    category: Category;
    setEditingCategory: Function;
    setEditCategoryModalIsOpen: Function
    removeCategory: Function;
}

export const CategoryItem : React.FC<CategoryItemProps> = ({category, setEditingCategory, setEditCategoryModalIsOpen, removeCategory}) => {
    const changeButtonHandler = ()=>{
        setEditingCategory(category);
        setEditCategoryModalIsOpen(true);
    }
    return(
        <tr className="py-2 px-4 bg-main_02">
            <td className='px-2'>{category.id}</td>
            <td className='px-2'>{category.name}</td>
            <td className='px-2'>{category.nameUK}</td>
            <td className='px-2'>
                <button onClick={()=> changeButtonHandler()}>Изменить</button>
            </td>
            <td className='px-2'>
                <button onClick={()=> removeCategory(category)}>Удалить</button>
            </td>
        </tr>
    );
}