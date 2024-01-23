import { Link } from 'react-router-dom';
import {Category} from '../../../interfaces/admin.data';

interface CategoryItemProps{
    category: Category;
    setEditingCategory: Function;
    removeCategory: Function;
}

export const CategoryItem : React.FC<CategoryItemProps> = ({category, setEditingCategory, removeCategory}) => {
    return(
        <tr className="py-2 px-4 bg-main_02">
            <td className='px-2'>{category.id}</td>
            <td className='px-2'>{category.name}</td>
            <td className='px-2'>{category.nameUK}</td>
            <td className='px-2'>
                <Link onClick={()=> setEditingCategory(category)} to="/admin/categories/edit">Изменить</Link>
            </td>
            <td className='px-2'>
                <button onClick={()=> removeCategory(category)}>Удалить</button>
            </td>
        </tr>
    );
}