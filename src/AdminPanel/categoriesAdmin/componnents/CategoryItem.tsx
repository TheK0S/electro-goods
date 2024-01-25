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
        <tr className="py-2 px-4
            hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]
            transition-shadow duration-300 rounded-lg"
            >
            <td className='px-2'>{category.id}</td>
            <td className='px-2'>{category.name}</td>
            <td className='px-2'>{category.nameUK}</td>
            <td className='flex justify-end py-2'>
                <button
                    className='w-10 h-10 mr-2 bg-yellow rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
                    onClick={()=> changeButtonHandler()}
                >&#9998;
                </button>
                <button
                    className='w-10 h-10 mr-2 bg-red rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
                    onClick={()=> removeCategory(category)}
                >&#10060;
                </button>
            </td>
        </tr>
    );
}