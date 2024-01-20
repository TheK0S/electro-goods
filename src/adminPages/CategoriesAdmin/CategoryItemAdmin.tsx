import { Link } from 'react-router-dom';
import Category from '../../interfaces/Category';

interface CategoryItemAdminProps{
    category: Category;
    removeCategory: Function;
}

export const CategoryItemAdmin : React.FC<CategoryItemAdminProps> = ({category, removeCategory}) => {
    return(
        <tr className="py-2 px-4 bg-main_02">
            <td className='px-2'>{category.id}</td>
            <td className='px-2'>{category.name}</td>
            <td className='px-2'>{category.nameUK}</td>
            <td className='px-2'>
                <Link to={`/admin/category/update/${category.id}/${category.name}/${category.nameUK}`}>Изменить</Link>
            </td>
            <td className='px-2'>
                <button onClick={()=> removeCategory(category)}>Удалить</button>
            </td>
        </tr>
    );
}